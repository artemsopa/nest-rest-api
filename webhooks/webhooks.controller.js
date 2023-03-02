"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const webhooks_interceptor_1 = require("./webhooks.interceptor");
const webhook_success_dto_1 = require("./dtos/webhook-success.dto");
const transaction_create_dto_1 = require("../transactions/dtos/transaction-create.dto");
let WebhooksController = class WebhooksController {
    async create() {
        return { message: `Data successfully transfered` };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new transaction via webhook' }),
    (0, swagger_1.ApiBody)({ type: transaction_create_dto_1.TransactionCreateDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Transaction with id',
        type: webhook_success_dto_1.WebhookSuccessDto,
    }),
    (0, common_1.Post)('transactions'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseInterceptors)((0, webhooks_interceptor_1.WebhookInterceptor)('transactions')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WebhooksController.prototype, "create", null);
WebhooksController = __decorate([
    (0, swagger_1.ApiTags)('webhooks'),
    (0, common_1.Controller)('webhooks')
], WebhooksController);
exports.WebhooksController = WebhooksController;
//# sourceMappingURL=webhooks.controller.js.map