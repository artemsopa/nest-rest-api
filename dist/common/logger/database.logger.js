"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseLogger = void 0;
const common_1 = require("@nestjs/common");
class DatabaseLogger {
    constructor() {
        this.logger = new common_1.Logger('Sql');
    }
    logQuery(query, parameters) {
        this.logger.log(`${query} -- Parameters: ${this.stringifyParameters(parameters)}`);
    }
    logQueryError(error, query, parameters) {
        this.logger.error(`${query} -- Parameters: ${this.stringifyParameters(parameters)} -- ${error}`);
    }
    logQuerySlow(time, query, parameters) {
        this.logger.warn(`Time: ${time} -- Parameters: ${this.stringifyParameters(parameters)} -- ${query}`);
    }
    logMigration(message) {
        this.logger.log(message);
    }
    logSchemaBuild(message) {
        this.logger.log(message);
    }
    log(level, message) {
        if (level === 'log') {
            return this.logger.log(message);
        }
        if (level === 'info') {
            return this.logger.debug(message);
        }
        if (level === 'warn') {
            return this.logger.warn(message);
        }
    }
    stringifyParameters(parameters) {
        try {
            return JSON.stringify(parameters);
        }
        catch (_a) {
            return '';
        }
    }
}
exports.DatabaseLogger = DatabaseLogger;
//# sourceMappingURL=database.logger.js.map