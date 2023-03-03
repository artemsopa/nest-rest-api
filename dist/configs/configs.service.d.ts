import { TypeOrmModuleOptions } from '@nestjs/typeorm';
declare class ConfigsService {
    private getValue;
    getPort: () => string;
    isProduction: () => boolean;
    getApiUrl: () => string;
    getTypeOrmConfig: () => TypeOrmModuleOptions;
}
export declare const configsService: ConfigsService;
export {};
