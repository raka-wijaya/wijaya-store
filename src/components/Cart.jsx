import { useState, useEffect } from 'react';


const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
 
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchCartData = async () => {
      try {
       
        const cartResponse = await fetch('http://apiseller.mataharimall.net/product/get');
        if (!cartResponse.ok) {
          throw new Error('Gagal mengambil data keranjang.');
        }
        const cartData = await cartResponse.json();

   
        const productPromises = cartData.products.map(item =>
          fetch(`https://fakestoreapi.com/products/${item.productId}`)
        );


        const productResponses = await Promise.all(productPromises);
        const productData = await Promise.all(
          productResponses.map(res => {
            if (!res.ok) {
              throw new Error('Gagal mengambil detail produk.');
            }
            return res.json();
          })
        );
        
 
        const combinedCartItems = cartData.products.map(cartItem => {
          const productDetail = productData.find(p => p.id === cartItem.productId);
          return {
            ...productDetail,
            quantity: cartItem.quantity,
          };
        });

        setCartItems(combinedCartItems);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching cart data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []); 


  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

 
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-8">
        <p className="text-xl text-gray-600">Memuat keranjang...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-8 text-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Keranjang Belanja</h1>

        {cartItems.length > 0 ? (
          <div className="space-y-6">
       
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-xl shadow-md border border-gray-200 transition-shadow duration-300 hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/100x100/E5E7EB/6B7280?text=No+Image";
                  }}
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-600">Jumlah: {item.quantity}</p>
                  <p className="text-md font-bold text-blue-600 mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="p-2 text-red-500 hover:text-red-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}

            
            <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-lg mt-8">
              <p className="text-2xl font-bold text-gray-800">Total</p>
              <p className="text-2xl font-bold text-blue-600">
                ${calculateTotal().toFixed(2)}
              </p>
            </div>

    
            <button
              className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Lanjutkan ke Pembayaran
            </button>
          </div>
        ) : (
        
          <div className="text-center text-xl text-gray-600 p-12 bg-white rounded-xl shadow-lg">
            Keranjang Anda kosong.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
