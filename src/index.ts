import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator";

fetchProductCatalog()
  .then((products) => {
    console.log("Product Catalog:", products);

    const reviewRequests = products.map((product) => {
      return fetchProductReviews(product.id);
    });

    return Promise.all(reviewRequests);
  })
  .then((reviews) => {
    console.log("Product Reviews:", reviews);

    return fetchSalesReport();
  })
  .then((salesReport) => {
    console.log("Sales Report:", salesReport);
  })
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error("Dashboard Error:", error.message);
    } else {
      console.error("An unexpected error occurred.");
    }
  })
  .finally(() => {
    console.log("Dashboard loading process complete.");
  });