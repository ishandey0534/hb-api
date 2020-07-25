const jwt = require('jsonwebtoken');

const auth = (req,res,next) => {
    const token = req.header('auth-token');
    if(!token){
        return res.status(401).send('Please authenticate');
    }
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user=verified;
        next();
    }catch(e){
        res.status(400).send('Invalid Token');
    }
};

module.exports = auth;