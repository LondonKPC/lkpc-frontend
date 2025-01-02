import React from 'react';

const Contact = () => {
  return (
    <div className="w-full min-h-full lg:full bg-white flex flex-col items-center">
      <div className="w-[95%] bg-[#3c98bd] mt-16 border-solid border-4 border-black">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12368.291131761114!2d-81.32164932840173!3d42.988210509180796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef017ef815c35%3A0xbebac0814ea204b3!2sGateway%20Church!5e0!3m2!1sen!2sca!4v1735675865678!5m2!1sen!2sca" 
          className="w-full h-[50vh]" 
          loading="lazy"
        ></iframe>
        <div className="p-4">
          <p className="text-black text-lg text-center">
            This is our location. Feel free to visit us during our service hours.
          </p>
        </div>
      </div>
      <div className="mt-8 w-[30%]">
        <p className="text-[#3a719e] text-2xl">
          Email
        </p>
        <p className="text-black text-lg">
          Contact us at info@example.com for more details.
        </p>
      </div>
      <div className="mt-8 w-[30%]">
        <p className="text-[#3a719e] text-2xl py-2">
          Phone
        </p>
        <p className="text-black text-lg">
          Call xxx-xxx-xxxx for more details.
          or
          Call xxx-xxx-xxxx for more details.
        </p>
      </div>
    </div>
  );
}

export default Contact;
