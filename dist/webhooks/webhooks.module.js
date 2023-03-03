"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const event_emitter_1 = require("@nestjs/event-emitter");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const webhooks_controller_1 = require("./webhooks.controller");
const transactions_service_1 = require("../transactions/transactions.service");
const transaction_entity_1 = require("../transactions/entities/transaction.entity");
const category_entity_1 = require("../categories/entities/category.entity");
let WebhooksModule = class WebhooksModule {
};
WebhooksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            event_emitter_1.EventEmitterModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([typeorm_2.DataSource, category_entity_1.CategoryEntity, transaction_entity_1.TransactionEntity]),
        ],
        controllers: [webhooks_controller_1.WebhooksController],
        providers: [transactions_service_1.TransactionsService],
    })
], WebhooksModule);
exports.WebhooksModule = WebhooksModule;
//# sourceMappingURL=webhooks.module.js.map