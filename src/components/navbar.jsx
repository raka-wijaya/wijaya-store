import React, { useState, useEffect } from "react";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// The Navbar component handles navigation, search, and a responsive menu.
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems] = useState(0); 
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navigate = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  const [displayedSearchResults, setDisplayedSearchResults] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [initialError, setInitialError] = useState(null);
  const [showResultsSection, setShowResultsSection] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch('http://apiseller.mataharimall.net/product/get');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllProducts(data);
      } catch (err) {
        console.error("Gagal mengambil semua produk:", err);
        setInitialError(err);
      } finally {
        setInitialLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setDisplayedSearchResults([]);
      setShowResultsSection(false);
      return;
    }
    setShowResultsSection(true);
    if (initialLoading) {
      setDisplayedSearchResults([]);
      return;
    }
    if (initialError) {
      setDisplayedSearchResults([]);
      return;
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    const results = allProducts.filter(product =>
      product.title.toLowerCase().includes(lowerCaseQuery) ||
      product.body.toLowerCase().includes(lowerCaseQuery)
    );
    setDisplayedSearchResults(results);
  };

  const closeSearchResults = () => {
    setShowResultsSection(false);
    setSearchQuery("");
    setDisplayedSearchResults([]);
  };

  return (
    <>
      <div className="container mx-auto flex items-center top-0 justify-between p-5 bg-white shadow-sm fixed w-full z-20">
        <div className="flex gap-14 items-center">
          <h1 className="text-black font-bold font-Poppins text-3xl">
            WijayaStore
          </h1>
          <nav className="hidden lg:block text-black text-lg">
            <ul className="flex gap-10">
              <li>
                <Link to="/" className="hover:text-yellow-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Shop" className="hover:text-yellow-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-yellow-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-[400px] hidden lg:block">
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-lg text-gray-500 font-bold mr-3">
                  <Search size={20} />
                </span>
                <input
                  type="text"
                  placeholder="search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-none outline-none bg-transparent text-base placeholder:text-gray-500"
                />
              </div>
            </form>
          </div>

          <div className="relative hidden lg:flex items-center gap-4">
            <button onClick={() => navigate('/Cart')} className="p-2 text-black hover:text-yellow-500 transition-colors relative">
              <ShoppingCart size={24} />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <div className="relative">
              <button
                className="p-2 text-black hover:text-yellow-500 transition-colors"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              >
                <User size={24} />
              </button>
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link to='/Profile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Profile
                  </Link>
                  <Link to='/MyOrders' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Orders
                  </Link>
                  <Link to='/Settings' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                  <div className="border-t border-gray-200"></div>
                  <Link to='/Logout' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-black p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4 px-6 text-black text-lg">
              <li>
                <Link to='/' className="block hover:text-yellow-500 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/Shop' className="block hover:text-yellow-500 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link to='/About' className="block hover:text-yellow-500 transition-colors py-2" onClick={() => setShowMobileMenu(false)}>
                  About Us
                </Link>
              </li>
              <li className="border-t border-gray-200 pt-4 mt-4">
                <form onSubmit={handleSearch} className="w-full mb-4">
                  <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm">
                    <span className="text-lg text-gray-500 font-bold mr-3">
                      <Search size={20} />
                    </span>
                    <input
                      type="text"
                      placeholder="search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 border-none outline-none bg-transparent text-base placeholder:text-gray-500"
                    />
                  </div>
                </form>
              </li>
              <li>
                <div className="relative flex items-center justify-between py-2">
                  <button
                    onClick={() => {
                      navigate('/Cart');
                      setShowMobileMenu(false);
                    }}
                    className="p-0 text-black hover:text-yellow-500 transition-colors relative flex items-center gap-2"
                  >
                    <ShoppingCart size={24} />
                    Cart
                    {cartItems > 0 && (
                      <span className="ml-2 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItems}
                      </span>
                    )}
                  </button>
                </div>
              </li>
              <li>
                <div className="relative flex items-center justify-between py-2">
                  <button
                    className="p-0 text-black hover:text-yellow-500 transition-colors flex items-center gap-2"
                    onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  >
                    <User size={24} />
                    Profile
                  </button>
                  {showProfileDropdown && (
                    <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 top-full">
                      <Link to='/Profile' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>
                        My Profile
                      </Link>
                      <Link to='/MyOrders' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>
                        My Orders
                      </Link>
                      <Link to='/Settings' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>
                        Settings
                      </Link>
                      <div className="border-t border-gray-200"></div>
                      <button
                        onClick={() => {
                          navigate('/Logout');
                          setShowMobileMenu(false);
                        }}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}

        {showResultsSection && (
          <div className="fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white overflow-y-auto p-4 z-10">
            <div className="container mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Hasil Pencarian:</h3>
                <button
                  onClick={closeSearchResults}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>
              {initialLoading ? (
                <p>Memuat produk awal...</p>
              ) : initialError ? (
                <p className="text-red-500">Error memuat produk: {initialError.message}</p>
              ) : displayedSearchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedSearchResults.map(product => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-sm">
                      <h4 className="font-bold text-lg">{product.title}</h4>
                      <p className="text-gray-600 text-sm">{product.body.substring(0, 100)}...</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Tidak ada produk ditemukan untuk "{searchQuery}".</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
