import React, { useContext, useState } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function UpdateProfile() {
  const { user, refreshUser } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName || '');
  const [photoURL, setPhotoURL] = useState(user.photoURL || '');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL
      });
       refreshUser();
      setMessage('Profile updated successfully!');
      setTimeout(() => navigate('/dashboard'),0);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Photo URL"
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
        {message && <p className="mt-4 text-center text-blue-700">{message}</p>}
      </div>
    </div>
  );
}

export default UpdateProfile;
