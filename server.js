const express = require('express')
const hbs = require('hbs')

const app = express()

app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/partialViews')

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.set('view engine', hbs)

app.get('/', (req, res) => {
    res.render('welcome.hbs', {
        pageTitle: 'Welcome Page'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page'
    })
})

app.get('/help', (req, res) => {
    res.render('help.html')
})

app.listen(3000, () => {
    console.log('Server started');
})