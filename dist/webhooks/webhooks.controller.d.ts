import { EventEmitter2 } from '@nestjs/event-emitter';
import { WebhookSuccessDto } from '@/webhooks/dtos/webhook-success.dto';
import { TransactionCreateDto } from '@/transactions/dtos/transaction-create.dto';
export declare class WebhooksController {
    private readonly eventEmitter;
    constructor(eventEmitter: EventEmitter2);
    createTransactionWithEventEmitter(body: TransactionCreateDto): Promise<WebhookSuccessDto>;
    createTransactionWuthAxios(): Promise<WebhookSuccessDto>;
}
