import React, { useState } from 'react';
import { CheckCircle, Mail, Send } from 'lucide-react';

const Support = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
      setName('');
      setMessage('');
    }, 1000);
  };
  
  return (
    <section id="support" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Transition</h2>
          <p className="max-w-3xl mx-auto opacity-80">
            Join us in this transformative journey as we evolve from a college to a prestigious university. Your support can make a significant difference.
          </p>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Ways You Can Support</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Financial Contributions</h4>
                  <p className="opacity-80">
                    Your donations will help expand our infrastructure, enhance research facilities, and provide scholarships to deserving students.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Academic Partnerships</h4>
                  <p className="opacity-80">
                    Collaborate with us for research initiatives, student exchange programs, and curriculum development to enhance our academic offerings.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Alumni Engagement</h4>
                  <p className="opacity-80">
                    As alumni, your involvement through mentorship, guest lectures, and networking opportunities can significantly impact our students.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <CheckCircle size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Advocacy & Awareness</h4>
                  <p className="opacity-80">
                    Help spread the word about our journey to university status through your networks and social media platforms.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a 
                href="#"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-6 py-3 rounded-md transition-colors duration-300"
              >
                Donate Now
              </a>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Get Involved</h3>
            
            {submitted ? (
              <div className="text-center py-10">
                <div className="inline-block p-3 bg-green-100 text-green-500 rounded-full mb-4">
                  <CheckCircle size={48} />
                </div>
                <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  Your message has been received. We appreciate your interest in supporting our journey to university status. Our team will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">How would you like to help?</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="Tell us how you'd like to contribute to our university journey"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message <Send size={16} className="ml-2" />
                </button>
              </form>
            )}
            
            <div className="text-center mt-6">
              <p className="text-gray-600">Prefer to email us directly?</p>
              <a 
                href="mailto:info@campustouniversity.edu"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mt-1"
              >
                <Mail size={16} className="mr-2" /> info@campustouniversity.edu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;