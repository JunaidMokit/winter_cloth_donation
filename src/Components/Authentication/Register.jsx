import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Register() {
  const { createUser, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    return '';
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photo.value;

     const error = validatePassword(password);
    if (error) {
      setPasswordError(error);
      return;
    }
    setPasswordError('');

    try {
      const result = await createUser(email, password);
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL,
      });
      await signOutUser();
      setMessage('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      setMessage(error.message);
      console.log('ERROR', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">User Registration</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-blue-900 font-medium mb-1">Name</label>
            <input
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-blue-900 font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-blue-900 font-medium mb-1">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter photo URL"
              required
            />
          </div>

          <div>
            <label className="block text-blue-900 font-medium mb-1">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="w-full border border-gray-300 rounded-md p-2 pr-10"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2.5 text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-semibold py-2 rounded-md hover:bg-blue-900 transition text-3xl font-bold text-blue-900 mb-6 text-center animate__animated animate__fadeInDown"
          >
            Register
          </button>
        </form>

        {message && <p className="text-center text-green-600 mt-4">{message}</p>}
        {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
      </div>
    </div>
  );
}

export default Register;

