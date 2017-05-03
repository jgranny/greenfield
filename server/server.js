const express = require('express');
const app = express();
const port = 8003;
const directory = process.env.PUBLIC || 'client/public';

app.use('/', express.static(directory));
app.listen(port, () => { console.log(`Listening on port ${port}. Serving '${directory}'.`) });
module.exports = app;
