import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { Product } from "../components/Product";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    let product = await fetch("https://fakestoreapi.com/products");
    let response = await product.json();
    if (response) {
      setLoading(false);
      setProducts(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center item-center">
          <Circles
            height={120}
            width={120}
            color="rgb(127, 29, 29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="container my-5 flex flex-wrap justify-center items-center gap-5">
          {products && products.length
            ? products.map((item) => (
                <Product key={item.id} productData={item} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};
