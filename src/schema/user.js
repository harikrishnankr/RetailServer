import mongoose, { Schema } from "mongoose";

const UserTypes = {
    Buyer: "Buyer",
    Seller: "Seller",
    Admin: "Admin"
};

const SellerSchema = new Schema({
    firstName: { type: String, required: true, maxLength: 26 },
    lastName: { type: String, required: true, maxLength: 26 },
    email: { type: String, required: false, unique: true },
    mobileNumber: { type: String, required: false, unique: true },
    createdDate: { type: Date, default: Date.now },
    hash: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: [UserTypes.Buyer, UserTypes.Admin] },
    shopDetailId: [{ type: String, required: true }]
});
SellerSchema.set("toJSON", { virtuals: true });

const BuyerSchema = new Schema({
    firstName: { type: String, required: true, maxLength: 26 },
    lastName: { type: String, required: true, maxLength: 26 },
    email: { type: String, required: false, unique: true },
    mobileNumber: { type: String, required: false, unique: true },
    createdDate: { type: Date, default: Date.now },
    hash: { type: String, required: true, unique: true },
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
BuyerSchema.set("toJSON", { virtuals: true });

export const BuyerModel = mongoose.model("User", BuyerSchema);
export const SellerModel = mongoose.model("Seller", SellerSchema);
