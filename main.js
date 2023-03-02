"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const nestjs_zod_1 = require("nestjs-zod");
const app_module_1 = require("./app.module");
const configs_service_1 = require("./configs/configs.service");
const global_exception_filter_1 = require("./common/filters/global-exception.filter");
const fs = require("fs");
const main = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new global_exception_filter_1.GlobalExceptionFilter());
    app.enableCors();
    (0, nestjs_zod_1.patchNestJsSwagger)();
    const options = new swagger_1.DocumentBuilder()
        .setTitle('NestJS REST API')
        .setDescription('Financial manager to monitor your finances')
        .setVersion('1.0')
        .addTag('banks')
        .addTag('categories')
        .addTag('transactions')
        .addTag('statistics')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const PORT = configs_service_1.configsService.getPort();
    await app.listen(PORT, async () => console.log(`Application is running on: ${await app.getUrl()}`));
    process.on('uncaughtException', function (err) {
        console.log(err);
    });
};
main();
//# sourceMappingURL=main.js.map