const router = require('express').Router();
let Unit = require('../models/unit.model');

router.route('/').get((req, res) => {
    Unit.find()
        .then(units => res.json(units))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const armyName = req.body.armyName;
    const unitName = req.body.unitName;
    const unitDesc = req.body.unitDesc;
    const unitType = req.body.unitType;

    const newUnit = new Unit({armyName, unitName, unitDesc, unitType});

    newUnit.save()
        .then(() => res.json('Unit added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Unit.findById(req.params.id)
        .then(units => res.json(units))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Unit.findByIdAndDelete(req.params.id)
        .then(units => res.json('Unit deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Unit.findById(req.params.id)
        .then(unit => {
            unit.armyName = req.body.armyName;
            unit.unitName = req.body.unitName;
            unit.unitDesc = req.body.unitDesc;
            unit.unitType = req.body.unitType;

            unit.save()
                .then(() => res.json('Unit updated!'))
                .catch(err => res.status(400).json('Error:' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;