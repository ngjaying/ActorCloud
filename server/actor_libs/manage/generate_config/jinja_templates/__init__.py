import os
from typing import AnyStr, Dict

import jinja2


def insert_jinja_template(
        project_path: AnyStr, out_path: AnyStr,
        template_name: AnyStr, jinja_config: Dict) -> None:
    """ Based on the jinja template generate configuration """

    templates_path = os.path.join(
        project_path, 'actor_libs/manage/generate_config/jinja_templates'
    )
    env = jinja2.Environment(
        loader=jinja2.FileSystemLoader(searchpath=templates_path, encoding='utf-8'),
        lstrip_blocks=True)
    template = env.get_template(template_name)
    result = template.render(jinja_config)
    with open(out_path, 'w+') as f:
        f.write(result)
