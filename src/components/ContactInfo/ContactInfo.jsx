import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactInfoItems = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: 'Find Us',
    subtitle: 'Street # 123, abcroad,city',
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: 'Call Us',
    subtitle: '+923000000000',
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    title: 'Mail Us',
    subtitle: 'abc@info.com',
  },
];

const ContactInfo = () => {
  return (
    <div className="w-full bg-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {ContactInfoItems.map((item) => (
          <div key={item.id} className="flex items-center justify-center md:justify-start gap-6">
            {/* Icon */}
            <div className="text-cyan-400 text-5xl">
              {item.icon}
            </div>
            
            {/* Text */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-black">{item.title}</h3>
              <p className="text-gray-700 font-medium">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
