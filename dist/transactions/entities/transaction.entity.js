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
exports.TransactionEntity = void 0;
const bank_entity_1 = require("../../banks/entities/bank.entity");
const typeorm_1 = require("typeorm");
const transaction_to_category_entity_1 = require("./transaction-to-category.entity");
const transaction_type_enum_1 = require("../../common/enums/transaction-type.enum");
let TransactionEntity = class TransactionEntity {
    _convertNumerics() {
        this.amount = parseFloat(this.amount.toString());
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TransactionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', scale: 2, nullable: false }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionEntity.prototype, "_convertNumerics", null);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: transaction_type_enum_1.TransactionTypeEnum, nullable: false }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_id', nullable: false }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "bankId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bank_entity_1.BankEntity, (bank) => bank.transactions, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'bank_id' }),
    __metadata("design:type", bank_entity_1.BankEntity)
], TransactionEntity.prototype, "bank", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_to_category_entity_1.TransactionToCategoryEntity, (transactionToCategory) => transactionToCategory.transaction),
    __metadata("design:type", Array)
], TransactionEntity.prototype, "transactionToCategories", void 0);
TransactionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'transactions' })
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction.entity.js.map