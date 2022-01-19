const setBuyerRoute = (router) => {
    router
    .post("/auth/buyer", (req, res) => {
        // console.log(req);
        const responsePayload = {
            error: null,
            message: "Buyer Auth Success",
            data: req.body
        };
        res.json(responsePayload);
    });
};

const setSellerRoute = (router) => {
    router
    .post("/auth/seller", (req, res) => {
        // console.log(req);
        res
        .json({
            error: null,
            message: "Seller Auth Success",
            data: req.body
        });
    });
};

export const authGateway = (router) => {
    setBuyerRoute(router);
    setSellerRoute(router);
};
