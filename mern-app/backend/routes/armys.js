const router = require('express').Router();
let Army = require('../models/army.model');

router.route('/').get((req, res) => {
    Army.find()
        .then(armys => res.json(armys))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const armyName = req.body.armyName;
    const armyDesc = req.body.armyDesc;
    const armyAllign = req.body.armyAllign;

    const newArmy = new Army({username, armyName, armyDesc, armyAllign});

    newArmy.save()
        .then(() => res.json('Army added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;