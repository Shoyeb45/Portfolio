import Image from "next/image"

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-32 py-16">
      <div className="flex flex-col items-center md:items-start">
        <div className="relative group">
          <Image
            src="https://res.cloudinary.com/ddfye0ekr/image/upload/c_crop,ar_1:1/v1711705852/WhatsApp_Image_2024-03-29_at_15.19.14_9ba7518d_m2s0g5.jpg" 
            alt="Shoyeb Ansari"
            height={80}
            width={80}
            className="h-80 w-80 rounded-full object-cover transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-gray-400"
          />
        </div>
        
        <div className="mt-8 space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-gray-800">
            Hi, I&apos;m Shoyeb.
          </h2>
          <h2 className="text-3xl md:text-4xl font-playfair font-medium text-gray-800">
            I am aspiring to be a data scientist.
          </h2>
          <p className="text-lg font-playfair text-gray-700 leading-relaxed max-w-2xl">
            Passionate about mathematics and skilled in competitive programming and web development, 
            I&apos;m eager to become a data scientist. I love solving problems and using numbers to 
            uncover insights that drive innovation.
          </p>
        </div>
      </div>
    </section>
  )
}