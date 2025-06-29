import React from 'react';

// A placeholder icon component.
const MapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 mr-2"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// --- Form Component (Dark Theme) ---
const ContactForm = () => {
    // A reusable input component for the form for cleaner code
    const FormInput = ({ id, label, type = "text", required = false, children }: { id: string, label: string, type?: string, required?: boolean, children?: React.ReactNode }) => (
        <div className={type === 'textarea' ? 'md:col-span-2' : ''}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-400">
                {required && <span className="text-red-500 mr-1">*</span>}{label}
            </label>
            <div className="mt-1">
                {children ? (
                    children
                ) : (
                    <input
                        type={type}
                        name={id}
                        id={id}
                        className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white"
                    />
                )}
            </div>
        </div>
    );

    return (
        <section className="bg-gray-900 text-white py-16 sm:py-24 w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1 text-left">
                        <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
                        <p className="mt-4 text-lg text-gray-400">
                            Need more information? <br />
                            We will take approximately 3-5 working days to respond to your enquiry.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <form action="#" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
                            <FormInput id="enquiryType" label="Type of enquiry" required>
                                <select id="enquiryType" name="enquiryType" className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white">
                                    <option className="bg-gray-800">Select an enquiry type</option>
                                    <option className="bg-gray-800">General</option>
                                    <option className="bg-gray-800">Careers</option>
                                    <option className="bg-gray-800">Partnership</option>
                                </select>
                            </FormInput>
                            <div></div> {/* Spacer */}
                            <FormInput id="firstName" label="First Name" required />
                            <FormInput id="lastName" label="Last Name" required />
                            <FormInput id="email" label="Email Address" type="email" required />
                            <FormInput id="organisation" label="Organisation" />
                            <FormInput id="jobTitle" label="Job Title" />
                            <FormInput id="phoneNumber" label="Phone Number" />
                            <FormInput id="country" label="Country" required>
                               <select id="country" name="country" className="block w-full bg-transparent border-0 border-b border-gray-600 focus:ring-0 focus:border-white py-2 text-white">
                                    <option className="bg-gray-800">-Select-</option>
                                    <option className="bg-gray-800">United States</option>
                                    <option className="bg-gray-800">Canada</option>
                                    <option className="bg-gray-800">India</option>
                                    <option className="bg-gray-800">United Kingdom</option>
                                </select>
                            </FormInput>
                             <FormInput id="message" label="Message" type="textarea" required>
                                <textarea id="message" name="message" rows={4} className="block w-full bg-transparent border border-gray-600 focus:ring-0 focus:border-white p-2 text-white rounded-md"></textarea>
                            </FormInput>
                            <div className="md:col-span-2 space-y-5">
                                <div className="relative flex items-start">
                                    <div className="flex h-6 items-center">
                                        <input id="privacy" name="privacy" type="checkbox" className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <p className="text-gray-400">By clicking on the submit button, you agree with the <a href="#" className="font-medium text-white hover:underline">Privacy Policy</a>.</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start">
                                    <div className="flex h-6 items-center">
                                        <input id="subscribe" name="subscribe" type="checkbox" className="h-4 w-4 rounded border-gray-500 bg-gray-800 text-indigo-600 focus:ring-indigo-600" />
                                    </div>
                                    <div className="ml-3 text-sm leading-6">
                                        <p className="text-gray-400">Subscribe me to the latest updates on events, news and thought leadership from Tech Mahindra.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="inline-block rounded-md border border-white px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-gray-900 transition-colors">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default function App() {
  return (
    // Set the overall page background to white
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center font-sans">
      
      {/* --- White Section for Header and Map --- */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center p-4 sm:p-6 md:p-8">

        {/* --- Header Section --- */}
        <div className="mb-8 md:mb-12 w-full text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We would love to hear from you!
          </p>
        </div>

        {/* --- Google Map Section --- */}
        <div className="w-full h-[50vh] md:h-[65vh] bg-gray-200 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.234073289305!2d72.86450207519531!3d19.18614098702759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b2e2e2e2e3%3A0x123456789abcdef!2s12%2C%20Ground%20Floor%2C%20Dadi%20Building%2C%20Rani%20Sati%20Marg%2C%20Kathiyawadi%20Chowk%2C%20near%20Union%20Bank%2C%20Malad%20East%2C%20Mumbai%2C%20Maharashtra%20400097!5e0!3m2!1sen!2sin!4v1719372093826!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Mumbai Office"
          ></iframe>
        </div>
        
         {/* --- Info Footer --- */}
        <div className="my-8 md:my-12 text-center">
            <div className="flex flex-col items-center justify-center text-gray-500 space-y-2">
                <div className="flex items-center"><MapPin /><span>12, Ground Floor, Dadi Building, Rani Sati Marg, Kathiyawadi Chowk, near Union Bank, Malad East, Mumbai, Maharashtra 400097</span></div>
                <div className="flex items-center"><span className="font-semibold mr-2">Phone:</span> <span>+91-XXXXXXXXXX</span></div>
                <div className="flex items-center"><span className="font-semibold mr-2">Email:</span> <span>info@yourcompany.com</span></div>
                <div className="flex items-center"><span className="font-semibold mr-2">Google Maps:</span> <a href="https://g.co/kgs/8uxN7WU" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">View Location</a></div>
            </div>
        </div>

      </div>

      {/* --- Black Section for Contact Form --- */}
      <div className="w-full">
        <ContactForm />
      </div>

    </div>
  );
}
