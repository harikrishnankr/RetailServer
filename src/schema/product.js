import mongoose, { Schema } from "mongoose";

const Currency = {
    INR: "INR",
    USD: "USD"
};

const WLH_UNITS = {
    MM: "mm",
    CM: "cm",
    M: "metre"
};

const WEIGHT_UNITS = {
    KG: "kg",
    G: "g"
};

const ProductDimensionSchema = new Schema({
    wlhUnit: { type: String, required: true, enum: [WLH_UNITS.MM, WLH_UNITS.CM, WLH_UNITS.M] },
    width: { type: Number, required: true },
    length: { type: Number, required: true },
    height: { type: Number, required: true },
    weightUnit: { type: String, required: true, enum: [WEIGHT_UNITS.KG, WEIGHT_UNITS.G] },
    wight: { type: Number, required: true }
});
ProductDimensionSchema.set("toJSON", { virtuals: true });

const ProductPriceSchema = new Schema({
    productId: { type: String, required: true },
    finalPrice: { type: Number, required: true },
    salePrice: { type: Number, required: true },
    currency: { type: String, required: true, enum: [Currency.INR, Currency.USD] }
});
ProductPriceSchema.set("toJSON", { virtuals: true });

const ProductSchema = new Schema({
    title: { type: String, required: true },
    productId : new mongoose.Types.ObjectId(),
    sellerId: { type: String},
    sellerName: { type: String},
    description: { type: String},
    /**
     * image urls
     */
    images: [ String ],
    /**
     * Can only have one @category and @subCategory
     */
    category: {
        name: { type: String, required: true },
        id: { type: String, unique: true, required: true}
    },
    subCategory: {
        name: { type: String, required: true },
        id: { type: String, unique: true, required: true}
    },
    /**
     * @priceDistribution can have promotions and offers as well as part of the final price
     */
    priceDistributionId: { type: String, required: true },
    dimensionId: { type: String, required: true}
});
ProductSchema.set("toJSON", { virtuals: true });

export const ProductModel = mongoose.model("Product", ProductSchema);
export const ProductDimensionModel = mongoose.model("ProductDimension", ProductDimensionSchema);
