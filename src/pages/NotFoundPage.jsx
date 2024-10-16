import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-base-200">
            <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
            <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
            <p className="mb-6 text-gray-600">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
            <Link to="/products" className="btn btn-primary">
                Go to Products
            </Link>
        </div>
    );
}
