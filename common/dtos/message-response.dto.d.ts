import { z } from 'nestjs-zod/z';
export interface MessageResponse {
    message: string;
    id: string;
}
declare const MessageResponseDto_base: import("nestjs-zod").ZodDto<MessageResponse, z.ZodTypeDef, MessageResponse>;
export declare class MessageResponseDto extends MessageResponseDto_base {
}
export {};
