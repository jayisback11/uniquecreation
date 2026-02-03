import { useState } from "react";
import { Shield, Check, Clock } from "lucide-react";
// Assumes your CartContext is set up in your local project
import { useCart } from "@/context/CartContext"; 

const SALON_PRODUCTS = [
  {
    id: 1,
    name: "Silk Essence Hydrating Shampoo",
    category: "hair_care",
    description: "Infused with botanical extracts to restore moisture and shine to natural or treated hair.",
    price: 24.00,
    image_url: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Premium Brazilian Body Wave Bundle",
    category: "extensions",
    description: "100% Virgin Human Hair. Double wefted to ensure minimal shedding and long-lasting volume.",
    price: 125.00,
    image_url: "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Glossy Finish Heat Protectant",
    category: "styling",
    description: "Provides a protective barrier up to 450°F while adding a lightweight, silky glow.",
    price: 18.00,
    image_url: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "HD Lace Frontal Wig - Natural Black",
    category: "wigs",
    description: "High-definition lace that melts into any skin tone. Pre-plucked with a 150% density.",
    price: 350.00,
    image_url: "https://images.unsplash.com/photo-1565193998105-027581628162?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Intensive Repair Scalp Treatment",
    category: "treatment",
    description: "A nourishing blend of tea tree and peppermint oil to stimulate growth and soothe dryness.",
    price: 22.00,
    image_url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "24-Hour Edge Tamer",
    category: "styling",
    description: "Firm hold for sleek styles. This non-greasy formula leaves zero residue or white flakes.",
    price: 12.00,
    image_url: "https://images.unsplash.com/photo-1631730359585-38a4935cbec4?q=80&w=800&auto=format&fit=crop"
  }
];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'hair_care', label: 'Hair Care' },
    { value: 'treatment', label: 'Treatments' },
    { value: 'extensions', label: 'Extensions' },
    { value: 'wigs', label: 'Wigs' },
    { value: 'styling', label: 'Styling' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? SALON_PRODUCTS 
    : SALON_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div data-testid="shop-page" className="pt-24 pb-20 bg-[#F9F8F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#C5A059] text-xs tracking-[0.3em] uppercase mb-4 font-semibold">Professional Collection</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2D1B4D] mb-6">
            Elevate Your Beauty
          </h1>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Premium virgin hair and salon-grade formulas designed for the modern woman.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-8 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-[#2D1B4D] text-white shadow-xl'
                  : 'bg-white text-gray-400 hover:text-[#2D1B4D] border border-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-white group relative flex flex-col h-full border border-gray-50 hover:border-gray-200 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                  <span className="text-[10px] font-bold tracking-tighter text-[#2D1B4D] uppercase">
                    {product.category.replace('_', ' ')}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#C5A059] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-2xl font-light text-[#2D1B4D]">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-xs font-bold uppercase tracking-widest text-[#2D1B4D] hover:text-[#C5A059] transition-colors py-2"
                  >
                    + Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-y border-gray-100">
          <div className="flex items-center gap-6">
            <div className="bg-[#2D1B4D] p-4 text-white">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Secure Payment</h4>
              <p className="text-xs text-gray-400">100% Secure SSL Checkout</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-[#2D1B4D] p-4 text-white">
              <Check size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Authentic Quality</h4>
              <p className="text-xs text-gray-400">Strict Quality Assurance</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-[#2D1B4D] p-4 text-white">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider">Fast Shipping</h4>
              <p className="text-xs text-gray-400">Ships within 24 hours</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopPage;