import { BanksService } from '@/banks/banks.service';
import { BankCreateDto } from '@/banks/dtos/bank-create.dto';
import { BankUpdateDto } from '@/banks/dtos/bank-update.dto';
import { BankParamDto } from '@/banks/dtos/bank-param.dto';
import { BankEntity } from '@/banks/entities/bank.entity';
import { MessageResponse } from '@/common/dtos/message-response.dto';
export declare class BanksController {
    private readonly banksService;
    constructor(banksService: BanksService);
    getAll(): Promise<BankEntity[]>;
    getOne(id: string): Promise<BankEntity>;
    create(body: BankCreateDto): Promise<MessageResponse>;
    update({ id }: BankParamDto, body: BankUpdateDto): Promise<MessageResponse>;
    delete({ id }: BankParamDto): Promise<MessageResponse>;
}
