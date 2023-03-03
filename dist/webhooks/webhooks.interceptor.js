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
exports.WebhookInterceptor = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const configs_service_1 = require("../configs/configs.service");
const WebhookInterceptor = (hookName) => {
    let WebhookMixin = class WebhookMixin {
        constructor(httpService) {
            this.httpService = httpService;
            this.logger = new common_1.Logger('Webhook');
        }
        intercept(context, next) {
            const body = context.switchToHttp().getRequest().body;
            const url = configs_service_1.configsService.getApiUrl();
            return next.handle().pipe((0, rxjs_1.tap)(() => (0, rxjs_1.lastValueFrom)(this.httpService.post(`${url}/${hookName}`, body))), (0, rxjs_1.catchError)((error) => {
                this.logger.error(error.message);
                return rxjs_1.EMPTY;
            }));
        }
    };
    WebhookMixin = __decorate([
        __param(0, (0, common_1.Inject)(axios_1.HttpService)),
        __metadata("design:paramtypes", [axios_1.HttpService])
    ], WebhookMixin);
    return (0, common_1.mixin)(WebhookMixin);
};
exports.WebhookInterceptor = WebhookInterceptor;
//# sourceMappingURL=webhooks.interceptor.js.map