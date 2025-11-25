import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, ExternalLink, Award, Menu, X } from 'lucide-react';

// Data
const projects = [
  {
    icon: '🧠',
    title: 'Solace',
    description: 'A GPT-powered personal AI companion with memory and real-world knowledge.',
    stack: 'Python, HTML, JavaScript, GPT API',
    url: 'https://solace-giw5uyb6y-maheshs-projects-81a5a75f.vercel.app/'
  },
  {
    icon: '🇯🇵',
    title: 'Nihonpath',
    description: 'A simple Japanese learning platform offering Hiragana, Katakana, vocabulary lists, and structured study routes for beginners.',
    stack: 'HTML, CSS, JavaScript',
    url: 'https://github.com/mahesh-v185/NihonPath.git'
  },
  {
    icon: '🏫',
    title: 'Campus Kizuna',
    description: 'Social platform for students and faculty with role-based access, semester tagging, and real-time reels.',
    stack: 'Kotlin, Firebase, Android Studio',
    url: 'https://campus-izuna.vercel.app/'
  },
  {
    icon: '📘',
    title: 'Preparation Tracker',
    description: 'A customizable progress tracker to monitor daily study, MEXT syllabus completion, habits, and performance analytics.',
    stack: 'JavaScript, Express.js, Firebase',
    url: 'https://mahesh-v185.github.io/Preparation-Tracker/'
  },
  {
    icon: '📝',
    title: 'Life Script',
    description: 'AI-powered platform that transforms prompts into comprehensive eBooks and content.',
    stack: 'React, Node.js, Firebase, AI APIs',
    url: 'https://lifescript-two.vercel.app/'
  },
  {
    icon: '🚀',
    title: 'Booster',
    description: 'Voice-powered AI chatbot system with conversation history and natural language processing capabilities.',
    stack: 'Python, OpenAI API, Speech Recognition',
    url: 'https://github.com/mahesh-v185/Booster---voice-chat-bot.git'
  }
];

const skills = {
  languages: ['Python', 'JavaScript', 'HTML', 'CSS', 'Java (Basics)'],
  frameworks: ['Node.js', 'Express.js', 'Firebase'],
  tools: ['Git', 'GitHub', 'REST APIs'],
  others: ['Neural Computation', 'Spiking‑like Timing Models', 'Emotion‑Aware Interaction', 'UI/UX Design'],
  softSkills: ['Initiative', 'Adaptability', 'Self‑Learning', 'Vision', 'Problem‑Solving', 'Consistency'],
  foundations: ['Basic Linear Algebra', 'Basic Probability']
};

