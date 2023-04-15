module.exports.getAllUsers = (req, res) => {
    res.status(200).json({ msg: 'all users' });
};

module.exports.getOneUsers = (req, res) => {
    res.status(200).json({ msg: 'one users' });
};

module.exports.updateUsers = (req, res) => {
    res.status(200).json({ msg: 'update users' });
};

module.exports.deleteUsers = (req, res) => {
    res.status(200).json({ msg: 'delete users' });
};