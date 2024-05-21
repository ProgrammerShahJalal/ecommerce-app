import mongoose, { Schema, model } from "mongoose";
import {
  ProductModel,
  TInventory,
  TProduct,
  TVariant,
} from "./product.interface";

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, required: true, trim: true, maxlength: 500 },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true, trim: true },
  tags: {
    type: [String],
    validate: [arrayLimit, "Exceeds the limit of 10 tags"],
  },
  variants: {
    type: [variantSchema],
    validate: [arrayLimit, "Exceeds the limit of 10 variants"],
  },
  inventory: { type: inventorySchema, required: true },
});

// Custom validation function to limit the number of array items
function arrayLimit(val: string[]) {
  return val.length <= 10;
}

// Static method to find product by name
productSchema.statics.findProductByName = function (name: string) {
  return this.findOne({ name });
};

const Product = model<TProduct, ProductModel>("Product", productSchema);

export default Product;
