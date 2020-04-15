const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// routes.get('/ongs', async (request, response) =>{
//     const ongs = await connection('ongs').select('*');

//     return response.json(ongs); 
// });

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

//const queries = request.query; 
//const params = request.params;
//const body = request.body;

// routes.post('/users?name=camilo', (request, response ) =>{
//     return response.json({
//         evento: 'Omnistack',
//         nome: 'Camilo'
//     });
// });

module.exports = routes;