// need to bring the MODEL in
const Taco = require('../models/Taco');

module.exports = {
    index: function(req, res, next) {
        res.render('tacos/index', { tacos: Taco.getAllTacos() }); 
        // 1st parm ^ = referencing .ejs files (from 'views' dir)
    },    // renders tacos/index then gets all Tacos > puts them into "tacos" > passes them into 'index' template
            // now we need to CREATE these .ejs files (and 'tacos' dir they live in)

    new: function(req, res, next) { // 'new' = creates a new FORM
        res.render('tacos/new'); // no 2nd param (not 'updating')
    },

    create: function(req, res, next) {
        let data = req.body;
        Taco.addTaco(data.tacoName, data.tacoProtein, data.tacoGarnish); // now: input type text MUST = 'tacoName' (in form)
        res.redirect('/tacos');
    },

    show: function(req, res, next) {
        // I did this
        res.render('tacos/show', { taco: Taco.getTaco(req.params.id), id: req.params.id });
    },

    edit: function(req, res, next) {
        // I did this 
        taco = Taco.getTaco(req.params.id);
        res.render('tacos/edit', {taco: taco, id:req.params.id});
    },

    update: function(req, res, next) {
        // I did this
        let data = req.body;
        Taco.updateTaco(req.params.id, data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect(`/tacos/${req.params.id}`);
    },

    destroy: function(req, res, next) {
        // I did this 
        Taco.deleteTaco(req.params.id) // look to Taco.js (model requires id as argument, so i put req.params.id here)
        res.redirect('/tacos');
    }
}