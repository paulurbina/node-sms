const exhbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const app = express()

app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exhbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./libs/handlebars')
}))
app.set('view engine', '.hbs')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes/index.routes'))

app.use(express.static(path.join(__dirname, 'public')))

module.exports = app