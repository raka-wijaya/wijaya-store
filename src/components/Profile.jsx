import React, { useState } from 'react';


function Profile() {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: 'Jl. Contoh No. 123, Kota Contoh',
    phone: '+62 812 3456 7890',
    bio: 'Pengguna setia WijayaStore sejak 2020. Suka berbelanja barang elektronik dan aksesoris.',
    profilePicture: 'https://placehold.co/150x150/FFD700/FFFFFF?text=JD' 
  });


  const [editMode, setEditMode] = useState(false);

  const [editedProfile, setEditedProfile] = useState({ ...userProfile });


  const handleEditToggle = () => {
    setEditMode(!editMode);

    if (editMode) {
      setEditedProfile({ ...userProfile });
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSave = () => {
    setUserProfile(editedProfile); 
    setEditMode(false); 
    console.log('Profil disimpan:', editedProfile);

  };

  return (
    <div className="container mt-14 p-4 min-h-screen bg-gray-100 flex items-center justify-center p-5 container sm:p-6 lg:p-8">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">

          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-yellow-500 shadow-md">
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/150x150/FFD700/FFFFFF?text=JD"; 
              }}
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-Poppins mb-2">
              {userProfile.name}
            </h2>
            <p className="text-gray-600 text-lg mb-4">Pengguna WijayaStore</p>
            <button
              onClick={handleEditToggle}
              className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center mx-auto sm:mx-0"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-edit mr-2"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              {editMode ? 'Batal Edit' : 'Edit Profil'}
            </button>
          </div>
        </div>


        <div className="space-y-4">

          <div className="flex items-center text-gray-700">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail mr-3 flex-shrink-0"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="font-semibold w-24">Email:</span>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={editedProfile.email}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            ) : (
              <span>{userProfile.email}</span>
            )}
          </div>


          <div className="flex items-center text-gray-700">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone mr-3 flex-shrink-0"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2.02 15.15 15.15 0 0 1-12.62-6.32 15.15 15.15 0 0 1-6.32-12.62A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-semibold w-24">Telepon:</span>
            {editMode ? (
              <input
                type="tel"
                name="phone"
                value={editedProfile.phone}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            ) : (
              <span>{userProfile.phone}</span>
            )}
          </div>

          <div className="flex items-start text-gray-700">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin mr-3 mt-1 flex-shrink-0"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="font-semibold w-24">Alamat:</span>
            {editMode ? (
              <textarea
                name="address"
                value={editedProfile.address}
                onChange={handleChange}
                rows="3"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-y"
              ></textarea>
            ) : (
              <span className="flex-1">{userProfile.address}</span>
            )}
          </div>

          <div className="flex items-start text-gray-700">
   
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user mr-3 mt-1 flex-shrink-0"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="font-semibold w-24">Bio:</span>
            {editMode ? (
              <textarea
                name="bio"
                value={editedProfile.bio}
                onChange={handleChange}
                rows="4"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-y"
              ></textarea>
            ) : (
              <span className="flex-1">{userProfile.bio}</span>
            )}
          </div>
        </div>


        {editMode && (
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center"
            >
              {/* Save Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-save mr-2"
              >
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
              Simpan Perubahan
            </button>
            <button
              onClick={handleEditToggle} 
              className="bg-gray-400 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-500 transition-colors duration-300 flex items-center"
            >
 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x-circle mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
              Batal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
