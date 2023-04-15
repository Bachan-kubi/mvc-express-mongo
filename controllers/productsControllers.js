module.exports.getAllProducts = (req, res) => {
    res.status(200).json({ msg: 'all products' });
};

module.exports.getOneProducts = (req, res) => {
    res.status(200).json({ msg: 'one products' });
};

module.exports.updateProducts = (req, res) => {
    res.status(200).json({ msg: 'update products' });
};

module.exports.deleteProducts = (req, res) => {
    res.status(200).json({ msg: 'delete products' });
};