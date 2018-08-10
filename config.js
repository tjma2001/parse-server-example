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

    // filesAdapter: new AzureStorageAdapter(
    //   'account',
    //   'container',
    //   'options'
    // )
  },
  dashboard: {},
  storage: {},
  push: {}
}