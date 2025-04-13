
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Laptop, PenTool, Settings, Terminal, Wrench } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
  category: string;
  icon?: React.ComponentType;
}

const skillsData: SkillProps[] = [
  // Technical Skills
  { name: "Industrial PCB Design", level: 95, category: "Technical", icon: PenTool },
  { name: "MATLAB/Simulink", level: 90, category: "Technical", icon: Code },
  { name: "ANSYS", level: 85, category: "Technical", icon: Laptop },
  { name: "Altium Designer", level: 90, category: "Technical", icon: Terminal },
  { name: "IoT Platforms", level: 90, category: "Technical", icon: Database },
  { name: "AWS IoT Core", level: 85, category: "Technical", icon: Settings },
  { name: "NodeMCU Programming", level: 80, category: "Technical", icon: Wrench },
  
  // Engineering
  { name: "Power Systems", level: 95, category: "Engineering" },
  { name: "HV/LV Design", level: 90, category: "Engineering" },
  { name: "Automation & Control", level: 90, category: "Engineering" },
  { name: "MEMS Sensors", level: 85, category: "Engineering" },
  { name: "Functional Safety", level: 85, category: "Engineering" },
  { name: "SCADA Systems", level: 85, category: "Engineering" },
  { name: "IEC Standards Compliance", level: 90, category: "Engineering" },
  
  // Project Management
  { name: "R&D Project Leadership", level: 85, category: "Management" },
  { name: "Team Mentoring", level: 80, category: "Management" },
  { name: "Technical Documentation", level: 85, category: "Management" },
  { name: "IEC Standards", level: 90, category: "Management" },
  { name: "ISO Compliance", level: 85, category: "Management" },
  { name: "Stakeholder Communication", level: 85, category: "Management" }
];

const categories = ["Technical", "Engineering", "Management"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over a decade of experience spanning industrial automation, power systems, and IoT technologies,
            here's a comprehensive breakdown of my technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category} className="animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">{category}</h3>
                <div className="space-y-6">
                  {skillsData
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="flex items-center space-x-4">
                        {skill.icon && (
                          <div className="text-primary/70">
                            <skill.icon className="w-5 h-5" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