const certifications = [
  {
    title: 'Accenture Developer & Technology Experience',
    provider: 'Forage',
    url: 'https://www.theforage.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_BtRS8jq8NLYuEmGzY_1751251417456_completion_certificate.pdf'
  },
  {
    title: 'Google Cloud: Introduction to Generative AI',
    provider: 'SkillUp (Simplilearn)',
    url: 'https://simpli-web.app.link/e/dqENgIL4wYb'
  },
  {
    title: 'Oracle AI Foundations Badge',
    provider: 'Oracle University',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9DC2E9F13B3168C5DF229F3A88D05DE2D6FD1A455F397586CA6F031DA41C23CA'
  },
  {
    title: 'Entrepreneurship & Innovation: Web Development Job Simulation',
    provider: 'City of Moreton Bay (Forage)',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/2t4QruSmKkrN8jr7G/7q8DN5enMzSHqLwev_2t4QruSmKkrN8jr7G_BtRS8jq8NLYuEmGzY_1751224123652_completion_certificate.pdf'
  },
  {
    title: 'Data Analytics Job Simulation',
    provider: 'Deloitte (Forage)',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_BtRS8jq8NLYuEmGzY_1752741494605_completion_certificate.pdf'
  },
  {
    title: 'International Computer Science Competition – Qualified',
    provider: 'ICSC',
    url: 'https://www.linkedin.com/posts/mr-mahesh-4209b4284_computerscience-competition-learning-activity-7375522113190940672-0tgA?utm_source=share&utm_medium=member_android&rcm=ACoAAEU0BFgBEkXQ--rh9rqcE1cvVhHkPBjGNLQ'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'hobbies', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-soft' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Mahesh V
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {['About', 'Projects', 'Skills', 'Hobbies', 'Certifications', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground/70'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-coral rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-background border-t border-border shadow-medium">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {['About', 'Projects', 'Skills', 'Hobbies', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left font-medium transition-colors hover:text-primary py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent animate-scale-in">
                Future-Ready Technologist.
              </span>
              <br />
              <span className="text-foreground">Unstoppable Learner.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Turning ideas into intelligent systems. One line of code at a time.
            </p>
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-coral hover:shadow-glow-coral transition-all duration-300 hover:scale-105 text-lg px-8 py-6 rounded-full"
            >
              ▸ Explore My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-coral bg-clip-text text-transparent">About Me</span>
          </h2>
          <Card className="p-8 md:p-12 shadow-medium hover:shadow-glow-coral transition-all duration-300 border-2 border-primary/20 rounded-3xl">
            <h3 className="text-3xl font-bold mb-3 text-primary">Mahesh V</h3>
            <p className="text-lg text-muted-foreground italic mb-6">
              Aspiring Computer Scientist | Human-Centered AI Enthusiast | Product Builder
            </p>
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                I'm a developer who believes that code can change people's lives. While others learn to build projects, I build projects to learn.
              </p>
              <p>
                From <strong className="text-primary">Solace</strong>, a memory‑based conversational companion, to the <strong className="text-secondary">Neuronova Engine</strong>, I've spent the past two years creating tools that reflect who I am — driven, thoughtful, and always evolving.
              </p>
              <p>
                Even during my academic transition, I never paused my growth. I used that time to dive deep into full-stack development, mobile apps, AI, and real-world product design. I'm also learning Japanese, not as a requirement, but because I deeply respect its culture of precision, humility, and innovation — values I live by.
              </p>
              <p className="text-xl font-semibold text-primary">
                I don't chase grades. I chase impact.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-blue bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-2 border-2 border-secondary/20 rounded-2xl group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Stack:</strong> {project.stack}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-primary font-semibold transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-mint bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6 hover:shadow-medium transition-all duration-300 rounded-2xl border-2 border-accent/20">
                <h4 className="text-xl font-bold mb-4 text-accent capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-accent/10 to-accent/5 hover:from-accent/20 hover:to-accent/10 border border-accent/30 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies & Interests Section */}
      <section id="hobbies" className="py-20 px-4 bg-muted/10">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Hobbies & Interests</span>
          </h2>
          <Card className="p-8 rounded-2xl border-2 border-accent/10 shadow-medium">
            <div className="space-y-4 text-lg text-foreground/80">
              <p><strong>Reading:</strong> Books — especially "Atomic Habits" and other personal development titles.</p>
              <p><strong>Music:</strong> Listening to artists like Mark Amber and exploring ambient and electronic playlists.</p>
              <p><strong>Watching:</strong> Anime — enjoying storytelling, art, and creative direction across studios.</p>
              <p><strong>Travel:</strong> Travelling and meeting new people — learning from different cultures and experiences.</p>
              <p><strong>Cooking:</strong> Experimenting with recipes and flavors in the kitchen.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience/Certifications Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-coral bg-clip-text text-transparent">Certifications & Experience</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card
                key={cert.title}
                className="p-6 flex flex-col items-center text-center hover:shadow-glow-coral transition-all duration-300 hover:-translate-y-2 rounded-2xl border-2 border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-coral flex items-center justify-center mb-4 shadow-glow-coral">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 flex-grow">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cert.provider}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </Card>
            ))}
          </div>
          <Card className="p-8 text-center max-w-2xl mx-auto rounded-2xl border-2 border-primary/20">
            <p className="text-xl font-bold text-primary mb-2">Additional Qualifications</p>
            <p className="text-lg text-foreground/80">JLPT N5 – Ongoing</p>
          </Card>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl md:text-4xl font-medium italic text-foreground/80 relative">
            <span className="text-6xl text-primary/30 absolute -top-4 -left-4">"</span>
            I study, experiment, and create the tools I wish existed — so others can use them too
            <span className="text-6xl text-primary/30 absolute -bottom-8 -right-4">"</span>
          </blockquote>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-gradient-blue bg-clip-text text-transparent">Contact</span>
          </h2>
          <p className="text-2xl text-center mb-12 text-foreground/80">Let's Build Something Powerful Together.</p>
          
          <Card className="p-8 md:p-12 shadow-medium rounded-3xl border-2 border-secondary/20">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-border focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all bg-background text-foreground"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-border focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all bg-background text-foreground"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-border focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all resize-none bg-background text-foreground"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-blue hover:shadow-glow-blue transition-all duration-300 hover:scale-105 text-lg py-6 rounded-2xl"
              >
                Send Message
              </Button>
            </form>
          </Card>

          <div className="flex justify-center gap-8 mt-12">
            <a
              href="mailto:mahesh9880302264.v@gmail.com"
              className="w-14 h-14 rounded-full bg-gradient-coral flex items-center justify-center hover:shadow-glow-coral transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="text-white" size={24} />
            </a>
            <a
              href="https://github.com/mahesh-v185"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-blue flex items-center justify-center hover:shadow-glow-blue transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="text-white" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mr-mahesh-4209b4284"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-mint flex items-center justify-center hover:shadow-medium transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-white" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50 text-center">
        <div className="container mx-auto">
          <p className="text-foreground/70 mb-2">Designed to speak for me — before I speak.</p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mahesh V. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
