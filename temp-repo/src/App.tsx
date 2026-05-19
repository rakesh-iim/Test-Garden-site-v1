import React from 'react';
import ServiceBooking from './components/ServiceBooking';
import { Ruler, Sparkles, Scissors, Droplet, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-stone-200">
      {/* 
        Header simulating a typical brand navigation 
      */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="font-serif text-xl tracking-tight text-stone-900">BrandLogo</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
            <a href="#" className="hover:text-stone-900 transition-colors">Products</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Curtains</a>
            <a href="#" className="text-stone-900 font-semibold border-b-2 border-stone-900 pb-1">Our Services</a>
            <a href="#" className="hover:text-stone-900 transition-colors">About Us</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-stone-600 hover:text-stone-900">Sign In</button>
          </div>
        </div>
      </header>

      {/* Main Product Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Product Information */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="text-sm font-medium text-amber-700 tracking-wider uppercase mb-3">Premium Service</div>
              <h1 className="text-4xl sm:text-5xl font-serif text-stone-900 leading-tight mb-6">
                Expert Measurement & Consultation.
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                Don't leave your perfect home to chance. Our dedicated styling experts and technicians will visit your home, ensure flawless measurements, and guide you through selecting the ideal fabrics and treatments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Ruler className="w-6 h-6 text-stone-900" />,
                  title: "Precision Measurement",
                  description: "Millimeter-perfect measurements taking into account your specific window frames and floor clearance."
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-stone-900" />,
                  title: "Styling Consultation",
                  description: "Our experts bring fabric swatches and help you visualize the perfect look for your living space."
                },
                {
                  icon: <Scissors className="w-6 h-6 text-stone-900" />,
                  title: "Custom Manufacturing",
                  description: "Every product is tailored specifically to your home's unique dimensions."
                },
                {
                  icon: <Droplet className="w-6 h-6 text-stone-900" />,
                  title: "Fabric Matching",
                  description: "We match curtains with your existing upholstery, wall color, and lighting."
                }
              ].map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-stone-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="prose prose-stone">
              <h3 className="text-2xl font-serif text-stone-900 mb-4">How it works</h3>
              <ol className="space-y-4 text-stone-600 text-sm">
                <li className="flex">
                  <span className="font-medium text-stone-900 mr-2">1.</span>
                  Book an appointment using the form.
                </li>
                <li className="flex">
                  <span className="font-medium text-stone-900 mr-2">2.</span>
                  Our representative will call you to confirm your requirements.
                </li>
                <li className="flex">
                  <span className="font-medium text-stone-900 mr-2">3.</span>
                  Expert visits your home on the scheduled date and time.
                </li>
                <li className="flex">
                  <span className="font-medium text-stone-900 mr-2">4.</span>
                  Get a personalized quotation within 24 hours of the visit.
                </li>
                <li className="flex">
                  <span className="font-medium text-stone-900 mr-2">5.</span>
                  Consultation fee is 100% adjusted against your final order!
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column - Booking Component Widget */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <ServiceBooking 
                price={499} 
                className="w-full"
                onSuccess={(data) => {
                  console.log("Successfully booked!", data);
                }} 
              />
              <div className="mt-6 flex items-center justify-center space-x-4 text-xs font-medium text-stone-400">
                <span className="flex items-center"><CheckCircle2 className="w-3 h-3 mr-1 text-green-500" /> Secure Payment</span>
                <span className="flex items-center"><CheckCircle2 className="w-3 h-3 mr-1 text-green-500" /> Free Rescheduling</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
