import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthProvider';

function Forget() {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = e => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        setMessage('Password reset email sent!');
      })
      .catch(error => {
        setMessage(error.message);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border p-2 mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Send Reset Email
          </button>
        </form>
        {message && <p className="text-center mt-4 text-blue-700">{message}</p>}
      </div>
    </div>
    </div>
  )
}

export default Forget
