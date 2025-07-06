import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isComplete = form.name && form.email && form.message;

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${form.name}!`);
  };

  return (
    // Outer full-width white background with flex centering
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Centered content wrapper */}
      <div className="w-full max-w-2xl">
        {/* Heading and intro text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you've got a question about an order, need tech advice, or just want to say hello — our team is here for you. We aim to respond within 24 hours, Monday through Friday, 9am–6pm EST.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Your Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Your Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-800 mb-3">
              Message
            </label>
            <textarea
              rows={6}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:border-blue-500 transition resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={!isComplete}
              className={`px-16 py-6 rounded-2xl text-2xl font-semibold transition ${
                isComplete
                  ? 'bg-blue-800 hover:bg-blue-900 text-white'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;