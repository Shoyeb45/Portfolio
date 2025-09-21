export default function Skills() {
  const skills = [
    'Java', 'C/C++', 'Python', 'Javascript', 
    'HTML/CSS', 'SQL', 'Pandas', 'Excel', "Typescript", "NextJS", "Express", "React"
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-32 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 tracking-wide">
          Skills
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="px-6 py-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-sm hover:shadow-xl hover:from-white hover:to-white transition-all duration-300 cursor-pointer group"
          >
            <p className="text-lg md:text-xl font-playfair text-gray-800 group-hover:italic transition-all duration-300">
              {skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}