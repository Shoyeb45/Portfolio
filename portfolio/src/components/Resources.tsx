export default function Resources() {
  const resources = [
    {
      title: "Python",
      link: "https://shoyeb.notion.site/Python-a95cb7e57fa24caab007237ed9f16d50?pvs=4"
    },
    {
      title: "Data Science",
      link: "https://shoyeb.notion.site/Data-Science-f5fed1e5576a43909b48df2bf9c18ab9?pvs=4"
    },
    {
      title: "Excel",
      link: "https://shoyeb.notion.site/Excel-and-Spreadsheet-2966dcf634394024a2b2c7b7bed228d3?pvs=4"
    },
    {
      title: "C Programming",
      link: "https://shoyeb.notion.site/C-Programming-25794a1e064641d2a15348272d32edac?pvs=4"
    },
    {
      title: "Javascript",
      link: "https://shoyeb.notion.site/JavaScript-5dea72739fea4f1a912ecb891ee1b9fa?pvs=4"
    },
    {
      title: "HTML/CSS",
      link: "https://shoyeb.notion.site/HTML-CSS-e63ba3182629427d9182197dbd89dff0?pvs=4"
    },
    {
      title: "Linux",
      link: "https://shoyeb.notion.site/Linux-904d572795c34b3a80537e00d62dcd35?pvs=4"
    },
    {
      title: "Pandas",
      link: "https://shoyeb.notion.site/Pandas-Numpy-d0c225351fa2459a94979bb80f424b37?pvs=4"
    }
  ]

  return (
    <section id="resources" className="max-w-7xl mx-auto px-6 md:px-32 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 tracking-wide">
          Resources
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {resources.map((resource, index) => (
          <div 
            key={index}
            className="p-6 bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-playfair font-semibold text-center text-gray-800 mb-4">
              {resource.title}
            </h2>
            <a 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center text-lg font-playfair font-medium text-gray-800 hover:text-black hover:font-bold transition-all duration-200"
            >
              Notion Link
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
