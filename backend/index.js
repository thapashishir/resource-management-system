const express = require('express');
const routes = require('./routes/route'); //imports routes
const app = express()
const port = 3000

app.use('/api', routes);
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});