import mongoose, { Schema } from "mongoose";

const OrderStatus = {
    ORDERED: "Ordered",
    SHIPPED: "Shipped",
    OUT_FOR_DELIVERY: "Out_For_Delivery",
    CANCELLED: "Cancelled",
    DELIVERED: "Delivered",
    RETURN_REQUEST: "Return_Requested",
    RETURNED: "Returned",
    RETURN_REJECTED: "Return_Rejected",
};
const OrderStatusEnum = [
    OrderStatus.ORDERED,
    OrderStatus.SHIPPED,
    OrderStatus.OUT_FOR_DELIVERY,
    OrderStatus.CANCELLED,
    OrderStatus.DELIVERED,
    OrderStatus.RETURN_REQUEST,
    OrderStatus.RETURNED,
    OrderStatus.RETURN_REJECTED
];

const PaymentTypes = {
    ONLINE: "Online",
    COD: "Cash_On_Delivery"
};
const PaymentTypeEnum = [PaymentTypes.ONLINE, PaymentTypes.COD];

const PaymentStatus = {
    PAYED: "Payed",
    PAYMENT_FAILED: "Payment_Failed",
    PAYMENT_PENDING: "Payment_Pending"
};
const PaymentStatusEnum = [PaymentStatus.PAYED, PaymentStatus.PAYMENT_FAILED, PaymentStatus.PAYMENT_PENDING];

const OrderSchema = new Schema({
    buyerDetails: {
        buyerId: { type: String, required: true },
        buyerName: { type: String, required: true },
        deliveryAddress: {
            name: { type: String, required: true },
            mobile: { type: String, required: true },
            pin: { type: String, required: true },
            locality: { type: String, required: true },
            landmark: { type: String },
            city: { type: String, required: true },
            state: { type: String, required: true },
            alternatePhone: { type: String },
            address: { type: String, required: true }
        }
    },
    orderDate: { type: Date, default: Date.now },
    currentOrderStatus: { type: String, required: true, enum: OrderStatusEnum },
    paymentStatus: { type: String, enum: PaymentStatusEnum },
    paymentType: { type: String, enum: PaymentTypeEnum },
    productDetails: [{
        title: { type: String, required: true },
        productId : { type: String, required: true },
        description: { type: String},
        images: [ String ],
        priceDistribution: {
            finalPrice: { type: Number, required: true },
            salePrice: { type: Number, required: true },
            currency: { type: String, required: true, enum: [Currency.INR, Currency.USD] }
        }
    }],
    aggregatePriceDetails: {
        finalPrice: { type: Number, required: true },
        salePrice: { type: Number, required: true },
        currency: { type: String, required: true, enum: [Currency.INR, Currency.USD] }
    },
    statusHistory: [{
        status: { type: String, enum: OrderStatusEnum },
        date: { type: Date },
    }]
});
OrderSchema.set("toJSON", { virtuals: true });

export const OrderModel = mongoose.model("Order", OrderSchema);

