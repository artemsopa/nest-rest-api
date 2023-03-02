import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WebhookInterceptor } from '@/webhooks/webhooks.interceptor';
import { WebhookSuccessDto } from '@/webhooks/dtos/webhook-success.dto';
import { TransactionCreateDto } from '@/transactions/dtos/transaction-create.dto';

@ApiTags('webhooks')
@Controller('webhooks')
export class WebhooksController {
  @ApiOperation({ summary: 'Create new transaction via webhook' })
  @ApiBody({ type: TransactionCreateDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Transaction with id',
    type: WebhookSuccessDto,
  })
  @Post('transactions')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(WebhookInterceptor('transactions'))
  public async create(): Promise<WebhookSuccessDto> {
    return { message: `Data successfully transfered` };
  }
}
