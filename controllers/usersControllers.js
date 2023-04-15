const { v4: uuidv4 } = require('uuid');
const User = require('../models/users.model');


module.exports.getAllUsers = async (req, res) => {
    try {
       const allUsers = await User.find();
       res.status(200).json(allUsers)
    } catch (error) {
        res.status(200).send(error.message);
    }
};

module.exports.getOneUsers = async (req, res) => {
    try {
        const oneUsers = await User.findOne({id: req.params.id});
        res.status(200).json(oneUsers)
     } catch (error) {
         res.status(404).send(error.message);
     }
};

module.exports.createUsers = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            age: Number(req.body.age)
        });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports.updateUsers = async (req, res) => {
    try {
        const user = await User.findOne({id: req.params.id});
            user.name= req.body.name;
            user.email= req.body.email;
            user.age= Number(req.body.age);
            await user.save();
            res.status(200).json(user);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

module.exports.deleteUsers = async (req, res) => {
    try {
        await User.deleteOne({id: req.params.id});
        res.status(200).json({message: 'user deleted'});
    } catch (error) {
        res.status(404).send(error.message);
    }
};