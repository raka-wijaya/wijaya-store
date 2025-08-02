import React, { useState, useEffect } from 'react';


const createMockOrders = (products) => {
  const orders = [];
  const statusList = ['Delivered', 'Shipped', 'In Progress'];
  const today = new Date();
  
 
  for (let i = 0; i < 3; i++) {
    const orderItems = [];
    
    const numItems = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < numItems; j++) {
      const randomIndex = Math.floor(Math.random() * products.length);
      const product = products[randomIndex];
      orderItems.push({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: Math.floor(Math.random() * 2) + 1, 
        image: product.image,
      });
    }

    
    const orderDate = new Date();
    orderDate.setDate(today.getDate() - i); 
    
    orders.push({
      id: i + 1,
      orderNumber: `ORD-${orderDate.toISOString().slice(0, 10)}-00${i + 1}`,
      date: orderDate.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }),
      status: statusList[i],
      items: orderItems,
    });
  }

  return orders;
};


const MyOrder = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchOrdersFromApi = async () => {
      try {
        const response = await fetch('http://apiseller.mataharimall.net/product/get');
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari API.');
        }
        const products = await response.json();
        
        
        const mockOrders = createMockOrders(products);
        setOrders(mockOrders);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrdersFromApi();
  }, []);

 
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Pesanan Saya</h1>

        {loading && (
          <div className="text-center text-xl text-gray-600">Memuat pesanan...</div>
        )}

        {error && (
          <div className="text-center text-xl text-red-600">Error: {error}</div>
        )}

        {!loading && orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Nomor Pesanan</p>
                    <h2 className="text-lg font-semibold text-gray-800">{order.orderNumber}</h2>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 text-right">Tanggal</p>
                    <p className="text-md font-medium text-gray-700">{order.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>

                <div className="space-y-4">
                  {order.items.map(item => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-contain p-2 rounded-lg border"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/100x100/E5E7EB/6B7280?text=No+Image";
                        }}
                      />
                      <div className="flex-grow">
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">Jumlah: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500">
                          (@${item.price.toFixed(2)})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && (
            <div className="text-center text-xl text-gray-600 p-12 bg-white rounded-xl shadow-lg">
              Anda belum memiliki pesanan.
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyOrder;
