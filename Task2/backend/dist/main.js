"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mongoose_1 = require("mongoose");
async function bootstrap() {
    const URI = process.env.MONGODB_URL;
    try {
        mongoose_1.default.connect('mongodb+srv://sk:pass123@cluster0.vwtxc.mongodb.net/social-media?retryWrites=true&w=majority');
    }
    catch (error) {
        console.log("unable to connect to mongodb");
        throw error;
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.enableCors();
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map