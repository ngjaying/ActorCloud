from flask import g, request, current_app
from marshmallow import validates, post_load, post_dump
from marshmallow.validate import OneOf

from actor_libs.database.orm import db
from actor_libs.errors import (
    DataExisted, FormInvalid, APIException, DataNotFound
)
from actor_libs.schemas import BaseSchema
from actor_libs.schemas.fields import (
    EmqString, EmqInteger, EmqDateTime, EmqList, EmqEmail, EmqFloat, EmqBool
)
from app.models import (
    User, Tenant, Role, UploadInfo, Group
)


__all__ = [
    'LoginSchema', 'UserSchema', 'UpdateUserSchema', 'ResetPasswordSchema', 'RoleSchema',
    'TenantSchema', 'TenantUpdateSchema', 'LoginLogSchema', 'InvitationSchema',
    'ResourceSchema', 'SystemInfoSchema', 'MessageSchema', 'LogoInfoSchema'
]


class LoginSchema(BaseSchema):
    email = EmqEmail(required=True)
    remember = EmqBool(allow_none=True)
    password = EmqString(required=True, len_min=6, len_max=100, load_only=True)


class UserSchema(BaseSchema):
    username = EmqString(required=True)
    email = EmqEmail(required=True)
    password = EmqString(required=True, len_min=6, len_max=100, load_only=True)
    enable = EmqInteger(allow_none=True)
    nickname = EmqString(allow_none=True)
    phone = EmqString(allow_none=True, len_max=15)
    department = EmqString(allow_none=True)
    lastRequestTime = EmqDateTime(allow_none=True)
    loginTime = EmqDateTime(allow_none=True)
    expiresAt = EmqDateTime(allow_none=True)
    roleIntID = EmqInteger(allow_none=True)
    userAuthType = EmqInteger(allow_none=True, validate=OneOf([1, 2]))
    groups = EmqList(allow_none=True, list_type=str, load_only=True)
    tenantID = EmqString(dump_only=True)

    @validates('username')
    def validate_username(self, value):
        if value in current_app.config.get('RESERVED'):
            raise FormInvalid(field='username')

    @validates('email')
    def email_is_exist(self, value):
        try:
            split_email = value.split('@')[0]
            if split_email in current_app.config.get('RESERVED'):
                raise FormInvalid(field='email')
        except Exception:
            raise FormInvalid(field='email')
        if db.session.query(User.email).filter_by(email=value).first():
            raise DataExisted(field='email')

    @post_load
    def handle_user_auth_type(self, data):
        if 'user_id' not in g:
            data['userAuthType'] = 1
        groups_uid = self.get_request_data(key='groups')
        auth_type = data.get('userAuthType')
        if auth_type not in (1, 2):
            raise FormInvalid(field='userAuthType')
        if auth_type == 2 and groups_uid:
            groups = Group.query \
                .filter_tenant(tenant_uid=g.tenant_uid) \
                .filter(Group.groupID.in_(set(groups_uid))).all()
            if len(groups_uid) != len(groups):
                raise DataNotFound(field='groups')
            data['groups'] = groups
        else:
            data.pop('groups', None)
        return data


class UpdateUserSchema(BaseSchema):
    roleIntID = EmqInteger(required=True)
    enable = EmqInteger(required=True)
    expiresAt = EmqDateTime(allow_none=True)
    phone = EmqString(allow_none=True, len_max=15)
    userAuthType = EmqInteger(allow_none=True)
    groups = EmqList(allow_none=True, list_type=str, load_only=True)

    @post_load
    def handle_user_auth_type(self, data):
        if 'user_id' not in g:
            data['userAuthType'] = 1
        groups_uid = self.get_request_data(key='groups')
        auth_type = data.get('userAuthType')
        if auth_type not in (1, 2):
            raise FormInvalid(field='userAuthType')
        if auth_type == 2 and groups_uid:
            groups = Group.query \
                .filter_tenant(tenant_uid=g.tenant_uid) \
                .filter(Group.groupID.in_(set(groups_uid))).all()
            if len(groups_uid) != len(groups):
                raise DataNotFound(field='groups')
            data['groups'] = groups
        else:
            data.pop('groups', None)
        return data


class ResetPasswordSchema(BaseSchema):
    oldPassword = EmqString(required=True, len_min=6, len_max=100)
    password = EmqString(required=True, len_min=6, len_max=100)


class RoleSchema(BaseSchema):
    roleName = EmqString(required=True)
    description = EmqString(allow_none=True, len_max=300)
    permissions = EmqList(required=True, list_type=int)
    isShare = EmqInteger(dump_only=True)
    tenantID = EmqString(dump_only=True)

    @validates('permissions')
    def is_empty_list(self, value):
        if not value:
            raise FormInvalid('permissions')

    @validates('roleName')
    def role_name_is_exist(self, value):
        if self._validate_obj('roleName', value):
            return
        role = Role.query \
            .join(Tenant, Role.tenantID == Tenant.tenantID) \
            .filter(Role.roleName == value) \
            .filter(Tenant.tenantID == g.tenant_uid).all()
        if role:
            raise DataExisted(field='roleName')


