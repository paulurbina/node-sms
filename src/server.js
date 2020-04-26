const exhbs = require('express-handlebars')
const path = require('path')
const express = require('express')
const app = express()

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exhbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use(require('./routes/index.routes'))

module.exports = app