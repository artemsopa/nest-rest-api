import { HttpService } from '@nestjs/axios';
import {
  CallHandler,
  ExecutionContext,
  Inject,
  Logger,
  mixin,
  NestInterceptor,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, EMPTY, lastValueFrom, tap } from 'rxjs';
import { configsService } from '@/configs/configs.service';

export const WebhookInterceptor = (hookName: string): any => {
  class WebhookMixin implements NestInterceptor {
    private logger = new Logger('Webhook');
    constructor(
      @Inject(HttpService) private readonly httpService: HttpService,
    ) {}

    intercept(context: ExecutionContext, next: CallHandler<any>) {
      const body = context.switchToHttp().getRequest().body;

      const url = configsService.getApiUrl();

      return next.handle().pipe(
        tap(() =>
          lastValueFrom(this.httpService.post(`${url}/${hookName}`, body)),
        ),
        catchError((error) => {
          this.logger.error((error as AxiosError).message);
          return EMPTY;
        }),
      );
    }
  }

  return mixin(WebhookMixin);
};
