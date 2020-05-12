const express = require("express");
const router = express.Router();

const InstallJob = require('../../models/installJob');
const Order = require('../../models/order')


// Adds an installJob
router.post("/add", (req, res) => {

    const newInstallJob = new InstallJob({
        order: new Order(req.body.order),
        installDate: req.body.date
    });
    const date = new Date(newInstallJob.installDate);
    newInstallJob.month = date.getMonth() + 1;

    newInstallJob.save().then(() => res.json(newInstallJob))
        .catch(err => console.log(err))
});

// Lists all installJobs
router.get('/', (req, res) =>{
    InstallJob.find()
        .then(installJob => res.json(installJob))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Modify date of the installJob
router.put('/modify/:id', (req, res) => {
    InstallJob.findOneAndUpdate({_id: req.params.id}, {installDate : req.body.date})
         .then(() => res.json("Succesfully modified date!"))
         .catch(err => res.status(400).json('Error ' + err));
})

// Deletes an installJob by id
router.delete("/delete/:id", (req, res) => {
    InstallJob.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json('Successfully deleted.'))
        .catch(err => res.status(400).json('Error ' + err))
});

// Finds an installJob by its date
router.get('/find', (req, res) => {
    InstallJob.findOne({installDate : req.body.date})
        .then(installJob => res.json(installJob))
        .catch(err => console.log(err));
});

// Finds all installJobs in current Month
router.get('/find/:month', (req, res) => {
    InstallJob.find({ month : req.params.month}, 'order.items._id order.items.height order.items.width order.userEmail order.address order.orderDate date')
        .then(installJob => res.json(installJob))
        .catch(err => console.log(err));
});

module.exports = router;