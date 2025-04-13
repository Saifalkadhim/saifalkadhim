
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-white to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-3">Hi, I'm Saif Aldeen Saad</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Electrical Engineer</span>
            <span className="block mt-2 text-gray-700">Power Systems & IoT Innovator</span>
          </h1>
          <p className="text-gray-600 max-w-lg text-lg md:text-xl mb-8">
            Bridging advanced R&D and industrial applications with expertise in MEMS, IoT sensor technologies, and multi-million dollar project leadership across automotive and smart building domains.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild className="px-8">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="px-8">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-gray-500 hover:text-primary transition-colors">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
