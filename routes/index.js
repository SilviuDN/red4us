module.exports = app => {
    app.use('/api', require('./base.routes'))
    app.use('/api',  require('./auth.routes'))
    app.use('/api/upload', require('./uploads.routes'))
    app.use('/api/phones',  require('./phones.routes'))
}