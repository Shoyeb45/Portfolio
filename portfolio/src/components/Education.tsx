export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 md:px-32 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 tracking-wide">
          Education
        </h1>
      </div>

      <div className="space-y-12">
        {/* Undergraduate */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
            Undergraduation
          </h2>
          <div className="ml-4">
            <dt className="text-xl font-playfair font-medium italic text-gray-800">
              Indian Institute of Technology Guwahati
            </dt>
            <dd className="text-lg font-playfair text-gray-700 ml-4">
              - Bsc(Hon) in DS and AI
            </dd>
          </div>
        </div>

        {/* Certification */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
            Certification
          </h2>
          <div className="ml-4">
            <li className="text-xl font-playfair font-medium italic text-gray-800 list-none">
              Physics Wallah Institute of Innovation
            </li>
          </div>
        </div>

        {/* Secondary Education */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-gray-800 mb-4">
            Secondary and Higher Secondary Education
          </h2>
          <div className="ml-4">
            <div className="text-xl font-playfair font-medium italic text-gray-800 mb-3">
              Jawahar Navodaya Vidyalaya, Dumra
            </div>
            <div className="ml-4 space-y-2">
              <div>
                <dt className="text-lg font-playfair text-gray-800">HSC CBSE Board (2021-22)</dt>
                <dd className="text-lg font-playfair text-gray-700 ml-4">94%</dd>
              </div>
              <div>
                <dt className="text-lg font-playfair text-gray-800">SSC CBSE Board (2019-20)</dt>
                <dd className="text-lg font-playfair text-gray-700 ml-4">94%</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
