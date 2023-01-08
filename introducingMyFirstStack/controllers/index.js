const getNames = (req, res, next) => {
    res.json(["Tony", "Lisa", "Francisco", "Pablo"])
};

module.exports = {getNames};