class TenantSchema(BaseSchema):
    tenantType = EmqInteger(required=True, validate=OneOf([1, 2]))
    tenantID = EmqString(allow_none=True, len_max=9)
    company = EmqString(allow_none=True)
    companySize = EmqString(allow_none=True)
    companyAddress = EmqString(allow_none=True)
    contactPerson = EmqString(allow_none=True)
    contactPhone = EmqString(allow_none=True)
    contactEmail = EmqEmail(allow_none=True)
    enable = EmqInteger(dump_only=True)
    tenantBalance = EmqFloat(dump_only=True)
    invoiceBalance = EmqFloat(dump_only=True)
    logo = EmqInteger()
    logoDark = EmqInteger()

    @validates('company')
    def company_is_exist(self, value):
        tenant_type = request.get_json().get('tenantType')
        if value == '':
            raise APIException()
        if tenant_type == 2 and Tenant.query.filter_by(company=value).first():
            raise DataExisted(field='company')

    @post_dump
    def convert_image(self, data):
        logo_id = data.get('logo')
        logo_dark_id = data.get('logoDark')
        logo = UploadInfo.query.filter(UploadInfo.id == logo_id).first()
        logo_dark = UploadInfo.query.filter(UploadInfo.id == logo_dark_id).first()
        if logo:
            logo_light_info = {
                'name': logo.displayName,
                'uploadID': logo.id,
                'url': f'/api/v1/download?fileType=image&filename={logo.fileName}'
            }
        else:
            file_name = 'logo.png'
            logo_light_info = {
                'name': file_name,
                'uploadID': 0,
                'url': '/backend_static/images/%s' % file_name
            }
        if logo_dark:
            logo_dark_info = {
                'name': logo_dark.displayName,
                'uploadID': logo_dark.id,
                'url': f'/api/v1/download?fileType=image&filename={logo_dark.fileName}'
            }
        else:
            file_name = 'logo-dark.png'
            logo_dark_info = {
                'name': file_name,
                'uploadID': 0,
                'url': '/backend_static/images/%s' % file_name
            }
        data['logo'] = logo_light_info
        data['logoDark'] = logo_dark_info
        return data


class TenantUpdateSchema(BaseSchema):
    company = EmqString(allow_none=True)
    contactPerson = EmqString(allow_none=True)
    contactPhone = EmqString(allow_none=True)
    contactEmail = EmqEmail(allow_none=True)
    logo = EmqInteger()
    logoDark = EmqInteger()

    @validates('company')
    def company_is_exist(self, value):
        if value == '':
            raise FormInvalid(field='company')
        if Tenant.query.filter_by(company=value).first():
            raise DataExisted(field='company')

    @post_load
    def handle_logo(self, data):
        logo = data.get('logo')
        logo_dark = data.get('logoDark')
        if logo is not None:
            if logo < 1:
                data.pop('logo')
            else:
                upload_info = UploadInfo.query \
                    .join(User, User.id == UploadInfo.userIntID) \
                    .filter(UploadInfo.id == logo,
                            User.tenantID == g.tenant_uid) \
                    .first()
                if not upload_info:
                    raise DataNotFound(field='logo')
        if logo_dark is not None:
            if logo_dark < 1:
                data.pop('logoDark')
            else:
                upload_info = UploadInfo.query \
                    .join(User, User.id == UploadInfo.userIntID) \
                    .filter(UploadInfo.id == logo_dark,
                            User.tenantID == g.tenant_uid) \
                    .first()
                if not upload_info:
                    raise DataNotFound(field='logoDark')


class LoginLogSchema(BaseSchema):
    class Meta:
        additional = ('IP', 'isLogged', 'loginTime', 'userIntID')


class InvitationSchema(BaseSchema):
    userIntID = EmqInteger(allow_none=True)
    inviteEmail = EmqEmail(required=True)
    roleIntID = EmqInteger(required=True)
    tenantID = EmqString(allow_none=True, len_max=9)
    inviteStatus = EmqInteger(allow_none=True, validate=OneOf([0, 1]))


class ResourceSchema(BaseSchema):
    class Meta:
        additional = ('children', 'parent')


class SystemInfoSchema(BaseSchema):
    key = EmqString(requird=True)
    value = EmqString(required=True)


class MessageSchema(BaseSchema):
    msgTitle = EmqString(required=True)
    msgContent = EmqString(required=True)
    messageType = EmqInteger(required=True)


class LogoInfoSchema(BaseSchema):
    logo = EmqInteger()
    sign = EmqInteger()
    icon = EmqInteger()
    logoDark = EmqInteger()
