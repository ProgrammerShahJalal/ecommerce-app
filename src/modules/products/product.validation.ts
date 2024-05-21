import { z } from "zod";

const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventorySchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});

const productSchema = z.object({
  name: z.string().max(100),
  description: z.string().max(500),
  price: z.number().min(0),
  category: z.string(),
  tags: z.array(z.string()).max(10),
  variants: z.array(variantSchema).max(10),
  inventory: inventorySchema,
});

export default productSchema;
