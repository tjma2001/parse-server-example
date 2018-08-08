module.exports = {
  server: {
    databaseURI: process.env.MONGO_URL,
    appId: 'rai',
    appName: 'RAI',
    masterKey: process.env.MASTERKEY || 'masterkey',
    allowClientClassCreation: false,
    enableAnonymousUsers: false,
    revokeSessionOnPasswordReset: true,
    accountLockout: {
      duration: 5,
      threshold: 3
    },
    serverURL: 'https://scottyrai.azurewebsites.net/parse'
  },
  dashboard: {
    // apps:[ 
    //   { 
    //     appId: 'RAI Prod',
    //     serverURL: process.env.SERVER_URL,
    //     masterKey: process.env.MASTERKEY || 'masterkey',
    //     appName: 'scottyrai' 
    //   } 
    // ],
  },
  storage: {},
  push: {}
}