import mongoose, { Schema } from "mongoose";

const ShopDetailsSchema = Schema({
    shopName: { type: String, required: true },
    sellerId: { type: String, required: true },
    address: [{
        name: { type: String, required: true },
        mobile: { type: String, required: true },
        pin: { type: String, required: true },
        locality: { type: String, required: true },
        landmark: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        alternatePhone: { type: String },
        address: { type: String, required: true }
    }]
});
ShopDetailsSchema.set("toJSON", { virtuals: true });

export const ShopDetailsModel = mongoose.model("ShopDetails", ShopDetailsSchema);
