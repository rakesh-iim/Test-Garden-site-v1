import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, MapPin, Home, CheckCircle2, ChevronRight, 
  Ruler, LayoutDashboard, Clock, FileText, IndianRupee 
} from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceBookingProps {
  onSuccess?: (data: any) => void;
  price?: number;
  currencySymbol?: string;
  className?: string;
}

const CITIES = [
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Delhi/NCR",
  "Mumbai",
  "Chennai"
];

const PROPERTY_TYPES = [
  "Apartment",
  "Independent House",
  "Villa",
  "Under Construction / Empty Shell",
  "Commercial / Office space"
];

const TIME_SLOTS = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM"
];

export default function ServiceBooking({ 
  onSuccess, 
  price = 499, 
  currencySymbol = "₹",
  className 
}: ServiceBookingProps) {
  const [formData, setFormData] = useState({
    city: '',
    propertyType: '',
    date: '',
    timeSlot: '',
    pincode: '',
    notes: '',
    name: '',
    phone: '',
    email: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCitySelect = (city: string) => {
    setFormData(prev => ({ ...prev, city }));
  };

  const isStep1Valid = formData.city !== '' && formData.propertyType !== '';
  const isStep2Valid = formData.date !== '' && formData.timeSlot !== '';
  const isStep3Valid = formData.name !== '' && formData.phone.length >= 10 && formData.pincode !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && isStep1Valid) {
      setStep(2);
      return;
    }
    if (step === 2 && isStep2Valid) {
      setStep(3);
      return;
    }
    if (step === 3 && isStep3Valid) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        if (onSuccess) {
          onSuccess(formData);
        }
      }, 1500);
    }
  };

  // Get minimum date for date picker (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <div className={cn("bg-white p-8 rounded-2xl shadow-sm border border-stone-200 text-center max-w-lg mx-auto", className)}>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex justify-center mb-6"
        >
          <div className="h-20 w-20 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle2 strokeWidth={1.5} className="w-10 h-10 text-green-600" />
          </div>
        </motion.div>
        <h3 className="text-2xl font-serif text-stone-900 mb-2">Booking Confirmed</h3>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          Thank you, {formData.name.split(' ')[0]}! Our experts will visit you on {new Date(formData.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })} between {formData.timeSlot}.
        </p>
        <div className="bg-stone-50 p-4 rounded-xl text-left border border-stone-100 mb-8 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Service</span>
            <span className="font-medium text-stone-900">Expert Home Consultation</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Location</span>
            <span className="font-medium text-stone-900">{formData.city}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-stone-500">Total Paid</span>
            <span className="font-medium text-stone-900">{currencySymbol}{price}</span>
          </div>
        </div>
        <button 
          onClick={() => {
            setStep(1);
            setIsSuccess(false);
            setFormData({ city: '', propertyType: '', date: '', timeSlot: '', pincode: '', notes: '', name: '', phone: '', email: '' });
          }}
          className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium h-12 rounded-lg transition-colors"
        >
          Book Another Service
        </button>
      </div>
    );
  }

  return (
    <div className={cn("bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden flex flex-col max-w-lg mx-auto", className)}>
      {/* Header */}
      <div className="bg-stone-50 p-6 border-b border-stone-100">
        <h2 className="text-xl font-serif text-stone-900">Expert Home Service</h2>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-medium text-stone-900">{currencySymbol}{price}</span>
          <span className="text-sm text-stone-500 line-through">{currencySymbol}999</span>
          <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">50% OFF</span>
        </div>
        <p className="text-sm text-stone-500 mt-2">Get precise measurements and personalized styling advice from our experts.</p>
        
        {/* Step Indicator */}
        <div className="flex items-center space-x-2 mt-6">
          <div className="flex-1 h-1 rounded-full bg-stone-900 transition-all duration-300"></div>
          <div className={cn("flex-1 h-1 rounded-full transition-all duration-300", step >= 2 ? "bg-stone-900" : "bg-stone-200")}></div>
          <div className={cn("flex-1 h-1 rounded-full transition-all duration-300", step >= 3 ? "bg-stone-900" : "bg-stone-200")}></div>
        </div>
        <div className="flex justify-between mt-2 text-xs font-medium text-stone-400">
          <span className="text-stone-900">Location</span>
          <span className={cn(step >= 2 && "text-stone-900")}>Schedule</span>
          <span className={cn(step >= 3 && "text-stone-900")}>Details</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col flex-1 relative">
        <AnimatePresence mode="wait">
          {/* STEP 1: LOCATION & PROPERTY */}
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-center"
            >
              <div className="space-y-3">
                <label className="text-sm font-medium text-stone-700 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-stone-400" />
                  Select your city
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {CITIES.map(city => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => handleCitySelect(city)}
                      className={cn(
                        "py-2.5 px-3 text-sm rounded-lg border text-center transition-all",
                        formData.city === city 
                          ? "border-stone-900 bg-stone-900 text-white shadow-md" 
                          : "border-stone-200 bg-white text-stone-600 hover:border-stone-400 hover:bg-stone-50"
                      )}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-stone-700 flex items-center">
                  <Home className="w-4 h-4 mr-2 text-stone-400" />
                  Property Type
                </label>
                <div className="relative">
                  <select 
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full appearance-none bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-shadow"
                  >
                    <option value="" disabled>Select property type</option>
                    {PROPERTY_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-center"
            >
              <div className="space-y-3">
                <label className="text-sm font-medium text-stone-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-stone-400" />
                  Preferred Date
                </label>
                <input 
                  type="date" 
                  name="date"
                  min={minDate}
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-shadow"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-stone-700 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-stone-400" />
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {TIME_SLOTS.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                      className={cn(
                        "py-3 px-4 text-sm rounded-lg border text-center transition-all",
                        formData.timeSlot === slot 
                          ? "border-stone-900 bg-stone-900 text-white shadow-md" 
                          : "border-stone-200 bg-white text-stone-600 hover:border-stone-400 hover:bg-stone-50"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: USER DETAILS */}
          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 flex-1 flex flex-col"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all placeholder:text-stone-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all placeholder:text-stone-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all placeholder:text-stone-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-stone-500 uppercase tracking-wider">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="560001"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all placeholder:text-stone-300"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-stone-500 uppercase tracking-wider flex items-center">
                  <FileText className="w-3 h-3 mr-1.5" />
                  Notes / Address (Optional)
                </label>
                <textarea
                  name="notes"
                  placeholder="Any specific requirements or complete address details..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full bg-stone-50/50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all placeholder:text-stone-300 resize-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation & Submit */}
        <div className="mt-8 flex justify-between items-center gap-4">
          {step > 1 && step <= 3 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Back
            </button>
          )}
          
          <button
            type="submit"
            disabled={
              (step === 1 && !isStep1Valid) || 
              (step === 2 && !isStep2Valid) || 
              (step === 3 && !isStep3Valid) ||
              isSubmitting
            }
            className={cn(
              "flex items-center justify-center h-12 px-8 rounded-lg font-medium text-sm transition-all flex-1",
              step === 1 && !isStep1Valid || step === 2 && !isStep2Valid || step === 3 && !isStep3Valid || isSubmitting
                ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                : "bg-stone-900 text-white hover:bg-stone-800 shadow-md hover:shadow-lg active:scale-[0.98]",
              step === 1 && "ml-auto"
            )}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : step === 3 ? (
              <span className="flex items-center">
                Confirm & Pay {currencySymbol}{price}
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </span>
            ) : (
              <span className="flex items-center">
                Continue
                <ChevronRight className="w-4 h-4 ml-1.5" />
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
