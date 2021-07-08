
const  Buy = require('./models/Buy'); 


module.exports =  {

  async GetBuyById(call , callback){
    const {id} = call.request;

    const buy = await Buy.findById(id);

    return callback(null, { buy });
  },
   async ListBuy(call , callback){

    const {userId} = call.request;

    const buys = await this.Buy.find({userId});

    return callback(null, { buys });
  },

  
   async Buy(call , callback){

    const { title, value , userId} = call.request.buy

    const buy = await Buy.create({ title, value , userId});

    return callback(null, { buy : { ... buy.toObject(), id: buy._id}});

   }
    
}
