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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const transaction_to_category_entity_1 = require("./entities/transaction-to-category.entity");
const transaction_entity_1 = require("./entities/transaction.entity");
const bank_entity_1 = require("../banks/entities/bank.entity");
const transaction_type_enum_1 = require("../common/enums/transaction-type.enum");
let TransactionsService = class TransactionsService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.getAllWithPagination = async (take = 0, skip = 1) => {
            const [data, count] = await this.dataSource
                .getRepository(transaction_entity_1.TransactionEntity)
                .findAndCount({
                take,
                skip: take * (skip - 1),
            });
            return {
                count,
                data,
            };
        };
        this.create = async (transaction) => {
            return await this.dataSource.transaction(async (manager) => {
                const { raw: [{ id: transactionId }], } = await manager.getRepository(transaction_entity_1.TransactionEntity).insert(Object.assign(Object.assign({}, transaction), { type: transaction.amount >= 0
                        ? transaction_type_enum_1.TransactionTypeEnum.PROFITABLE
                        : transaction_type_enum_1.TransactionTypeEnum.CUNSUMABLE }));
                const transactionToCategoriesToSave = transaction.categoryIds.map((categoryId) => ({
                    transactionId,
                    categoryId,
                }));
                await manager
                    .getRepository(transaction_to_category_entity_1.TransactionToCategoryEntity)
                    .insert(transactionToCategoriesToSave);
                const bankRepository = manager.getRepository(bank_entity_1.BankEntity);
                const bank = await bankRepository.findOneBy({ id: transaction.bankId });
                if (bank) {
                    bank.balance += transaction.amount;
                    await bankRepository.save(bank);
                }
                return transactionId;
            });
        };
        this.delete = async (id) => {
            await this.dataSource.transaction(async (manager) => {
                const transactionsRepository = manager.getRepository(transaction_entity_1.TransactionEntity);
                const transaction = await transactionsRepository.findOneBy({ id });
                if (!transaction) {
                    throw new common_1.HttpException(`Cannot find transaction by id ${id}`, 400);
                }
                await transactionsRepository.delete(id);
                const banksRepository = manager.getRepository(bank_entity_1.BankEntity);
                const bank = await banksRepository.findOneBy({ id: transaction.bankId });
                if (bank) {
                    bank.balance -= transaction.amount;
                    await banksRepository.save(bank);
                }
            });
        };
    }
};
TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map