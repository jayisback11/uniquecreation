import { useEffect, useState } from "react";
import axios from "axios";
import { Shield, Check, Clock } from "lucide-react";
import { useCart } from "@/context/CartContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await axios.post(`${API}/seed`);
        const response = await axios.get(`${API}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'hair_care', label: 'Hair Care' },
    { value: 'treatment', label: 'Treatments' },
    { value: 'extensions', label: 'Extensions' },
    { value: 'wigs', label: 'Wigs' },
    { value: 'styling', label: 'Styling' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div data-testid="shop-page" className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-champagne-gold-500 text-sm tracking-widest uppercase mb-4">Shop</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-royal-purple-500 mb-6">
            Our Products
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Professional-grade hair care products and premium virgin hair for salon-quality results at home.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              data-testid={`filter-${cat.value}`}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                selectedCategory === cat.value
                  ? 'bg-royal-purple-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-royal-purple-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              data-testid={`shop-product-${product.id}`}
              className="bg-white group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category.replace('_', ' ')}</span>
                <h3 className="font-medium text-gray-800 mt-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-champagne-gold-600 font-bold">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    data-testid={`shop-add-cart-${product.id}`}
                    className="bg-royal-purple-500 text-white px-4 py-2 text-xs font-medium hover:bg-royal-purple-600 transition-colors"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-8 h-8 mx-auto text-royal-purple-500 mb-2" />
              <p className="font-medium text-sm">Secure Checkout</p>
            </div>
            <div>
              <Check className="w-8 h-8 mx-auto text-royal-purple-500 mb-2" />
              <p className="font-medium text-sm">Quality Guaranteed</p>
            </div>
            <div>
              <Clock className="w-8 h-8 mx-auto text-royal-purple-500 mb-2" />
              <p className="font-medium text-sm">Fast Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
