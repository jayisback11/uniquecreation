import { useState } from "react";
import { Instagram, Heart } from "lucide-react";

// Professional Salon Gallery Data using high-quality Unsplash stock
const GALLERY_DATA = [
  {
    id: 1,
    category: "braids",
    caption: "Boho Knotless Braids with custom color blend.",
    likes: 124,
    image_url: "https://images.unsplash.com/photo-1646038822521-4d1a0172e293?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "styling",
    caption: "Signature Silk Press & Trim for that mirror shine.",
    likes: 89,
    image_url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "natural",
    caption: "Hydrated Wash & Go defining natural curls.",
    likes: 156,
    image_url: "https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "trichology",
    caption: "Scalp analysis and detox treatment session.",
    likes: 45,
    image_url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "locs",
    caption: "Traditional Loc Retwist & Style.",
    likes: 210,
    image_url: "https://images.unsplash.com/photo-1620331317312-74b88fe13917?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "weaves",
    caption: "Seamless Traditional Sew-in with Body Wave bundles.",
    likes: 178,
    image_url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    category: "braids",
    caption: "Feed-in Cornrows with intricate design.",
    likes: 92,
    image_url: "https://images.unsplash.com/photo-1605497746444-130650193e50?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    category: "styling",
    caption: "Hollywood Waves for our beautiful bride.",
    likes: 312,
    image_url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    category: "natural",
    caption: "Coils defined with our specialized honey custard.",
    likes: 67,
    image_url: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=800&auto=format&fit=crop"
  }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'braids', label: 'Braids' },
    { value: 'styling', label: 'Styling' },
    { value: 'natural', label: 'Natural' },
    { value: 'trichology', label: 'Trichology' },
    { value: 'locs', label: 'Locs' },
    { value: 'weaves', label: 'Weaves' },
  ];

  const filteredGallery = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  return (
    <div data-testid="gallery-page" className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-5 h-5 text-champagne-gold-500" />
            <p className="text-champagne-gold-500 text-sm tracking-widest uppercase">Live from the Salon</p>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-royal-purple-500 mb-6">
            Transformations
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            See the magic happen. Real results from real clients at Unique Creations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                selectedCategory === cat.value
                  ? 'bg-royal-purple-500 text-white border-royal-purple-500 shadow-md'
                  : 'bg-white text-gray-600 border-gray-100 hover:bg-royal-purple-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.map(item => (
            <div 
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-sm"
            >
              <img
                src={item.image_url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-white font-medium text-lg mb-2">{item.caption}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart className="w-4 h-4 fill-white" />
                    <span className="text-sm font-semibold">{item.likes}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-champagne-gold-500 text-white px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center border-t border-gray-200 pt-12">
          <p className="text-gray-500 mb-6 italic">Want to see more of our work?</p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-royal-purple-500 text-white px-8 py-3 rounded-full hover:bg-black transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <Instagram size={18} />
            Follow @UniqueCreations
          </a>
        </div>

      </div>
    </div>
  );
};

export default GalleryPage;