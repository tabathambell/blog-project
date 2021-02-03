const app = express();
const hbs = exphbs.create({ helpers });
const PORT = process.env.PORT || 3001;
const express = require('express');
const helpers = require('./utils/helpers');
const routes = require('./controllers/');
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret:
    cookie:
    resave:
    saveUninitialized:
    store:
    db:
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(session(sess));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
