import React from 'react'
import { Link } from 'react-router-dom'

const nofound = () => {
  return (
    <div className="container mx-auto flex justify-center h-auto mt-32 h-screen">
      <div className="max-w-md py-8 px-6    bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-6">
          We couldn't find any products matching your search. Please visit{' '}
          <Link to="/" className="text-blue-500 hover:underline" replace>
            home
          </Link>{' '}
          to see all available products.
        </p>
      </div>
    </div>
  )
}

export {nofound}
