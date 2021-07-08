const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
require('./database');

const implementation = require('./implementation');


const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, 'proto', 'messages.proto'),
    {

    keepCase: true,
    longs:String,
    enums: String,
    defaults:true,
    oneofs:true,
});

const proto = grpc.loadPackageDefinition(packageDefinition);


const server = new grpc.Server();



server.addService(proto.BuyService.service, implementation);
server.bind('0.0.0.0:3336', grpc.ServerCredentials.createInsecure());
server.start();

//console.log(proto);