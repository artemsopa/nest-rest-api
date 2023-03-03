"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const nestjs_zod_1 = require("nestjs-zod");
const axios_1 = require("axios");
let GlobalExceptionFilter = class GlobalExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger('Exception');
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception.message;
        let code = 'Http Exception';
        switch (exception.constructor) {
            case common_1.HttpException:
                statusCode = exception.getStatus();
                break;
            case common_1.NotFoundException:
                statusCode = exception.getStatus();
                message = 'Not Found';
                break;
            case typeorm_1.QueryFailedError:
                statusCode = common_1.HttpStatus.UNPROCESSABLE_ENTITY;
                message = exception.message;
                code = exception.code;
                break;
            case nestjs_zod_1.ZodValidationException:
                const error = exception.getResponse();
                code = 'Validation Exception';
                statusCode = common_1.HttpStatus.BAD_REQUEST;
                message = error.errors[0].message;
                break;
            case axios_1.AxiosError:
                code = 'Axios Error';
                statusCode = common_1.HttpStatus.BAD_REQUEST;
                message = exception.message;
            default:
                statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        }
        if (statusCode >= 500) {
            this.logger.error(message);
        }
        else if (statusCode >= 400) {
            this.logger.warn(message);
        }
        else {
            this.logger.log(message);
        }
        response.status(statusCode).json({
            statusCode,
            message,
            code,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
        });
    }
};
GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)()
], GlobalExceptionFilter);
exports.GlobalExceptionFilter = GlobalExceptionFilter;
//# sourceMappingURL=global-exception.filter.js.map