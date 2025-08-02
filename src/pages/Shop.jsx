import React from "react";
import { useEffect, useState } from "react";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://apiseller.mataharimall.net/product/get"
      );
      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }
      const data = await response.json();

      const formattedProducts = Array.isArray(data)
        ? data.map((item) => ({
            id: item.id,
            imageUrl:
              item.imageUrl ||
              "https://placehold.co/600x400/cccccc/333333?text=Gambar+Tidak+Tersedia",
          }))
        : [];
      setProducts(formattedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-20 container mx-auto -z-10 p-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-Poppins text-black mb-12">New Products</h2>

        {loading && (
          <div className="text-center text-gray-700 text-lg">
            Memuat produk...
          </div>
        )}

        {error && (
          <div className="text-center text-red-600 text-lg">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs transition-transform transform hover:scale-105"
              >
                {/* Placeholder untuk gambar produk */}
                <img
                  src={product.imageUrl}
                  alt={`Product ${product.id}`}
                  className="w-full h-64 object-cover rounded-t-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/cccccc/333333?text=Gambar+Tidak+Tersedia"; // Gambar fallback
                  }}
                />
              
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Product {product.id}
                  </h3>
                  <p className="text-gray-600 mt-1">$XX.XX</p>{" "}
                 
                </div>
              </div>
            ))}
          </div>
        )}

        <button className="mt-16 bg-white -z-10 hover:bg-gray-100 text-Poppins py-3 px-8 rounded-full text-lg font-semibold shadow-md transition-colors duration-300 w-full max-w-[358px] h-[46px] mx-auto block sm:w-auto sm:max-w-none sm:h-auto">
          View All
        </button>
      </div>
    </div>
  );
}

export default Shop;
