import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

class ConfigsService {
  private getValue = (value: string, throwOnMissing = true): string => {
    if (!value && throwOnMissing) {
      throw new Error(`Config error: missing env.${value}`);
    }

    return value;
  };

  public getPort = (): string => {
    const { PORT } = process.env;

    return this.getValue(PORT, true);
  };

  public isProduction = (): boolean => {
    const { STAGE } = process.env;

    const mode = this.getValue(STAGE, false);
    return mode === 'PROD';
  };

  public getApiUrl = (): string => {
    const { API_URL } = process.env;

    return this.getValue(API_URL);
  };

  public getTypeOrmConfig = (): TypeOrmModuleOptions => {
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

export const configsService = new ConfigsService();
