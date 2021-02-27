const verify = require("../helpers/verify-token");

module.exports = async function (req, res, next) {
    if(!req.headers || !req.headers.authorization) {
        return res.badRequest({err: 'authorization header is missing'});
    }

    const tokenParam = req.headers.authorization;
    const decodeToken = verify(tokenParam);

    const user = await User.findOne({
        id: decodeToken.user
    });

    if(!user){
        return next({err: 'invalid credentials provided'});
    }
    req.user = user.id;
    next();
};
