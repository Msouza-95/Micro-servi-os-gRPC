const UserService = require('../services/user');

module.exports = async (req, res, next)=>{
    try{

        const response = await new Promise((resolve,reject)=>{
           
            UserService.authenticate(
                { token: req.headers.authorization},
                (err, response)=>{
                if(err || response.error){
                    reject(err || response);
                }else{
                    resolve(response);
                }
            })
        })
        
        if(response.error){
            throw new Error(response.error);
        }
        console.log(response);
        req.userId = response.user.id;
      
        next();
    }catch(err){

        return res.status(401).send({ error: 'Token invalid'});
    }
}