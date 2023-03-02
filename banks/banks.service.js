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
exports.BanksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bank_entity_1 = require("./entities/bank.entity");
let BanksService = class BanksService {
    constructor(banksRepository) {
        this.banksRepository = banksRepository;
        this.getAll = async () => {
            return await this.banksRepository.find();
        };
        this.getOneById = async (id) => {
            const bank = await this.banksRepository.findOneBy({ id });
            if (!bank) {
                throw new common_1.HttpException(`Cannot find bank with id "${id}"`, 422);
            }
            return bank;
        };
        this.create = async (bankInput) => {
            const bank = await this.banksRepository.findOneBy({ name: bankInput.name });
            if (bank) {
                throw new common_1.HttpException(`Bank with name "${bankInput.name}" already exists`, 400);
            }
            const { raw: [{ id }], } = await this.banksRepository.insert(bankInput);
            return id;
        };
        this.update = async (id, bankInput) => {
            const bank = await this.banksRepository.findOneBy({ id });
            if (!bank) {
                throw new common_1.HttpException(`Cannot find bank by id ${id}`, 400);
            }
            await this.banksRepository.update({ id }, Object.assign(Object.assign({}, bankInput), { balance: bank.balance }));
        };
        this.delete = async (id) => {
            const { affected } = await this.banksRepository.delete(id);
            if (affected === 0) {
                throw new common_1.HttpException(`Cannot find bank by id ${id}`, 400);
            }
        };
    }
};
BanksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bank_entity_1.BankEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BanksService);
exports.BanksService = BanksService;
//# sourceMappingURL=banks.service.js.map