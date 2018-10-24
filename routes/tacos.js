const express = require('express');
const router = express.Router(); // creates a new router obj & puts it into var
const tacos = require('../controllers/tacosController'); // link 'tacos' to controller?

router.get('/tacos', tacos.index); // calls 'const tacos'(above) function 'index' (puts into 'tacosController') when someone hits tacos
    // ^ GET /tacos - returns all tacos
router.get('/tacos/new', tacos.new); // 'give me form for new taco'
    // ^ GET /tacos/new - adds the form data to the DB
router.post('/tacos', tacos.create); // 'post this new taco'
    // ^ POST /tacos - posts & shows our tacos (with new one)

router.get('/tacos/:id', tacos.show);
    // ^ GET /tacos/:id - returns one taco
router.get('/tacos/:id/edit', tacos.edit);
    // ^ GET /tacos/:id/edit - returns the update form
router.put('/tacos/:id', tacos.update);
    // ^ PUT /tacos/:id - updates the selected taco
router.delete('/tacos/:id', tacos.destroy);
    // ^ DELETE /tacos/:id - deletes the selected taco


module.exports = router;