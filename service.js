/**
 * API responsible for CRUD of the challeng.
 */

"use strict";

// Express and global configuration
const app = require('./config/custom-express')();
const config = require('./config/global-setting');

// Starting service
app.listen(config.PORT, function(){
  console.log('Servidor rodando na porta ' + config.PORT);
});