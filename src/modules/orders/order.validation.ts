import { z } from "zod";

export const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string().nonempty(),
  price: z.number().min(0),
  quantity: z.number().int().min(1),
});
