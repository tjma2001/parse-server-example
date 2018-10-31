// var AzureStorageAdapter = require('parse-server-azure-storage').AzureStorageAdapter;

module.exports = {
  server: {
    appId: process.env.APP_ID,
    masterKey: process.env.MASTERKEY,
    databaseURI: process.env.MONGO_URL,
    // serverURL: process.env.SERVER_NAME,
    appName: process.env.APP_NAME,
    allowClientClassCreation: false,
    enableAnonymousUsers: false,
    revokeSessionOnPasswordReset: true,
    accountLockout: {
      duration: 5,
      threshold: 3
    },
    liveQuery: {
      classNames: process.env.CLASS_NAMES.split(',')
    }

    // filesAdapter: new AzureStorageAdapter(
    //   process.env.ACCOUNT_NAME,
    //   process.env.CONTAINER,
    //   {
    //     accessKey: process.env.ACCESS_KEY,
    //     directAccess: false
    //   }
    // )
  },
  dashboard: {},
  storage: {},
  push: {}
}
