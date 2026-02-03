import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CartSheet = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const navigate = useNavigate();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({
    name: '', email: '', phone: '', address: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    try {
      const orderData = {
        customer_name: checkoutForm.name,
        customer_email: checkoutForm.email,
        customer_phone: checkoutForm.phone,
        shipping_address: checkoutForm.address,
        items: cart.map(item => ({
          product_id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: cartTotal
      };

      const response = await axios.post(`${API}/orders`, orderData);
      await axios.post(`${API}/orders/${response.data.id}/mock-payment`);
      
      toast.success("Order placed successfully! (MOCK PAYMENT)");
      clearCart();
      setCheckoutOpen(false);
      setIsCartOpen(false);
    } catch (error) {
      toast.error("Failed to process order");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent data-testid="cart-sheet" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-heading text-2xl text-royal-purple-500">Your Cart</SheetTitle>
        </SheetHeader>
        
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <Button 
              onClick={() => { setIsCartOpen(false); navigate('/shop'); }}
              className="mt-4 bg-royal-purple-500 hover:bg-royal-purple-600"
            >
              Browse Products
            </Button>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.map(item => (
                <div key={item.id} data-testid={`cart-item-${item.id}`} className="flex gap-4 p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={item.image_url} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-champagne-gold-600 font-semibold">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto p-1 text-red-500 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-champagne-gold-600">${cartTotal.toFixed(2)}</span>
              </div>
              
              <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
                <DialogTrigger asChild>
                  <Button 
                    data-testid="checkout-button"
                    className="w-full bg-champagne-gold-500 hover:bg-champagne-gold-600 text-white py-6"
                  >
                    Checkout with PayPal (MOCK)
                  </Button>
                </DialogTrigger>
                <DialogContent data-testid="checkout-dialog" className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl text-royal-purple-500">Checkout</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div>
                      <Label htmlFor="checkout-name">Full Name</Label>
                      <Input 
                        id="checkout-name"
                        data-testid="checkout-name"
                        value={checkoutForm.name}
                        onChange={e => setCheckoutForm({...checkoutForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout-email">Email</Label>
                      <Input 
                        id="checkout-email"
                        type="email"
                        data-testid="checkout-email"
                        value={checkoutForm.email}
                        onChange={e => setCheckoutForm({...checkoutForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout-phone">Phone</Label>
                      <Input 
                        id="checkout-phone"
                        data-testid="checkout-phone"
                        value={checkoutForm.phone}
                        onChange={e => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout-address">Shipping Address</Label>
                      <Textarea 
                        id="checkout-address"
                        data-testid="checkout-address"
                        value={checkoutForm.address}
                        onChange={e => setCheckoutForm({...checkoutForm, address: e.target.value})}
                        required
                      />
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded text-sm text-yellow-800">
                      <strong>Note:</strong> This is a MOCK PayPal checkout for demonstration purposes.
                    </div>
                    <Button 
                      type="submit" 
                      data-testid="place-order-button"
                      className="w-full bg-[#0070BA] hover:bg-[#003087] text-white py-6"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)} with PayPal`}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
