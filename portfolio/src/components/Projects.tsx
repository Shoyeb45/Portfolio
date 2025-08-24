export default function Projects() {
  const projects = [
    {
      title: "Tic Tac Toe",
      description: "Player vs Player Tic Tac Toe game, developed using HTML, CSS and Javascript",
      website: "https://tictactoe45.vercel.app/",
      github: "https://github.com/Shoyeb45/MiniProjects/tree/main/Tic%20Tac%20Toe"
    },
    {
      title: "Portfolio",
      description: "Personal portfolio developed using HTML and CSS.",
      website: "#",
      github: "https://github.com/Shoyeb45/Portfolio"
    },
    {
      title: "Lenskart Clone",
      description: "Made Lenskart clone using HTML and CSS.",
      website: "https://lenskartclone45.vercel.app/",
      github: "https://github.com/Shoyeb45/lenskartClone"
    }
  ]

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-32 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 tracking-wide">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="p-8 bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-playfair font-semibold text-center text-gray-800 mb-4">
              {project.title}
            </h2>
            <p className="text-lg font-playfair text-gray-700 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="space-y-3">
              <a 
                href={project.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center text-lg font-playfair font-medium text-gray-800 hover:text-black hover:font-bold transition-all duration-200"
              >
                Website
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center text-lg font-playfair font-medium text-gray-800 hover:text-black hover:font-bold transition-all duration-200"
              >
                Github Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
