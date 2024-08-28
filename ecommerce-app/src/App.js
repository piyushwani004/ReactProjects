import "./App.css";
import Category from "./Components/Category";
import { useEffect, useState } from "react";
import ProductService from "./Service/ProductService";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalProduct, setFinalProduct] = useState([]);
  let [catName, setCatName] = useState("");
  let [loading, setLoading] = useState(true); // Add loading state
  let [noData, setNoData] = useState(false); // Add noData state

  let getcategory = async () => {
    const categoryData = await ProductService.getCategory();
    const categoryNames = categoryData.map((category) => category.name);
    // console.log(categoryNames);
    setFinalCategory(categoryNames);
    // console.log(finalCategory);
  };

  let getAllProducts = async () => {
    setLoading(true); // Set loading to true when fetching starts
    const productData = await ProductService.getAllProducts();
    if (productData.products.length > 0) {
      setFinalProduct(productData.products);
      setNoData(false); // Reset noData state if data is found
    } else {
      setNoData(true); // Set noData state if no products are found
    }
    setLoading(false); // Set loading to false when fetching ends
  };

  let getProductByCategory = async () => {
    setLoading(true); // Set loading to true when fetching starts
    const productData = await ProductService.getProductByCategory(catName);
    if (productData.products.length > 0) {
      setFinalProduct(productData.products);
      setNoData(false); // Reset noData state if data is found
    } else {
      setNoData(true); // Set noData state if no products are found
    }
    setLoading(false); // Set loading to false when fetching ends
  };

  useEffect(() => {
    getcategory();
    getAllProducts();
  }, []);

  useEffect(() => {
    if (catName !== "") {
      getProductByCategory();
    }
  }, [catName]);

  let Pitems = finalProduct.map((pro, i) => {
    return <ProductItems key={i} products={pro} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-5">
                {loading
                  ? "Loading..." // Show loading message while data is being fetched
                  : noData
                  ? "No products found." // Show message if no data is found
                  : Pitems // Show products if data is available
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({ products }) {
  // console.log(products);
  return (
    <div className="shadow-lg text-center pb-4">
      <img src={products.thumbnail} className="w-[100%] h-[250px] " />
      <h4>{products.title}</h4>
      <b>Rs {products.price}</b>
    </div>
  );
}
