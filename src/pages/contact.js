import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Check In:', checkIn);
    console.log('Check Out:', checkOut);
    console.log('Message:', message);
    // TODO: Send email with information and auto response to customer
  };

  return (
    <div className="flex justify-center">
      <div className="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div>
          <div>
            <h2 className="text-3xl font- sm:text-4xl">Get in touch</h2>
            <p className="mt-4 text-lg text-gray-500">
              Fill in the form below to send us a message and we&#39;ll get back
              to you as soon as possible!
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-4 "
            >
              <div className="col-span-2">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  className="w-full shadow-sm py-2 px-4 border-gray-300 rounded-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full shadow-sm py-2 px-4 border-gray-300 rounded-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-span-2 flex justify-content">
                <label htmlFor="checkIn" className="">
                  Check In:
                </label>
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  className="block shadow-sm mx-4 px-2 max-h-8 placeholder-gray-700 rounded-sm text-black"
                  placeholder="Desired checkIn of stay"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="col-span-2 flex justify-content">
                <label htmlFor="checkOut">Check Out:</label>
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  className="block shadow-sm mx-4 px-2 max-h-8 placeholder-gray-700 rounded-sm text-black"
                  placeholder="Check In"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="col-span-4">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full shadow-sm py-2 px-4 border-gray-300 rounded-sm"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
