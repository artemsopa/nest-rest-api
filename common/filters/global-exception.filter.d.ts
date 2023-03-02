import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class GlobalExceptionFilter implements ExceptionFilter {
    private logger;
    catch(exception: Error, host: ArgumentsHost): void;
}
