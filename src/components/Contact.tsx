
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in discussing power systems, automation solutions, or potential collaborations? Feel free to reach out through the form below or via my contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg animate-fade-in">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
              <Mail />
            </div>
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <a href="mailto:saifaldeen.saad@ieee.org" className="text-gray-600 hover:text-primary">
              saifaldeen.saad@ieee.org
            </a>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
              <Linkedin />
            </div>
            <h3 className="text-lg font-medium mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/saif-aldeen-saad-obayes-al-kadhim-75b0b8354" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
              Connect on LinkedIn
            </a>
          </div>
          
          <div className="text-center p-6 bg-gray-50 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-4">
              <MapPin />
            </div>
            <h3 className="text-lg font-medium mb-2">Location</h3>
            <p className="text-gray-600">Xi'an, Shaanxi, China</p>
          </div>
        </div>
        
        <div className="animate-fade-in">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
