module.exports.getAllUsers = (req, res) => {
    res.status(200).json({ msg: 'all users' });
}