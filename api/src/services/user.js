
const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loaderConfig = require('../config/proto');


const UserDeF = protoLoader.loadSync(
  path.resolve(__dirname, '..', 'proto', 'user.proto'),
  loaderConfig
)

const user = grpc.loadPackageDefinition(UserDeF);


const UserClient = new user.UserService(
  'localhost:3335',
  grpc.credentials.createInsecure(),
)
module.exports = UserClient;