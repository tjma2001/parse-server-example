var express = require('express')
var ParseServer = require('parse-server').ParseServer
var ParseDashboard = require('parse-dashboard')
var parseServerConfig = require('parse-server-azure-config')
var url = require('url')
const path = require('path')

var config = parseServerConfig(__dirname)
var prodConfig = require('./config.js')

// Modify config as necessary before initializing parse server & dashboard

var app = express()

// CORS please
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/ping', (req, res) => res.status(200).send('pong'))
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/parse', process.env.NODE_ENV === 'Development' ? new ParseServer(config.server) : new ParseServer(prodConfig.server))
app.use('/parse-dashboard', 
  process.env.NODE_ENV === 'Development' 
    ? ParseDashboard(config.dashboard)
    : ParseDashboard({
        users: [
          { "user": "admin", "pass": process.env.ADMIN_PASSWORD }
        ],
        apps: [
          {
            appId: process.env.APP_ID,
            masterKey: process.env.MASTERKEY,
            serverURL: process.env.SERVER_NAME,
            appName: process.env.APP_ID
          }
        ],
        "useEncryptedPasswords": true
      }, 
      { allowInsecureHTTP: true }))

app.listen(process.env.PORT || url.parse(config.server.serverURL).port, function () {
  console.log(`Parse Server running at ${process.env.PORT || url.parse(config.server.serverURL).port}`)
})
