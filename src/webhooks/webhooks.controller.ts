import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { WebhookInterceptor } from '@/webhooks/webhooks.interceptor';
import { WebhookSuccessDto } from '@/webhooks/dtos/webhook-success.dto';
import { TransactionCreateDto } from '@/transactions/dtos/transaction-create.dto';

@ApiTags('webhooks')
@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @ApiOperation({ summary: 'Create new transaction with event emitter' })
  @ApiBody({ type: TransactionCreateDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Transaction with id',
    type: WebhookSuccessDto,
  })
  @Post('transactions/event')
  @HttpCode(HttpStatus.OK)
  public async createTransactionWithEventEmitter(
    @Body()
    body: TransactionCreateDto,
  ): Promise<WebhookSuccessDto> {
    this.eventEmitter.emit('transaction.created', body);

    return { message: `Data successfully transfered` };
  }

  @ApiOperation({ summary: 'Create new transaction with axios' })
  @ApiBody({ type: TransactionCreateDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Transaction with id',
    type: WebhookSuccessDto,
  })
  @Post('transactions/axios')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(WebhookInterceptor('transactions'))
  public async createTransactionWuthAxios(): Promise<WebhookSuccessDto> {
    return { message: `Data successfully transfered` };
  }
}
