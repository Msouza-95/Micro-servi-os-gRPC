const BuyService = require('../services/buy');


class BuyController  {
    async index(req, res){
         const response = await new Promise((resolve,reject)=>{
             BuyService.listBuy({userId:req.userId}, (err, response)=>{
                 if(err){
                     reject(err);
                 }else{
                     resolve(response);
                 }

             });

         });

         return res.json(response);
    }

    async show(req, res){
        const { id } = req.params;

        const response = await new Promise((resolve,reject)=>{
            BuyService.getBuyById({id}, (err, response)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(response);
                }

            });

        });

        return res.json(response);
   }

   async store(req, res){
    const { title, value } = req.body;

    const response = await new Promise((resolve,reject)=>{
        BuyService.buy({buy:{title, value, userId: req.user }}, (err, response)=>{
            if(err){
                reject(err);
            }else{
                resolve(response);
            }

        });

    });

    return res.json(response);
}
}


module.exports = new BuyController;