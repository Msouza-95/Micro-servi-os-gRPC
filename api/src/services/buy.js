
const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loaderConfig = require('../config/proto');


const buyDeF = protoLoader.loadSync(
  path.resolve(__dirname, '..', 'proto', 'buy.proto'),
  loaderConfig
)

const buy = grpc.loadPackageDefinition(buyDeF);


const BuyClient = new buy.BuyService(
  'localhost:3336',
  grpc.credentials.createInsecure(),
)
module.exports = BuyClient;