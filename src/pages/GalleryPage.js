import { useEffect, useState } from "react";
import axios from "axios";
import { Instagram, Heart } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const GalleryPage = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        await axios.post(`${API}/seed`);
        const response = await axios.get(`${API}/gallery`);
        setGallery(response.data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };
    fetchGallery();
  }, []);

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
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <div data-testid="gallery-page" className="pt-24 pb-20 bg-off-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              data-testid={`gallery-filter-${cat.value}`}
              className={`px-5 py-2 text-sm font-medium transition-colors ${
                selectedCategory === cat.value
                  ? 'bg-royal-purple-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-royal-purple-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredGallery.map(item => (
            <div 
              key={item.id}
              data-testid={`gallery-image-${item.id}`}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={item.image_url}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-medium mb-2">{item.caption}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                    <span className="text-xs uppercase tracking-wide bg-white/20 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 text-center">
          <p className="text-gray-600 text-sm">
            <strong>Note:</strong> This is a placeholder gallery. Connect your Instagram account to show real-time posts from your salon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
