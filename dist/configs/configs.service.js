"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configsService = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class ConfigsService {
    constructor() {
        this.getValue = (value, throwOnMissing = true) => {
            if (!value && throwOnMissing) {
                throw new Error(`Config error: missing env.${value}`);
            }
            return value;
        };
        this.getPort = () => {
            const { PORT } = process.env;
            return this.getValue(PORT, true);
        };
        this.isProduction = () => {
            const { STAGE } = process.env;
            const mode = this.getValue(STAGE, false);
            return mode === 'PROD';
        };
        this.getApiUrl = () => {
            const { API_URL } = process.env;
            return this.getValue(API_URL);
        };
        this.getTypeOrmConfig = () => {
            const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
            return {
                type: 'postgres',
                host: this.getValue(DB_HOST),
                port: parseInt(this.getValue(DB_PORT)),
                username: this.getValue(DB_USER),
                password: this.getValue(DB_PASSWORD),
                database: this.getValue(DB_NAME),
                ssl: this.isProduction(),
                synchronize: true,
                autoLoadEntities: true,
            };
        };
    }
}
exports.configsService = new ConfigsService();
//# sourceMappingURL=configs.service.js.map