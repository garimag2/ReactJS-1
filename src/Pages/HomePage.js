import React from "react";

import ProductListing from "../Features/product-listing";

import data from "../data/products.json";

export default function Homepage(props) {
  return (
    <div>
      <ProductListing products={data.products} />
    </div>
  );
}
