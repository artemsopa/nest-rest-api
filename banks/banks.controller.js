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
exports.BanksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const banks_service_1 = require("./banks.service");
const bank_create_dto_1 = require("./dtos/bank-create.dto");
const bank_update_dto_1 = require("./dtos/bank-update.dto");
const bank_param_dto_1 = require("./dtos/bank-param.dto");
const bank_dto_1 = require("./dtos/bank.dto");
const message_response_dto_1 = require("../common/dtos/message-response.dto");
let BanksController = class BanksController {
    constructor(banksService) {
        this.banksService = banksService;
    }
    async getAll() {
        return await this.banksService.getAll();
    }
    async getOne(id) {
        return await this.banksService.getOneById(id);
    }
    async create(body) {
        const id = await this.banksService.create(body);
        return { message: `Bank was successfully created`, id };
    }
    async update({ id }, body) {
        await this.banksService.update(id, body);
        return { message: `Bank was successfully updated`, id };
    }
    async delete({ id }) {
        await this.banksService.delete(id);
        return { message: `Bank was successfully deleted`, id };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all banks' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'An array of banks',
        type: bank_dto_1.BankDto,
        isArray: true,
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BanksController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get one bank by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Bank item',
        type: bank_dto_1.BankDto,
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BanksController.prototype, "getOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new bank' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Message with id',
        type: message_response_dto_1.MessageResponseDto,
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_create_dto_1.BankCreateDto]),
    __metadata("design:returntype", Promise)
], BanksController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update bank' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Message with id',
        type: message_response_dto_1.MessageResponseDto,
    }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_param_dto_1.BankParamDto,
        bank_update_dto_1.BankUpdateDto]),
    __metadata("design:returntype", Promise)
], BanksController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete bank by id' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Message with id',
        type: message_response_dto_1.MessageResponseDto,
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_param_dto_1.BankParamDto]),
    __metadata("design:returntype", Promise)
], BanksController.prototype, "delete", null);
BanksController = __decorate([
    (0, swagger_1.ApiTags)('banks'),
    (0, common_1.Controller)('banks'),
    __metadata("design:paramtypes", [banks_service_1.BanksService])
], BanksController);
exports.BanksController = BanksController;
//# sourceMappingURL=banks.controller.js.map