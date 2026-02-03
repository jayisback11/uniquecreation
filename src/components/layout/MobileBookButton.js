import { Link } from "react-router-dom";

const MobileBookButton = () => {
  return (
    <div className="mobile-book-btn md:hidden">
      <Link 
        to="/booking"
        data-testid="mobile-book-button"
        className="block w-full bg-champagne-gold-500 text-white text-center py-4 font-medium tracking-wide hover:bg-champagne-gold-600 transition-colors"
      >
        BOOK YOUR APPOINTMENT
      </Link>
    </div>
  );
};

export default MobileBookButton;
