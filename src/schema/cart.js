import mongoose, { Schema } from "mongoose"

const CartSchema = new Schema({
    buyerId: { type: String, required: true },
    productId : { type: String },
    productName: { type: String },
    images: [{ type: String }],
    sellerId: { type: String},
    sellerName: { type: String},
    count: { type: Number },
    createdDate: { type: Date, default: Date.now },
    priceDistributionId: { type: String, required: true }
});
CartSchema.set("toJSON", { virtuals: true });

export const CartModel = mongoose.model("Cart", CartSchema);
