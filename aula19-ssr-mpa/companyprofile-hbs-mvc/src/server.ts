/**
 * Server that acts as configuration and router
 */
import e from 'express'
import path from 'path'
import handlebars from 'express-handlebars'

import {config} from "../conf/config"
import * as model from './model'
import * as controller from "./controller"

const app = e();

// configure handlebars as template engine
app.engine('handlebars', handlebars({
    helpers: {
        capitalize: (s: string) => s.split(' ').map((e) => 
                        e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
                        .join(' '),
        userAge: (birthyear: number) => (new Date()).getFullYear() - birthyear, 
        equals: (a: string, b: string) => a == b
    }
}))
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname, "..", 'views'))

/**
 * Static routes
 */
app.use('/static', e.static(path.join(__dirname, '..', 'static')));

/**
 * Dynamic routes
 */
app.get('/', (req, res) => {
    res.redirect('/list');
});
app.get('/list', controller.list);
app.get('/profile/:id', controller.details)

/**
 * Server startup and shutdown
 */
const port = process.env.PORT || 3000

app.listen(config["server-port"], () => {
    console.log('Server listening at port 3000')
    model.connect()
    console.log("Loaded model from the file system")
});

process.on('exit', (code) => {
    console.log(`Server exiting with code ${code}`)
    model.disconnect()
    console.log("Saved model to the file system")
});
process.once('SIGINT', () => process.exit())
process.once('SIGUSR2', () => process.exit())