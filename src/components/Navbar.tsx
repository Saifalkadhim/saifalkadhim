
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#hero" className="text-primary font-bold text-xl">
              DevPortfolio
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#projects" className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-md transition-colors">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-md transition-colors">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-md transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-white/95 backdrop-blur-md absolute w-full",
        isOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-gray-200">
          <a 
            href="#projects" 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a 
            href="#skills" 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>
          <a 
            href="#contact" 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
