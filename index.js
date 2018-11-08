const app = require('./public/app');
const port = process.env.PORT || 5000;
const Logger = require('./lib/logger');
const Database = require('./public/services/database');
require('./public/routes');
require('./public/middlewares');
app.listen(port, () => {
    Logger.generic(`Server listening to port: ${port}`);
});