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
exports.TransactionToCategoryEntity = void 0;
const category_entity_1 = require("../../categories/entities/category.entity");
const typeorm_1 = require("typeorm");
const transaction_entity_1 = require("./transaction.entity");
let TransactionToCategoryEntity = class TransactionToCategoryEntity {
};
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp',
        nullable: false,
    }),
    __metadata("design:type", Date)
], TransactionToCategoryEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'transaction_id' }),
    __metadata("design:type", String)
], TransactionToCategoryEntity.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => transaction_entity_1.TransactionEntity, (transaction) => transaction.transactionToCategories, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'transaction_id' }),
    __metadata("design:type", transaction_entity_1.TransactionEntity)
], TransactionToCategoryEntity.prototype, "transaction", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'category_id' }),
    __metadata("design:type", String)
], TransactionToCategoryEntity.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.transactionToCategories, {
        onDelete: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], TransactionToCategoryEntity.prototype, "category", void 0);
TransactionToCategoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'transaction_to_categories' })
], TransactionToCategoryEntity);
exports.TransactionToCategoryEntity = TransactionToCategoryEntity;
//# sourceMappingURL=transaction-to-category.entity.js.map