const express = require('express');

const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json()); // para fzr entender json q vem no body
app.use(routes);

/**
 * Tipos de parâmetros
 * 
 * Qeury Params: parâmetros nomeados enviados na rota após '?' (filtros, paginacao)
 * Route Params: parâmetros usados para identificar recursos /users/:id
 * Request Body: corpo da requisição, utilizado p criar/alterar recursos
 */

/**
 * SQL NoSQL
 * 
 * Driver: select *  from users 
 * Query Builder: table('users').select('*').where
 */


app.listen(3333);

