
import React, { useState } from 'react';
import { ExternalLink, Github, Cpu, ShoppingBag, Book, Briefcase } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface Project {
  title: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  description: string;
  tech: string[];
  codeSnippet: string;
  highlights: string[];
  language: string;
  repoUrl: string;
}

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // CRITICAL RULE: Fixed GitHub URL
  const GITHUB_PROFILE = "https://github.com/varshitham571-alt";

  const projects: Project[] = [
    {
      title: "AI-Based Adaptive Cruise Control (ACC)",
      badge: "Internship Project",
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      icon: <Briefcase className="w-5 h-5" />,
      description: "An AI-driven system using sensor fusion and predictive modeling to dynamically control vehicle speed for safety and efficiency.",
      tech: ["AI Concepts", "Sensor Fusion", "Edge AI", "System Architecture"],
      language: "Python",
      repoUrl: GITHUB_PROFILE,
      highlights: [
        "Implemented real-time sensor fusion for obstacle detection",
        "Developed predictive models for traffic speed variation",
        "Optimized fuel consumption via intelligent acceleration",
        "Designed edge AI deployment for low-latency decisions"
      ],
      codeSnippet: `def adjust_speed(target_dist, current_dist, speed):
    error = current_dist - target_dist
    derivative = error - last_error
    adjustment = (Kp * error) + (Kd * derivative)
    
    if error < SAFETY_THRESHOLD:
        return speed - EMERGENCY_DECEL
    
    return max(0, min(MAX_SPEED, speed + adjustment))`
    },
    {
      title: "Context-Aware HMI for Autonomous Driving",
      badge: "Internship Project",
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      icon: <Cpu className="w-5 h-5" />,
      description: "A Human-Machine Interface enabling safe transitions between manual and autonomous driving with computer vision monitoring.",
      tech: ["Embedded Systems", "Computer Vision", "Jetson Nano", "C++"],
      language: "C++",
      repoUrl: GITHUB_PROFILE,
      highlights: [
        "Designed seamless handover logic for manual/AI control",
        "Implemented multi-modal alerts (Visual, Audio, Haptic)",
        "Used Computer Vision to track driver attentiveness",
        "Optimized performance for Jetson Nano architecture"
      ],
      codeSnippet: `void HMI_Controller::processTransition() {
    auto state = driverMonitor.getState();
    if (state.attentiveness < ATTENTION_REQ) {
        alertSystem.trigger(ALERT_LEVEL_HIGH);
    } else if (state.readyForHandover) {
        systemState = MANUAL_MODE;
        ui.display("Control Restored to Driver");
    }
}`
    },
    {
      title: "AI Video Shopping Platform",
      badge: "Internship Project",
      badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      icon: <ShoppingBag className="w-5 h-5" />,
      description: "AI-assisted screen scanning for video streams that identifies fashion items and connects to e-commerce platforms.",
      tech: ["JavaScript", "Vision AI Logic", "Frontend Architecture"],
      language: "JavaScript",
      repoUrl: GITHUB_PROFILE,
      highlights: [
        "Integrated computer vision APIs for visual search",
        "Designed scalable frontend for video frame processing",
        "Implemented interactive UI layers for clickable items",
        "Built dynamic redirection logic based on similarity"
      ],
      codeSnippet: `async function scanFrame(videoElement) {
    const frameData = extractFrame(videoElement);
    const predictions = await visionModel.predict(frameData);
    const items = predictions.map(p => ({
        box: p.bbox, label: p.class, score: p.score
    }));
    renderInteractionLayer(items);
}`
    },
    {
      title: "Library Management System",
      badge: "Academic Project",
      badgeColor: "bg-slate-500/10 text-slate-400 border-slate-500/20",
      icon: <Book className="w-5 h-5" />,
      description: "Robust full-stack system for library inventory with secure user management and relational database architecture.",
      tech: ["PHP", "SQL", "XAMPP", "Responsive UI"],
      language: "PHP",
      repoUrl: GITHUB_PROFILE,
      highlights: [
        "Developed full CRUD operations for library assets",
        "Implemented secure authentication and sessions",
        "Designed relational database for complex queries",
        "Built responsive admin dashboard for inventory"
      ],
      codeSnippet: `public function add_book($title, $isbn, $author_id) {
    $sql = "INSERT INTO books (title, isbn, author_id) VALUES (?, ?, ?)";
    $stmt = $this->db->prepare($sql);
    return $stmt->execute([$title, $isbn, $author_id]);
}`
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">Best Projects</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto italic">Highlighting key internship and academic achievements suitable for professional review.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="glass-card flex flex-col rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="p-8 space-y-6 flex-1">
                <div className="flex justify-between items-start gap-4">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${project.badgeColor}`}>
                    {project.icon}
                    {project.badge}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">{project.title}</h3>
                
                <p className="text-slate-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-800/50 text-slate-500 text-[10px] font-bold uppercase tracking-wider rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-4">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 rounded flex items-center justify-center gap-2 transition-all transform hover:translate-y-[-2px]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Details
                </button>
                <a 
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-slate-700 hover:bg-slate-800 text-slate-400 rounded transition-all flex items-center justify-center hover:text-white"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
