import React, { useState } from "react";

// Define a type for the possible active skills to ensure type safety
type SkillCategory = 'Front-End' | 'Back-End' | 'Herramientas' | 'Habilidades';

const Skill: React.FC = () => {
  // Use state to keep track of the currently active skill category.
  // We'll initialize it to 'Front-End'.
  const [activeSkill, setActiveSkill] = useState<SkillCategory>('Front-End');

  // Define the base and active classes for reusability and clarity.

  // The base classes for all non-active items
  const baseClasses = `
    font-bold text-white/90 hover:text-white transition-all  px-6 py-3 rounded-lg
    hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20
    hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:[text-shadow:0_0_10px_rgba(168,85,247,0.9)]
    border border-transparent hover:border-purple-500/50
  `;

  // The specific classes for the active item
  const activeClasses = `
    bg-gradient-to-r from-purple-600/20 to-indigo-600/20
    shadow-[0_0_12px_#9333ea] [text-shadow:0_0_10px_rgba(168,85,247,0.9)]
    border border-purple-500/50
  `;

  // Function to handle the click event and update the active skill
  const handleSkillClick = (skill: SkillCategory) => {
    setActiveSkill(skill);
  };

  // Helper function to dynamically generate the class name
  const getSkillClasses = (skill: SkillCategory) => {
    // Check if the current skill is the active one
    const isActive = activeSkill === skill;

    // Apply the active classes if true, otherwise apply the base classes
    // We combine the base classes with the active classes to ensure
    // common styles like font-bold, text-white/90, and px-6 py-3 are always present.
    const commonClasses = "font-bold text-white/90 transition-all duration-300 px-6 py-3 rounded-lg";

    return `${commonClasses} ${isActive ? activeClasses : baseClasses}`;
  };

  return (
    <div>
      <header>
        <ul className="flex justify-center gap-2 mt-6">
          {/* Front-End */}
          <li className="cursor-pointer group" onClick={() => handleSkillClick('Front-End')}>
            <h2 className={getSkillClasses('Front-End')}>
              Front-End
            </h2>
          </li>

          {/* Back-End */}
          <li className="cursor-pointer group" onClick={() => handleSkillClick('Back-End')}>
            <h2 className={getSkillClasses('Back-End')}>
              Back-End
            </h2>
          </li>

          {/* Herramientas */}
          <li className="cursor-pointer group" onClick={() => handleSkillClick('Herramientas')}>
            <h2 className={getSkillClasses('Herramientas')}>
              Herramientas
            </h2>
          </li>

          {/* Habilidades */}
          <li className="cursor-pointer group" onClick={() => handleSkillClick('Habilidades')}>
            <h2 className={getSkillClasses('Habilidades')}>
              Habilidades
            </h2>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Skill;