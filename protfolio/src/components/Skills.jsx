import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Use a more stable import path for Devicons (Di)
import { 
  DiReact, DiNodejsSmall, DiMongodb, DiMysql, DiJsBadge, 
  DiHtml5, DiCss3, DiPython, DiPhp, DiJava, DiGit, 
  DiTerminal, DiVisualstudio, DiBootstrap, DiCodeBadge, DiCode
} from 'react-icons/di';

// Use Simple Icons (Si) for platforms and services like Vercel/Netlify/Postman
import { SiVercel, SiNetlify, SiPostman } from 'react-icons/si';

// Use Font Awesome (Fa) for general concepts like DSA and Fallback
import { FaLaptopCode, FaCheck } from 'react-icons/fa'; 

// --- Skill-to-Icon Mapping Function ---
const getSkillIcon = (skillName) => {
  const iconProps = { size: 24, className: "me-2 text-primary" };
  const normalizedName = skillName.toLowerCase().replace(/[.\s\(\)\/+-]/g, ''); 

  switch (normalizedName) {
    case 'reactjs': return <DiReact {...iconProps} />;
    case 'nodejs': return <DiNodejsSmall {...iconProps} />;
    case 'expressjs': return <DiTerminal {...iconProps} />; 
    case 'nextjs': return <DiCodeBadge {...iconProps} />; 
    case 'bootstrap': return <DiBootstrap {...iconProps} />;
    case 'restfulapis': return <DiCode {...iconProps} />;
    
    case 'javascriptes6': return <DiJsBadge {...iconProps} />;
    case 'html5css3': return <DiHtml5 {...iconProps} />;
    case 'c': return <DiCode {...iconProps} />;
    case 'php': return <DiPhp {...iconProps} />;
    case 'python': return <DiPython {...iconProps} />;
    case 'java': return <DiJava {...iconProps} />;
    case 'dsa': return <FaLaptopCode {...iconProps} />; 
    case 'mernstack': return <FaLaptopCode {...iconProps} />; 
    
    case 'mongodb': return <DiMongodb {...iconProps} />;
    case 'mysql': return <DiMysql {...iconProps} />;
    
    case 'gitgithub': return <DiGit {...iconProps} />;
    case 'vscode': return <DiVisualstudio {...iconProps} />;
    // Using SiPostman (Simple Icons) instead of DiTerminal for better representation
    case 'postman': return <SiPostman {...iconProps} />; 
    // Using SiVercel (Simple Icons) as a representative icon for deployment platforms
    case 'netlifyvercelrender': return <SiVercel {...iconProps} />; 
    
    default: return <FaCheck {...iconProps} />;
  }
};

const coreSkills = [
  { 
    category: "Frameworks & Libraries", 
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "Bootstrap", "RESTful APIs"] 
  },
  { 
    category: "Languages & Concepts", 
    skills: ["JavaScript (ES6+)", "HTML5 / CSS3", "C", "Python", "PHP", "Java", "DSA", "MERN Stack"] 
  },
  { 
    category: "Databases", 
    skills: ["MongoDB", "MySQL"] 
  },
  { 
    category: "Tools & Platforms", 
    skills: ["Git / GitHub", "VS Code", "Postman", "Netlify / Vercel / Render"] 
  },
];

const Skills = () => {
  return (
    <section className="py-5 py-md-5 bg-light"> 
      <Container>
        <h2 className="text-center mb-5">Technical Skills</h2>
        
        <Row className="justify-content-center">
          {coreSkills.map((skillGroup, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary mb-3 fw-bold">{skillGroup.category}</Card.Title>
                  
                  <ul className="list-unstyled">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="d-flex align-items-center mb-2">
                        {getSkillIcon(skill)} 
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;