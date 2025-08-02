import React from 'react';
import { Mail,  Instagram,  Github } from 'lucide-react'; 
import emailjs from '@emailjs/browser'; 

function About() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const SERVICE_ID = 'service_0ppgd0p';   
  const TEMPLATE_ID = 'template_of4aeor'; 
  const PUBLIC_KEY = 'KnwLx_VvLjRE_7lAw';  


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setMessage(''); 
    setIsLoading(true); 

    if (!email.trim()) {
      setMessage('Mohon masukkan alamat email Anda.');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);
      
      setMessage('Terima kasih telah berlangganan! Langganan Anda segera dikonfirmasi.');
      setEmail(''); 
    } catch (error) {
      console.error('Gagal mengirim email:', error);
      setMessage('Terjadi kesalahan saat berlangganan. Silakan coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <footer id='About' className="container p-5 bg-[#F0F0F0] text-[#333] font-sans relative top-20 z-0">
      {/* Bagian Atas: Stay Up To Date */}
      <div className="bg-black text-white w-full max-w-[1240px] h-auto mx-auto rounded-3xl py-12 px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">STAY UPTO DATE ABOUT</h2>
          <h2 className="text-3xl font-bold">OUR LATEST OFFERS</h2>
        </div>
        

        <div className="flex flex-col items-center sm:flex-row gap-4 w-full md:w-auto">
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full sm:w-[280px]">
            <div className="relative w-full">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              
              <input
                type="email"
                // name="user_email"
                placeholder="Enter your email address"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 pl-10 pr-4 bg-white rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-700"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading} 
              className="bg-white text-black py-3 px-8 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-md"
            >
              {isLoading ? 'Mengirim...' : 'Subscribe to Newsletter'}
            </button>
          </form>
          
          {message && (
            <p className={`mt-4 text-sm font-medium ${message.includes('kesalahan') ? 'text-red-700' : 'text-green-700'}`}>
              {message}
            </p>
          )}
        </div>
      </div>

      {/* Bagian Tengah: Link Columns */}
      <div className="p-10 md:p-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Shop.co Section */}
        <div>
          <h3 className="text-3xl font-bold mb-4 font-Poppins">WijayaStore</h3>
          <p className="text-sm text-gray-700 Font-Poppins mb-6">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex space-x-4">
            {/* Perbaikan tautan Instagram: penulisan target dan penambahan rel */}
            <a href="https://www.instagram.com/rakha_wijaya1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://github.com/raka-wijaya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white rounded-full hover:bg-gray-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 font-Poppins">COMPANY</h4>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Works</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 font-Poppins">HELP</h4>
          <ul className="space-y-3 text-gray-700 text-sm font-Poppins">
            <li><a href="#" className="hover:underline">Customer Support</a></li>
            <li><a href="#" className="hover:underline">Delivery Details</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 font-Poppins">FAQ</h4>
          <ul className="space-y-3 text-gray-700 text-sm font-Poppins">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
            <li><a href="#" className="hover:underline">Orders</a></li>
            <li><a href="#" className="hover:underline">Payments</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="font-bold text-lg mb-4 font-Poppins">RESOURCES</h4>
          <ul className="space-y-3 text-gray-700 text-sm font-Poppins">
            <li><a href="#" className="hover:underline">Free eBooks</a></li>
            <li><a href="#" className="hover:underline">Development Tutorial</a></li>
            <li><a href="#" className="hover:underline">How to - Blog</a></li>
            <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>

      {/* Bagian Bawah: Copyright & Payments */}
      <div className="border-t border-gray-300 py-6 font-Poppins px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700">
        <p>WijayaStore &copy; 2025, All Rights Reserved</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-5" />
        </div>
      </div>
    </footer>
  );
}

export default About;
