import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingContact = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-2 p-0">
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-white p-2 rounded-l-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-x-1 transition-transform border border-r-0 border-gray-100 flex items-center justify-center"
      >
        <div className="w-[38px] h-[38px] bg-[#25D366] rounded-md flex items-center justify-center text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0117 2.00018C6.49503 2.00018 2.00391 6.4913 2.00391 12.0079C2.00391 13.7719 2.46328 15.4385 3.26629 16.9015L2.00391 22.0002L7.23438 20.7378C8.65345 21.4883 10.281 21.9168 12.0117 21.9168C17.5284 21.9168 22.0195 17.4257 22.0195 11.909C22.0195 6.3923 17.5284 1.90118 12.0117 2.00018ZM17.4648 16.2941C17.2359 16.9388 16.3262 17.4842 15.617 17.6253C15.127 17.7259 14.4178 17.8105 11.7588 16.71C8.35414 15.3032 6.16273 11.8398 6.00773 11.6353C5.85273 11.4308 4.70773 9.90793 4.70773 8.32168C4.70773 6.73543 5.51811 5.96668 5.84936 5.62793C6.11711 5.35268 6.55403 5.23268 6.96986 5.23268C7.10391 5.23268 7.22391 5.23968 7.33678 5.24668C7.65403 5.26068 7.81628 5.28168 8.02773 5.78968C8.28873 6.42468 8.92373 7.97743 8.99423 8.12543C9.07173 8.27343 9.15623 8.48518 9.04348 8.70368C8.93773 8.92218 8.84628 9.02093 8.68403 9.20418C8.52178 9.38743 8.36678 9.53543 8.20453 9.73993C8.04953 9.92318 7.88048 10.1277 8.06373 10.4449C8.24698 10.7552 8.92373 11.8554 9.91773 12.7437C11.2007 13.8932 12.237 14.2527 12.5895 14.3937C12.8573 14.5064 13.1745 14.4782 13.3718 14.2667C13.6185 14.0057 13.9215 13.5474 14.2388 13.0892C14.4645 12.7504 14.7745 12.7082 15.0565 12.8139C15.3525 12.9267 16.9178 13.6952 17.228 13.8504C17.5383 14.0057 17.75 14.0762 17.8275 14.2172C17.905 14.3582 17.905 15.0069 17.651 15.6557L17.4648 16.2941Z"/>
          </svg>
        </div>
      </a>
      <a 
        href="tel:+1234567890" 
        className="bg-white p-2 rounded-l-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:-translate-x-1 transition-transform border border-r-0 border-gray-100 flex items-center justify-center"
      >
        <div className="w-[38px] h-[38px] bg-black rounded-md flex items-center justify-center text-white">
          <Phone size={18} fill="currentColor" />
        </div>
      </a>
    </div>
  );
};
