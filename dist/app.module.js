"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_zod_1 = require("nestjs-zod");
const configs_service_1 = require("./configs/configs.service");
const banks_module_1 = require("./banks/banks.module");
const categories_module_1 = require("./categories/categories.module");
const transactions_module_1 = require("./transactions/transactions.module");
const statistics_module_1 = require("./statistics/statistics.module");
const logger_middleware_1 = require("./common/middlewares/logger.middleware");
const database_logger_1 = require("./common/logger/database.logger");
const webhooks_module_1 = require("./webhooks/webhooks.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            banks_module_1.BanksModule,
            categories_module_1.CategoriesModule,
            transactions_module_1.TransactionsModule,
            statistics_module_1.StatisticsModule,
            webhooks_module_1.WebhooksModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => (Object.assign(Object.assign({}, configs_service_1.configsService.getTypeOrmConfig()), { logger: new database_logger_1.DatabaseLogger() })),
            }),
        ],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useClass: nestjs_zod_1.ZodValidationPipe,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map