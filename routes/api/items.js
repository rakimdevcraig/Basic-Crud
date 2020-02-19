const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item')

//@route GET api/items
//@desc GET All Items
//Access Public

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
})

//@route POST api/items
//@desc Create an item
//Access Public
router.post('/', (req, res) => {
    console.log('test')
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => res.json(item))
})

//@route delete api/items
//@desc delete an item
//Access Public
router.delete('/', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))

})




module.exports = router;