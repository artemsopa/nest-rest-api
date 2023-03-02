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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transactions_service_1 = require("./transactions.service");
const transaction_list_dto_1 = require("./dtos/transaction-list.dto");
const transaction_create_dto_1 = require("./dtos/transaction-create.dto");
const transaction_param_dto_1 = require("./dtos/transaction-param.dto");
const transaction_query_dto_1 = require("./dtos/transaction-query.dto");
const message_response_dto_1 = require("../common/dtos/message-response.dto");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async getAll({ perPage, pageNo }) {
        return await this.transactionsService.getAllWithPagination(perPage, pageNo);
    }
    async create(body) {
        const id = await this.transactionsService.create(body);
        return { message: `Transaction was successfully created`, id };
    }
    async delete({ id }) {
        await this.transactionsService.delete(id);
        return { message: `Transaction was successfully deleted`, id };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all transactions with optional pagination' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'An array of transactions with total count',
        type: transaction_list_dto_1.TransactionListSchemaDto,
        isArray: true,
    }),
    (0, swagger_1.ApiQuery)({ name: 'perPage', type: Number, required: false }),
    (0, swagger_1.ApiQuery)({ name: 'pageNo', type: Number, required: false }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_query_dto_1.TransactionQueryDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new transaction' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Transaction with id',
        type: message_response_dto_1.MessageResponseDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_create_dto_1.TransactionCreateDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete transaction' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Message with id',
        type: message_response_dto_1.MessageResponseDto,
    }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_param_dto_1.TransactionParamDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "delete", null);
TransactionsController = __decorate([
    (0, swagger_1.ApiTags)('transactions'),
    (0, common_1.Controller)('transactions'),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
exports.TransactionsController = TransactionsController;
//# sourceMappingURL=transactions.controller.js.map