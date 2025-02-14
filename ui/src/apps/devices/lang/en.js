export default {
  devices: {
    device: 'Devices',
    deviceInfo: 'Device Basic Information',
    loraInfo: 'loRa Information',
    deviceName: 'Device Name',
    deviceNameRequired: 'Device Name is required',
    deviceConsoleIP: 'Console IP',
    deviceConsoleUsername: 'Console Username',
    deviceConsolePort: 'Console Port',
    deviceType: 'Client Type',
    deviceTypeRequired: 'Client Type is required',
    deviceID: 'Device ID',
    deviceIDRequired: '8-36 characters, which can include numbers, letters, underscores',
    warning: 'If not, the system will generate 36 bits by default',
    productName: 'Product Name',
    productNameRequired: 'Product Name is required',
    groupName: 'Groups',
    deviceStatus: 'Status',
    blocked: 'Blocked',
    isTrue: 'Yes',
    isFalse: 'No',
    createAt: 'Create At',
    lastConnection: 'Last Connection',
    createUser: 'Creator',
    authInfo: 'Auth Info',
    or: 'or',
    createProduct: 'Create Product',
    manufacturer: 'Manufacturer',
    manufacturerRequired: 'Manufacturer is required',
    serialNumber: 'Serial Number',
    serialNumberRequired: 'Serial Number is required',
    softVersion: 'Software Version',
    softVersionRequired: 'Software Version is required',
    hardwareVersion: 'Hardware Version',
    hardwareVersionRequired: 'Hardware Version is required',
    description: 'Description',
    descriptionRequired: 'Description is required',
    locationSelect: 'Location Select',
    locationKey: 'Enter the keyword to select the location',
    location: 'Location',
    unableLocation: 'Unable to get this location',
    locationRequired: 'Location is required',
    longitude: 'Longitude',
    longitudeIsNumber: 'Longitude is a number',
    latitude: 'Latitude',
    latitudeIsNumber: 'latitude is a number',
    locationValidate: 'Please enter the correct format.',
    nextStep: 'Next Step',
    backStep: 'Previous',
    authType: 'Auth Type',
    authTypeRequired: 'Auth Type is required',
    autoCreateCerts: 'Auto Create Certs',
    autoCreateCertsRequired: 'Auto Create Certs is required',
    autoCreatePopover: 'If you choose Yes, a certificate is automatically created and bound to the device',
    username: 'User Name',
    usernameWarnig: 'If not, it will be consistent with the device number',
    token: 'Token',
    tokenRequired: 'Token is required',
    filedLength: 'The field length must be between 8 and 36 characters',
    deviceStatusLabel: 'Status',
    connectedAt: 'Connected At',
    clientIP: 'Client IP',
    keepAlive: 'Keep Alive',
    baseInfo: 'Basic Information',
    runLog: 'Runing Log',
    event: 'Event',
    deviceCode: 'Device Code',
    mqttWarning: 'When the device is connected to the MQTT server, client_id is the device ID',
    mqtt: 'MQTT Server',
    mqttssBroker: 'Cert',
    CoAP: 'CoAP Server',
    coapssBroker: 'Cert',
    proxy: 'Proxy subscription',
    proxyInfo1: 'The proxy subscription refers to: After the device is connected successfully, the server automatically subscribes the device to subscribe to certain topics, and the device does not need to perform the subscription operation again.',
    proxyInfo2: 'In the initial situation, the system has already subscribed to the device theme and grouping theme for the device by default, and device developers do not need to care about the theme.',
    proxyInfo3: 'When the control terminal calls the API, it only needs to specify the device or group. The device listens to the received message and parses the payload to perform the corresponding operation.',
    proxyInfo4: 'When the device needs to distinguish messages by "Topic", the platform also supports user-defined proxy-subscribed topics (up to 10 topics).',
    proxyInfoWarning: 'Agents subscribe to devices that are not suitable for the CoAP protocol.',
    addSubscibe: 'Add Subscibe',
    topic: 'Topic',
    topicRequired: 'Topic is required',
    addTopic: 'Add Topics',
    addTopicSuccess: 'Add Topic Success',
    bindCerts: 'Bind Certs',
    addCert: 'Add Certs',
    certName: 'Cert Name',
    enable: 'Enable',
    certs: 'Certs',
    certsRequired: 'Certs is required',
    certInfo: 'Enter certs name search',
    createCert: 'Create Certs',
    certNotNull: 'The selected Certs can not be empty',
    addInstruction: 'Add Instruction',
    publishStatusLabel: 'Status',
    publishStatusContent: 'Content',
    publishTopic: 'Topic',
    publishCreateAt: 'Create At',
    publishInstruct: 'Instruct',
    publishType: 'Type',
    publishTypeRequired: 'Publish Type is required',
    controlType: 'Control Type',
    publishTask: 'Publish Task',
    constantTimer: 'Constant',
    intervalTimer: 'Interval',
    timerRanger: 'Please input the correct time',
    instructWarning1: 'Instruction content must be in JSON format',
    instructWarning2: 'Default to device topic',
    needAck: 'Need Ack',
    isNeedAck: 'Is Need Ack',
    intervalType: 'Interval Type',
    needNotAck: 'Need Not Ack',
    softwarePackage: 'Software Package',
    softwarePackageRequired: 'Software Package is required',
    publishSuccess: 'Publish Success',
    taskSuccess: 'Add Task Scuccess',
    instructError: 'Add Instruct Fail',
    taskName: 'Name',
    taskNameRequired: 'Schedule Name is required',
    timerType: 'Type',
    timerTypeRequired: 'Timer type is required',
    publishTime: 'Time',
    publishTimeRequired: 'Publish Time is required',
    dateTimePlaceholder: 'Please select date - time.',
    repeatType: 'Repeat',
    repeatTypeRequired: 'Repeat type is required',
    timeNow: 'At Once',
    timeNoRepeat: 'Timing (Not repeated)',
    timeRepeat: 'Timing（repeat)',
    hour: 'Hour',
    everyHour: 'Every Hour',
    everyDay: 'Every Day',
    minutes: 'Minutes',
    minutesRules: 'The range is 1-59 minutes.',
    hourRequired: 'Please input 1-59 minutes per hour',
    day: 'Day',
    dayRequired: 'Please select 00:01 to 23:59 each day.',
    week: 'Week',
    weekRequired: 'Please select a week',
    weekTimeRequired: 'Please select time',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
    instructRecords: 'Instructs Records',
    intervalTask: 'Schedule Publish',
    platformInstruct: 'Platform Instruct',
    customInstruct: 'Custom Instruct',
    updateInstruct: 'Update Instruct',
    lwm2mInstruct: 'LwM2M Instruct',
    payloadRequired: 'payload is required',
    objectName: 'Object Name',
    instance: 'Instance',
    instanceCount: 'Instance Count',
    itemCount: 'Item Count',
    autoSubscibe: 'Auto Subscibe',
    devicesItems: 'Items',
    itemName: 'Item Name',
    itemType: 'Item Type',
    itemUnit: 'Item Unit',
    itemOperations: 'Item Operation',
    itemValue: 'Item Value',
    read: 'Read',
    write: 'Write',
    execute: 'Execute',
    unsubscribe: 'Unsubscribe',
    unsubscribing: 'Unsubscribing',
    subscribe: 'Subscribe',
    subscribing: 'Subscribing',
    subInstruction: 'Sent, waiting for the device to return',
    autoSubSccuess: 'Auto Subscribe Success',
    autoSubCancel: 'Unsubscribe Success',
    readSuccess: 'Read Success',
    writeSuccess: 'Write Success',
    executeSucceess: 'Execute Success',
    carrier: 'carrier',
    physicalNetwork: 'Physical Network',
    tagName: 'tag',
    includeDevices: 'Include Devices',
    addDevices: 'Add devices',
    devicesImport: 'Import',
    devicesExport: 'Export',
    devicesLogin: 'Login',
    instruct: 'Instruct',
    deviceTask: 'Task',
    createGroup: 'Groups',
    R: 'Read',
    W: 'Write',
    E: 'Execute',
    value: 'Payload',
    itemRequired: 'Item is required',
    instanceRequired: 'Instance is required',
    valueRequired: 'Payload is required',
    operRequired: 'Operation is required',
    setValue: 'Set value',
    dataPointsAll: 'Please fill in the values of all data points',
    timeLimit: 'Time range must be less than one week',
    upLinkSystem: 'Uplink System',
    upLinkSystemRequired: 'Uplink system is required',
    parentDevice: 'Parent Device',
    parentDeviceRequired: 'Parent Devices is required',
    gateway: 'Gateway',
    gatewayRequired: 'Gateway is required',
    autoSub: 'Auto Subscibe',
    autoSubRequired: 'Auto Subscibe is required',
    IMEIRequired: 'IMEI is required',
    IMSIRequired: 'IMSI is required',
    metaData: 'Meta Data',
    metaDataTitle: 'Meta Data information',
    metaDataTip: 'You can add metadata to define custom attributes for the device, which can only be entered in JSON format.',
    netID: 'Net ID',
    netIDRequired: 'Net ID is required',
    netIDlen6: 'Please enter 6 bit network ID',
    txChain: 'txChain',
    txChainRequired: 'txChain is required',
    loraType: 'Lora Type',
    loraTypeRequired: 'Lora Type is required',
    region: 'Region',
    regionRequired: 'Region is required',
    char16: '16 characters',
    canJoin: 'Allow to join',
    char32: '32 characters',
    len15: 'No more than 15 digits in length',
    len8to36: 'The length is 8-36 bits',
    appEUIRequired: 'AppEUI is required',
    appEUILen16: 'Please enter 16-bit AppEUI',
    appKeyRequired: 'AppKey is required',
    appkeylen32: 'Please enter a 32-bit AppKey',
    fcntCheckRequired: 'FCnt Check is required',
    NwkSKeyRequired: 'NwkSKey is required',
    NwkSKeyLen32: 'Please enter 32-bit nwkSKey',
    appSKeyRequired: 'AppSKey is required',
    appSKeylen32: 'Please enter a 32-bit AppSKey',
    fcntUpRequired: 'FCnt Up is required',
    fcntDownRequired: 'FCnt Down is required',
    MACRequired: 'MAC is required',
    MACLen16: 'Please enter a 16-bit MAC address',
    index: 'Index',
    indexRequired: 'Index is required (0 - 255)',
    num0to255: 'Only numbers from 0 to 255 can be entered',
    DevEUIRequried: 'DevEUI is required',
    DevEUILen16: 'Please enter 16-bit DevEUI',
    DevAddrRequired: 'DevAddr is required',
    DevAddrLen8: 'Please enter 16-bit DevAddr',
    deviceConnect: 'Connect logs',
    viewMore: 'View more',
    noRunLogs: 'No running logs',
    deviceAlerts: 'Alerts',
    noAlerts: 'No alerts',
    deviceBaseInfo: 'Basic information',
    locationInfo: 'Location',
    locationPopover: 'You can select the location of the device by directly selecting a point on the map, or you can add the location of the device by directly entering a specific latitude and longitude.',
    typeError: 'Incorrect data type',
    realtime: 'Real-time Data',
    historyTime: 'Historical data',
    reportedValue: 'Value',
    msgTime: 'Message Time',
    chartHour: 'Hour',
    chartDay: 'Day',
    chartMonth: 'Month',
    average: 'Average',
    noMetrics: 'The group belongs to a product that has no aggregation metrics defined',
    dataPoint: 'Data Point',
    lwm2mPath: 'Path',
    itemSearch: 'Please enter a item name search',
    allDevices: 'All devices (+)',
  },
  gateways: {
    gateway: 'Gateway',
    gatewayName: 'Gateway Name',
    gatewayNameRequired: 'Gateway Name is required',
    gatewayInfo: 'Gateway information',
    channels: 'Channels',
    addChannel: 'Add channel',
    driveType: 'Driver Type',
    channelTypeRequired: 'Channel type is required',
    COMRequired: 'COM is required',
    COMLimit: 'COM adds at most one',
    IP: 'IP',
    IPRequired: 'IP is required',
    IPCorrect: 'Enter the correct IP',
    TCPLimt: 'TCP adds up to nine',
    port: 'Port',
    portRequired: 'Port is required',
    BaudRequired: 'Baud is required',
    DataRequired: 'Data is required',
    Stop: 'Stop is required',
    Parity: 'Parity is required',
    gatewayUpdateControl: 'Update configuration',
    confirmUpdate: 'Confirm update gateway information?',
    cloudProtocol: 'Cloud Protocol',
    upLinkNetwork: 'Uplink Network',
    upLinkNetworkRequired: 'Uplink Network is required',
    gatewayModel: 'Gateway Model',
    gatewayModelRequired: 'Gateway Model is required',
    authType: 'Auth Type',
    authTypeRequired: 'Auth Type is required',
    mac: 'MAC',
    macRequired: 'MAC is required',
    gatewayLocation: 'Location',
    gatewayLocationRequired: 'Location is required',
    gatewayID: 'ID',
    gatewayUsername: 'Username',
    gatewayToken: 'Token',
    gatewayChannel: 'Channel',
    description: 'Description',
    descriptionRequired: 'Description is required',
    deviceData: 'Device Data',
    gatewayEvent: 'Gateway Event',
    devices: 'Devices',
    gatewayStatus: 'Status',
  },
  groups: {
    group: 'Group',
    groupName: 'Group Name',
    groupNameRequired: 'Group Name is required',
    groupID: 'Group ID',
    groupInfo: 'Group Info',
    groupIDRequired: 'Group ID is required',
    deviceNum: 'Devices',
    productName: 'Product Name',
    productIDRequired: 'Product Name is required',
    description: 'Description',
    descriptionRequired: 'Description is required',
    createUser: 'Creator',
    createAt: 'Create At',
    deviceControl: 'Devices Control',
    addInstruction: 'Add Instruction',
    publishSuccess: 'Publish success',
    publishFailure: 'Publish failure',
    groupPublishFailure: 'Group publish failure',
    publishTimeout: 'Publish timeout',
    groupDeviceLimit: 'A group can bind up to 1000 devices',
    notNull: 'The selected device can not be empty',
    notCrossProduct: "Grouping devices can't cross products",
    isCreated: 'Create Group Success',
    addDevice: 'Add devices now',
    addCancel: 'Cancel',
    aggregated: 'Aggregated data',
    proxy: 'Proxy Subscribe',
    gatewayNum: 'Number of Gateways',
  },
  certs: {
    name: 'Name',
    createUser: 'Creator',
    createAt: 'Create At',
    enable: 'Enable',
    allowed: 'Allowed',
    notAllowed: 'Not Allowed',
    isTrue: 'Yes',
    isFalse: 'No',
    isCreate: 'Create Cert',
    isCreated: 'Create Cert Success',
    nameRequired: 'Name is required',
    enableRequired: 'Enable is required',
    certTips: 'The certificate can be bound to the device, and the authentication mode of the corresponding device must be set to certificate authentication.',
    cert: 'Devices Cert',
    key: 'Devices Key',
    root: 'Actorcloud Root CA',
    download: 'Donwlaod',
    downloadCert: 'Download Cert',
    bindDevices: 'Bind Devices',
    addDevices: 'Add Devices',
    deviceName: 'Device Name',
    deviceID: 'Device ID',
    productName: 'Product Name',
    groupName: 'Group Name',
    notNull: 'The selected device can not be empty',
  },
  map: {
    groupName: 'groupName',
  },
  deviceLogs: {
    deviceName: 'Device Name',
    deviceID: 'Client ID',
    IP: 'Client IP',
    connectStatusLabel: 'Event',
    createAt: 'Create At',
    instruct: 'Instruct',
    payload: 'Payload',
    publishStatusLabel: 'Instruction Status',
    controlCreateAt: 'Control Create At',
    eventCreateAt: 'Event Create At',
    topic: 'Topic',
  },
  tags: {
    tag: 'Tag',
    tagNameRequired: 'Tag Name is required',
  },
  publish: {
    device: 'Device',
    deviceRequired: 'Publish Device is Required',
    searchDevice: 'Search by device',
    group: 'Publish Group',
    groupRequired: 'Publish Group is required',
    commandType: 'Command Type',
    customCommand: 'Custom Command',
    upgradeCommand: 'Upgrade Command',
    package: 'Package',
    packageRequired: 'Package is required',
    pathRequired: 'PATH is required',
  },
  events: {
    topic: 'Topic',
    data: 'Data',
    dataTypeLabel: 'Data Type',
    responseResult: 'Response',
    createAtLog: 'Time',
  },
  charts: {
    customChart: 'Custom chart',
    showDataPoints: 'When you uncheck data points, the chart data for this will no longer be displayed.',
  },
}
