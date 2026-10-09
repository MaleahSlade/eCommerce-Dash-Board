"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiSimulator_1 = require("./apiSimulator");
(0, apiSimulator_1.fetchProductCatalog)()
    .then((products) => {
    console.log("Product Catalog:", products);
    const reviewRequests = products.map((product) => {
        return (0, apiSimulator_1.fetchProductReviews)(product.id);
    });
    return Promise.all(reviewRequests);
})
    .then((reviews) => {
    console.log("Product Reviews:", reviews);
    return (0, apiSimulator_1.fetchSalesReport)();
})
    .then((salesReport) => {
    console.log("Sales Report:", salesReport);
})
    .catch((error) => {
    if (error instanceof Error) {
        console.error("Dashboard Error:", error.message);
    }
    else {
        console.error("An unexpected error occurred.");
    }
})
    .finally(() => {
    console.log("Dashboard loading process complete.");
});
