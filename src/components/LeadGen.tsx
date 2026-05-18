import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const LeadGen = ({ simplified = false }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || 'Terrace Transformation';

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: initialService,
    message: ''
  });

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'firstName' && !value.trim()) error = 'First name is required';
    if (name === 'lastName' && !value.trim()) error = 'Last name is required';
    if (name === 'email') {
      if (!value.trim()) error = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email address';
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    
    Object.entries(formValues).forEach(([key, val]) => {
      const value = val as string;
      newTouched[key] = true;
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setTouched(newTouched);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setStatus('submitting');
    
    try {
      const payload = {
        name: `${formValues.firstName} ${formValues.lastName}`.trim(),
        email: formValues.email.trim(),
        phone: formValues.phone.trim(),
        service: formValues.service,
        message: formValues.message.trim() || (formValues.service ? `Interested in: ${formValues.service}` : '')
      };

      const googleSheetUrl = (import.meta as any).env?.VITE_GOOGLE_SHEET_URL;

      if (googleSheetUrl) {
        // Send to Google Sheets via Google Apps Script
        await fetch(googleSheetUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } else {
        // Fallback to Firebase
        const submission: any = {
          name: payload.name,
          email: payload.email,
          createdAt: serverTimestamp()
        };
        if (payload.phone) submission.phone = payload.phone;
        if (payload.message) submission.message = payload.message;
        if (payload.service) submission.service = payload.service;
        
        await addDoc(collection(db, 'contact_submissions'), submission);
      }
      
      setStatus('success');
      
      setTimeout(() => {
        setStatus('idle');
        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: initialService,
          message: ''
        });
        setTouched({});
      }, 3000);
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('idle');
      setErrors({ form: 'An error occurred while submitting the form. Please try again.' });
    }
  };

  const isDisabled = status !== 'idle';

  return (
    <section id="book" className="py-24 bg-secondary text-white overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-surface z-20 flex flex-col items-center justify-center p-8 text-center rounded-3xl"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 150, damping: 12, delay: 0.1 }}
                  className="bg-primary/10 p-5 rounded-full mb-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-display font-bold text-on-surface mb-3"
                >
                  Request Received!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-on-surface-variant max-w-sm"
                >
                  Thank you! We've successfully received your information and will be in touch shortly to cultivate your project.
                </motion.p>
              </motion.div>
            )}
            
            {errors.form && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 w-full bg-red-500 text-white p-4 text-center font-bold shadow-md z-10 flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-5 h-5 text-white" />
                {errors.form}
              </motion.div>
            )}
          </AnimatePresence>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isDisabled}
                    placeholder="Aarav" 
                    className={`w-full bg-surface-container-low border-b-2 ${touched.firstName && errors.firstName ? 'border-red-500 bg-red-50/5 text-red-500 placeholder-red-300' : 'border-secondary focus:border-primary-container'} px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  <AnimatePresence>
                    {touched.firstName && errors.firstName && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-3.5 text-red-500"
                      >
                        <AlertCircle className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {touched.firstName && errors.firstName && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-red-500 font-bold mt-1"
                    >
                      {errors.firstName}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-2 relative">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isDisabled}
                    placeholder="Sharma" 
                    className={`w-full bg-surface-container-low border-b-2 ${touched.lastName && errors.lastName ? 'border-red-500 bg-red-50/5 text-red-500 placeholder-red-300' : 'border-secondary focus:border-primary-container'} px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  <AnimatePresence>
                    {touched.lastName && errors.lastName && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-3.5 text-red-500"
                      >
                        <AlertCircle className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {touched.lastName && errors.lastName && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-red-500 font-bold mt-1"
                    >
                      {errors.lastName}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isDisabled}
                    placeholder="aarav@example.com" 
                    className={`w-full bg-surface-container-low border-b-2 ${touched.email && errors.email ? 'border-red-500 bg-red-50/5 text-red-500 placeholder-red-300' : 'border-secondary focus:border-primary-container'} px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  />
                  <AnimatePresence>
                    {touched.email && errors.email && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-3.5 text-red-500"
                      >
                        <AlertCircle className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <AnimatePresence>
                  {touched.email && errors.email && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-red-500 font-bold mt-1"
                    >
                      {errors.email}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Phone (Optional)</label>
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isDisabled}
                  placeholder="+91 98765 43210" 
                  className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Service of Interest</label>
              <select 
                name="service"
                value={formValues.service}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isDisabled}
                className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="Terrace Transformation">Terrace Transformation</option>
                <option value="Balcony Makeover">Balcony Makeover</option>
                <option value="Penthouse Transformation">Penthouse Transformation</option>
                <option value="Institute Green Space">Institute Green Space</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </div>
            
            {!simplified && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Message (Optional)</label>
                <textarea 
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              className="relative overflow-hidden group w-full bg-primary-container text-on-primary font-bold py-5 rounded-full shadow-xl text-lg mt-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex justify-center items-center gap-2 border border-transparent transition-transform duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[0.5s] ease-[cubic-bezier(0.8,0,0.2,1)] z-0"></span>
              {status === 'submitting' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white group-hover:border-white/50 group-hover:border-t-primary-container rounded-full relative z-10 transition-colors duration-[0.5s]"
                  />
                  <span className="relative z-10 group-hover:text-primary-container transition-colors duration-[0.5s]">Sending...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 className="w-5 h-5 relative z-10 group-hover:text-primary-container transition-colors duration-[0.5s]" />
                  <span className="relative z-10 group-hover:text-primary-container transition-colors duration-[0.5s]">Sent</span>
                </>
              ) : (
                <span className="relative z-10 group-hover:text-primary-container transition-colors duration-[0.5s]">Request Consultation</span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
