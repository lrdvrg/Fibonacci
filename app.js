const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./src/routes/routes');

//* MiddleWares
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());

app.set('port', 5255 || process.env.PORT);

app.use('/api', routes)

app.listen(app.get('port'), () => {
    console.log(`Server corriendo en http://localhost:${app.get('port')}`);
})

module.exports = app;