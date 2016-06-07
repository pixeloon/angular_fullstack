const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

router.get('/', (req, res) => {
    knex('pirates').then(function(pirates) {
        res.send(pirates);
    }).catch(function(err) {
        res.send(err);
    })
});

//show
router.get('/:id', (req, res) => {
    knex('pirates').where('id', req.params.id).first().then(function(pirate) {
        res.send(pirate);
    }).catch(function(err) {
        res.send(err);
    })
});

// post
router.post('/', (req, res) => {
    knex('pirates').insert(req.body.pirate, '*')
        .then(function(pirates) {
            res.send(pirates);
        }).catch(function(err) {
            res.send(err);
        })
});

// put
router.put('/:id', (req, res) => {
    knex('pirates').update(req.body.pirate).where('id', req.params.id).then(function() {
        res.send("Pirate Updated");
    })
});

// delete
router.delete('/:id', (req, res) => {
    knex('pirates').where('id', req.params.id).first().del().then(function() {
        res.send('Pirate deleted!')
    }).catch(function(err) {
        res.send(err);
    })
});

module.exports = router;
