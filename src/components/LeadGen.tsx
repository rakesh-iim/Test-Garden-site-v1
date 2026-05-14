import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const LeadGen = ({ simplified = false }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;
    const service = formData.get('service') as string;
    
    const newErrors: Record<string, string> = {};
    if (!firstName?.trim()) newErrors.firstName = 'Required';
    if (!lastName?.trim()) newErrors.lastName = 'Required';
    if (!email?.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setStatus('submitting');
    
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        name: `${firstName} ${lastName}`.trim(),
        email: email.trim(),
        phone: phone ? phone.trim() : null,
        message: message ? message.trim() : (service ? `Interested in: ${service}` : null),
        createdAt: serverTimestamp()
      });
      
      setStatus('success');
      
      setTimeout(() => {
        setStatus('idle');
        form.reset();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('idle');
    }
  };

  const isDisabled = status !== 'idle';

  return (
    <section className="py-24 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Start Your Project Today</h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg font-medium">
            Ready to bring breathing room and lush vitality to your landscape? Our design team is ready to consult with you.
          </p>
          <motion.ul 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {}
            }}
            className="space-y-6"
          >
            {[
              "Customized Design Plans",
              "Professional Execution",
              "Ongoing Maintenance Options"
            ].map((text) => (
              <motion.li 
                key={text} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-4 group"
              >
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-primary-fixed transition-colors">
                  <CheckCircle2 className="text-primary-fixed w-6 h-6" />
                </div>
                <span className="text-lg font-semibold">{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-surface rounded-3xl p-10 ambient-shadow text-on-surface relative overflow-hidden"
        >
          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 w-full bg-primary-container text-white p-4 text-center font-bold shadow-md z-10 flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-fixed" />
                Request received! We'll be in touch shortly.
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                  {errors.firstName && <span className="text-xs text-red-500 font-bold">{errors.firstName}</span>}
                </div>
                <input 
                  type="text" 
                  name="firstName"
                  disabled={isDisabled}
                  placeholder="Jane" 
                  className={`w-full bg-surface-container-low border-b-2 ${errors.firstName ? 'border-red-500' : 'border-secondary focus:border-primary-container'} px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                  {errors.lastName && <span className="text-xs text-red-500 font-bold">{errors.lastName}</span>}
                </div>
                <input 
                  type="text" 
                  name="lastName"
                  disabled={isDisabled}
                  placeholder="Doe" 
                  className={`w-full bg-surface-container-low border-b-2 ${errors.lastName ? 'border-red-500' : 'border-secondary focus:border-primary-container'} px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  {errors.email && <span className="text-xs text-red-500 font-bold">{errors.email}</span>}
                </div>
                <input 
                  type="email" 
                  name="email"
                  disabled={isDisabled}
                  placeholder="jane@example.com" 
                  className={`w-full bg-surface-container-low border-b-2 ${errors.email ? 'border-red-500' : 'border-secondary focus:border-primary-container'} px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Phone (Optional)</label>
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  disabled={isDisabled}
                  placeholder="(555) 555-5555" 
                  className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Service of Interest</label>
              <select 
                name="service"
                disabled={isDisabled}
                className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="Garden Design">Garden Design</option>
                <option value="Lawn Care">Lawn Care</option>
                <option value="Hardscaping">Hardscaping</option>
                <option value="Seasonal Cleanup">Seasonal Cleanup</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            
            {!simplified && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message (Optional)</label>
                <textarea 
                  name="message"
                  disabled={isDisabled}
                  placeholder="Tell us a bit about your project..." 
                  rows={3}
                  className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                />
              </div>
            )}

            <button 
              type="submit"
              disabled={isDisabled}
              className="w-full bg-primary-container text-on-primary font-bold py-5 rounded-full hover-lift shadow-xl text-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex justify-center items-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Sent
                </>
              ) : (
                'Request Consultation'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
