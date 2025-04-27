import { api } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

// Loading component for Suspense
function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="bg-gray-100 rounded-lg p-6 animate-pulse h-72"
        />
      ))}
    </div>
  );
}

// Component to fetch and display products
async function ProductsList() {
  const response = await api.products.getAllProducts();
  
  if (!response.data || response.error) {
    return <p className="text-center py-10 text-red-500">Error loading products: {response.error || 'Unknown error'}</p>;
  }
  
  const products = response.data;
  
  if (!products.length) {
    return <p className="text-center py-10">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link 
          href={`/store/product/${product._id}`} 
          key={product._id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-48 bg-gray-200">
            {product.content.images[0] && product.content.images[0] !== "string" ? (
              <Image 
                src={product.content.images[0]} 
                alt={product.content.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{product.content.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.content.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">${(product.price / 100).toFixed(2)}</span>
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${product.availability ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="text-sm text-gray-500">{product.availability ? 'In Stock' : 'Out of Stock'}</span>
              </div>
            </div>
            
            <div className="mt-3 text-xs text-gray-500">
              Delivery via: {product.delivery_method}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Main page component
export default function StorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Our Products</h1>
      <p className="text-gray-600 mb-8">Browse our latest collection of products</p>
      
      <Suspense fallback={<ProductsLoading />}>
        <ProductsList />
      </Suspense>
    </div>
  );
}