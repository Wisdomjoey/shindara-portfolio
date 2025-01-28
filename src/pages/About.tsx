import { Code, Briefcase, GraduationCap, Star } from "lucide-react";

const About = () => {
  const skills = [
    "Fashion Design",
    "Digital Marketing",
    "Fashion Blogger",
    "Instagram",
    "Twitter",
    "Facebook",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            About Me
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Hi, I'm Sindara, a fashion-forward girl with a passion for music. When
          I'm not strutting my stuff in the latest trends, you can find me
          belting out my favorite gospel songs as young aspiring minister of
          God. Singing is my escape, my happy place, and my way of expressing
          myself and worshiping my maker. Fashion, on the other hand, is my way
          of showcasing my personality and style. I love how both music and
          fashion allow me to be creative and confident. Follow me for a glimpse
          into my fashionable and melodic world!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I still remember the day I decided to turn my passion for fashion
            into a business. With no prior experience, I started small, selling
            clothes from my tiny apartment. It wasn't easy - long hours, endless
            research, and self-doubt were constant companions. But I persevered,
            driven by my love for beautiful fabrics, colors, and textures. I
            spent countless hours learning about fabrics, designs, and market
            trends. I attended fashion events, joined online forums, and
            networked with fellow entrepreneurs. Slowly but surely, my hard work
            paid off. My customer base grew, and so did my confidence. I
            expanded my product line, experimented with new designs, and
            explored different marketing channels. Today, I'm proud to say that
            my clothes selling business is thriving. I've built a loyal customer
            base, and my brand is recognized for its unique style and quality.
            It's been a journey of self-discovery, growth, and learning. I've
            faced setbacks, but I've never given up. And as I look back, I
            realize that starting small and being true to my passion has been
            the key to my success.
          </p>
        </div>

        {/* <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            What I Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I specialize in building modern web applications using cutting-edge
            technologies. From responsive front-end interfaces to scalable
            back-end systems, I ensure every project meets the highest standards
            of quality and performance.
          </p>
        </div> */}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="glass rounded-2xl p-8 text-center">
          <Code className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Instagram, Twitter, Facebook
          </p>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300">
            5+ years of being an Entrepreneur in the Fashion Design Industry
          </p>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-600 dark:text-gray-300">
            <p>
              <strong>Name:</strong> Obamah Modupe Rejoice
            </p>
            <p>
              <strong>Matric No:</strong> F/HD/23/3210049
            </p>
            <p>
              <strong>Department:</strong> Computer Science
            </p>
          </p>
        </div>
      </div>

      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 rounded-full glass-hover"
            >
              <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
