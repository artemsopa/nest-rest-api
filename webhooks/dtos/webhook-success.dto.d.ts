import { z } from 'nestjs-zod/z';
export declare const WebhookSuccessSchema: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
declare const WebhookSuccessDto_base: import("nestjs-zod").ZodDto<{
    message: string;
}, z.ZodObjectDef<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    message: string;
}>;
export declare class WebhookSuccessDto extends WebhookSuccessDto_base {
}
export {};
