import { Zap, Rocket, BrainCircuit, Target } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-12 relative py-16 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background Decorative Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-100 to-white opacity-70" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />

      {/* Main About Content Container */}
      <div className=" relative w-[97%] lg:w-[100%] mx-auto">
        {/* About Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-[-0.02em]">
            About Me
          </h2>
          {/* Heading Accent Line */}
          <div className="w-20 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

          {/* Professional Summary */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            I specialize in{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              building high-performance web applications
            </span>{" "}
            with Next.js and TypeScript, focusing on clean architecture,
            performance optimization, and thoughtful user experiences.
            <br className="hidden md:block" />I create reliable and scalable
            applications that balance performance, maintainability, and
            exceptional user experiences.
          </p>

          {/* Experience Highlights */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-3 md:gap-6 mb-6 text-sm text-gray-600">
            <span>• 10+ Projects Completed</span>
            <span>• React & Next.js Developer</span>
            <span>• Performance-Focused Developer</span>
          </div>

          {/* Personal Statement */}
          <p className="text-sm text-gray-500">
            I enjoy transforming complex ideas into intuitive, scalable, and
            user-friendly digital experiences.
          </p>
        </div>

        {/* Skills / Capability Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Performance Optimization",
              description: "Fast loading and smooth experiences",
              icon: Zap,
            },
            {
              title: "Scalable Architecture",
              description: "Systems designed for growth",
              icon: Rocket,
            },
            {
              title: "Clean & Maintainable Code",
              description: "Readable and reliable solutions",
              icon: BrainCircuit,
            },
            {
              title: "User-Centric Design",
              description: "Interfaces designed around people",
              icon: Target,
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                          group 
                          bg-white/70 
                          backdrop-blur-xl 
                          border border-slate-200 
                          px-6 py-8 
                          rounded-2xl
                          shadow-sm 
                          hover:shadow-2xl 
                          hover:-translate-y-2 
                          hover:border-purple-300
                          transition-all 
                          duration-300 
                          text-center
                          "
              >
                {/* Capability Icon */}
                <div
                  className="
                            w-12 h-12 
                            mx-auto mb-5
                            rounded-xl
                            bg-gradient-to-br 
                            from-indigo-500 
                            to-purple-600
                            flex 
                            items-center 
                            justify-center
                            group-hover:scale-110
                            transition-transform
                            duration-300
                            "
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Capability Title */}
                <h3 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                {/* Capability Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
