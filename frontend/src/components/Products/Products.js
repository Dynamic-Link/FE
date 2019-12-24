import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faLink);

const Products = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faLink} />
      <i className="fas fa-sign-out-alt" />

      <p>Products</p>
    </div>
  );
};

export default Products;
