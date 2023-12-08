"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const { EvmChain } = require('@moralisweb3/common-evm-utils');
const contact = require('./contactModel');
const Redis = require('redis');
const redisClient = Redis.createClient();
redisClient.connect();
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    async Listen(body) {
        try {
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Forbidden', 400);
        }
        console.log('done');
        return { data: body };
    }
    async getAllContact() {
        redisClient.on('error', err => console.log('Redis Client Error', err));
        try {
            let contacts = await redisClient.get('contact');
            console.log(contacts);
            if (contacts != null) {
                console.log('cache hit');
                return (contacts);
            }
            else {
                console.log('cache miss');
                var { data } = await contact.find({});
                await redisClient.set("contact", '', JSON.stringify(data));
                return data;
            }
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('redis Error', 500);
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map