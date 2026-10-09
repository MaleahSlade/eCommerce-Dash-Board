"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductCatalog = fetchProductCatalog;
exports.fetchProductReviews = fetchProductReviews;
exports.fetchSalesReport = fetchSalesReport;
const errors_1 = require("./errors");
//Validates that all products have their required data values 
function validateProduct(product) {
    if (typeof product.id !== "number" ||
        typeof product.name !== "string" ||
        product.name.trim() === "" ||
        typeof product.price !== "number" ||
        !Number.isFinite(product.price) ||
        product.price < 0) {
        throw new errors_1.DataError("Invalid product data: required fields are missing or invalid.");
    }
}
//Create Product Catalog 
const productCatalog = [
    { id: 1, name: "Pepsi", price: 1.50 },
    { id: 2, name: "Coca-Cola", price: 1.75 },
    { id: 3, name: 'Mountain-Dew', price: 1.65 },
    { id: 4, name: 'Root Beer', price: 1.40 },
    { id: 5, name: 'Sprite', price: 1.70 },
];
//Create Product Reviews
const productReviews = [
    {
        productId: 1,
        reviewer: "Jordan",
        rating: 5,
        comment: "Refreshing and delicious!",
    },
    {
        productId: 1,
        reviewer: "Gabe",
        rating: 4,
        comment: "Good flavor, but a little sweet.",
    },
    {
        productId: 2,
        reviewer: "Maleah",
        rating: 5,
        comment: "A classic favorite!",
    },
    {
        productId: 3,
        reviewer: "Gigi",
        rating: 4,
        comment: "Great citrus flavor.",
    },
    {
        productId: 4,
        reviewer: "Chris",
        rating: 5,
        comment: "Smooth and tasty!",
    },
    {
        productId: 5,
        reviewer: "Titus",
        rating: 4,
        comment: "Light and refreshing.",
    },
];
//'export' allows other files to use your function 
//Product Catalog Functions 
function fetchProductCatalog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                try {
                    productCatalog.forEach(validateProduct);
                    resolve(productCatalog);
                }
                catch (error) {
                    reject(error);
                }
            }
            else {
                reject(new errors_1.NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
}
async function showProducts() {
    try {
        const products = await fetchProductCatalog();
        console.log(products);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
showProducts();
//Product Reviews Functions 
function fetchProductReviews(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                const reviews = productReviews.filter((review) => review.productId === productId);
                resolve(reviews);
            }
            else {
                reject(new errors_1.NetworkError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
}
async function showReviews() {
    try {
        const reviews = await fetchProductReviews(1);
        console.log("Pepsi Reviews:", reviews);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
showReviews();
//SalesReport Functions 
function fetchSalesReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({
                    totalSales: 12500,
                    unitsSold: 250,
                    averagePrice: 50,
                });
            }
            else {
                reject(new errors_1.NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
}
async function showSalesReport() {
    try {
        const report = await fetchSalesReport();
        console.log("Sales Report:", report);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
showSalesReport();
