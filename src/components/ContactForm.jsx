import React, { useState } from 'react';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import { db, realtimeDb } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, push, set } from 'firebase/database';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Firestore
      const docRef = await addDoc(collection(db, 'contactForms'), {
        ...formData,
        timestamp: new Date(),
      });
      console.log('Firestore document written with ID:', docRef.id);

      // 2. Realtime Database
      const contactFormRef = ref(realtimeDb, 'contactForms');
      const newContactFormRef = push(contactFormRef);
      await set(newContactFormRef, {
        ...formData,
        timestamp: new Date().toISOString(),
      });
      console.log('Realtime DB data saved with key:', newContactFormRef.key);

      alert('Message Sent Successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission failed:', error);
      alert('Submission Failed: ' + error.message);
    }
  };

  return (
    <div className="bg-white">
      {/* DESKTOP VIEW */}
      <div className="hidden md:block p-8 lg:p-12 2xl:p-16 pt-16 mt-20 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">
            Contact our <span className="text-[#00B4D9]">Team</span>
          </h1>
          <p className="text-gray-500 mt-8">Any questions or remarks? Just leave a message!</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="md:w-2/5 p-4">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-bold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-bold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold">Country & Phone Number</label>
                <div className="flex space-x-2">
                  <select className="p-2 border rounded">
                    <option>IND</option>
                  </select>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="flex-1 p-2 border rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Leave a message"
                  className="w-full p-2 border rounded h-24"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full p-2 text-white rounded"
                style={{ background: 'linear-gradient(135deg, #0078B4 0%, #00B4D9 100%)' }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="ml-12 p-4">
            <h2 className="text-2xl font-semibold">Chat with us</h2>
            <p className="text-gray-500 mt-2">Speak to our friendly team via live chat</p>
            <ul className="mt-4 space-y-2">
              {/* uncomment "Start a live chat" if you add chat */}
              <li className="flex items-center">
                <img src={icon2} alt="Email" className="mr-2 w-5 h-5" />
                <a href="mailto:azhizensolutions@gmail.com" className="underline text-base">
                  Shoot us on Email
                </a>
              </li>
              <li className="flex items-center">
                <img src={icon3} alt="LinkedIn" className="mr-2 w-5 h-5" />
                <a href="https://www.linkedin.com/company/azhizensolutions/" target="_blank" rel="noopener noreferrer" className="underline text-base">
                  Message us on LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <img src={icon4} alt="Instagram" className="mr-2 w-5 h-5" />
                <a href="https://www.instagram.com/azhizensolutions" target="_blank" rel="noopener noreferrer" className="underline text-base">
                  Message us on Instagram
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Call us</h2>
            <p className="text-gray-500 mt-2">Mon–Fri, 8 AM to 6 PM</p>
            {[ '+919750603988', '+917010682506' ].map((phone) => (
              <li key={phone} className="flex items-center mt-2">
                <img src={icon6} alt="Phone" className="mr-2 w-5 h-5" />
                <a href={`tel:${phone}`} className="underline text-base">{phone}</a>
              </li>
            ))}

            <h2 className="text-2xl font-semibold mt-6">Visit us</h2>
            <p className="text-gray-500 mt-2">Chat in person at our company</p>
            <li className="flex items-center mt-2">
              <img src={icon5} alt="Location" className="mr-2 w-5 h-5" />
              <a
                href="https://www.google.com/maps/place/Azhizen+Solutions+Pvt+Ltd."
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-base"
              >
                Tiruchengode, Namakkal
              </a>
            </li>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="block md:hidden p-4 bg-white rounded shadow mt-28 max-w-md mx-auto">
        <h2 className="text-center text-xl font-bold mb-6">
          Contact Our <span className="text-[#00B4D9]">Team</span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['firstName', 'lastName'].map((field) => (
              <div key={field}>
                <label className="block text-xs font-bold">
                  {field === 'firstName' ? 'First Name' : 'Last Name'}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded text-sm"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-xs font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded text-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold">Country & Phone Number</label>
            <div className="flex gap-2">
              <select className="p-2 border rounded text-sm">
                <option>IND</option>
              </select>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="flex-1 p-2 border rounded text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a message"
              className="w-full p-2 border rounded h-24 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 text-white rounded text-sm"
            style={{ background: 'linear-gradient(135deg, #0078B4 0%, #00B4D9 100%)' }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
