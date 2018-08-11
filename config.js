var AzureStorageAdapter = require('parse-server-azure-storage').AzureStorageAdapter;

module.exports = {
  server: {
    appId: 'rai',
    masterKey: process.env.MASTERKEY,
    databaseURI: process.env.MONGO_URL,
    serverURL: 'https://scottyrai.azurewebsites.net/parse',
    appName: 'RAI',
    allowClientClassCreation: false,
    enableAnonymousUsers: false,
    revokeSessionOnPasswordReset: true,
    accountLockout: {
      duration: 5,
      threshold: 3
    },
    liveQuery: {
      classNames: ['Receipt']
    },

    filesAdapter: new AzureStorageAdapter(
      process.env.ACCOUNT_NAME,
      process.env.CONTAINER,
      {
        accessKey: process.env.ACCESS_KEY,
        directAccess: true
      }
    )
  },
  dashboard: {},
  storage: {},
  push: {}
}