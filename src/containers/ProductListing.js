import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useEffect } from "react";
//import { setProducts, fetchProducts } from "../redux/acrions/productAction";
import { fetchProducts } from "../redux/acrions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products`)
  //     .catch((err) => {
  //       console.log("err = ", err);
  //     });
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    // fetchProducts();
    dispatch(fetchProducts());
  }, []);
  console.log("Products after dispatching an Action = ", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
