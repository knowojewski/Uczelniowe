const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const Game = require('../models/games');

// const db = 'mongodb+srv://Kocur:KocurP@cluster0-7gwud.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';
const db = 'mongodb://Kocur:KocurP@cluster0-shard-00-00-7gwud.gcp.mongodb.net:27017,cluster0-shard-00-01-7gwud.gcp.mongodb.net:27017,cluster0-shard-00-02-7gwud.gcp.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) {
        console.error("Error! " + err);
    }
});

/* Pobieranie wszystkich użytkowników */
router.get('/users', function(req, res) {
    User.find({})
        .exec(function(err, users) {
            if (err) {
                console.log("Error");
            } else {
                res.json(users);
            }
        });
});

/* Pobieranie użytkownika o podanym id */
router.get('/users/:id', function(req, res) {
    User.findById(req.params.id)
        .exec(function(err, user) {
            if (err) {
                console.log("Error");
            } else {
                res.json(user);
            }
        });
});

/* Dodawanie nowego użytkownika do bazy */
router.post('/user', function(req, res) {
    var newUser = new User();
    newUser.first_name = req.body.first_name;
    newUser.last_name = req.body.last_name;
    newUser.login = req.body.login;
    newUser.password = req.body.password;
    newUser.e_mail = req.body.e_mail;
    // Zapis do bazy
    newUser.save(function(err, insertedUser) {
        if (err) {
            console.log('Error');
        } else {
            res.json(insertedUser);
        }
    });

    /* Dodawanie nowej gry do bazy danych  */
    router.post('/game', function(req, res) {
        var newGame = new Game();
        newGame.game_name = req.body.game_name;
        newGame.publisher = req.body.publisher;
        newGame.producer = req.body.producer;
        newGame.release_date = req.body.release_date;
        newGame.type = req.body.type;

        //Zapis do bazy
        newGame.save(function(err, instertedGame) {
            if (err) {
                console.log("Error! " + err);
            } else {
                res.json(instertedGame);
            }
        });
    });

});



module.exports = router;