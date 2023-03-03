"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageResponseDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const MessageResponseSchema = z_1.z.object({
    message: z_1.z.string(),
    id: z_1.z.string(),
});
class MessageResponseDto extends (0, nestjs_zod_1.createZodDto)(MessageResponseSchema) {
}
exports.MessageResponseDto = MessageResponseDto;
//# sourceMappingURL=message-response.dto.js.map