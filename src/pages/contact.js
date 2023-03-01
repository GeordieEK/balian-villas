import { useState } from 'react';
import { resolve } from 'styled-jsx/css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');
    let data = {
      name,
      email,
      checkIn,
      checkOut,
      message,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        // setSubmitted(true);
        setName('');
        setEmail('');
        setCheckIn('');
        setCheckOut('');
        setMessage('');
      }
    });
  };

  return (
    <div className="py-16 px-12 sm:px-20 md:mx-32 lg:mx-56">
      <h2 className="text-center text-3xl sm:text-4xl mt-4">Get in touch</h2>
      <p className="mt-4 text-center text-md md:text-lg">
        Fill in the form below to send us a message and we&#39;ll get back to
        you as soon as possible!
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 "
      >
        <div>
          <label htmlFor="name:" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            className="w-full shadow-sm py-2 px-4 border-gray-300 rounded-md text-black"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full shadow-sm py-2 px-4 border-gray-300 rounded-md text-black"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <label htmlFor="checkIn">Check In:</label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            className="shadow-sm ml-4 px-2 placeholder-gray-700 rounded-md text-black"
            placeholder="Check-In"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <label htmlFor="checkOut">Check Out:</label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            className=" shadow-sm ml-4 px-2 placeholder-gray-700 rounded-md text-black"
            placeholder="Check In"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full shadow-sm py-2 px-4 border-gray-300 rounded-md text-black"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-center md:col-span-2">
          <button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="w-24 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
