// src/pages/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="text-center animate__animated animate__fadeIn">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
        <h2 className="text-2xl text-gray-700 mb-4">Oops! Page not found.</h2>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
