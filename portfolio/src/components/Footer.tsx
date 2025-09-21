import Image from "next/image"

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/Shoyeb45",
      src: "https://res.cloudinary.com/ddfye0ekr/image/upload/v1711692458/github_nugibh.png",
      alt: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/shoyebansari45/",
      src: "https://res.cloudinary.com/ddfye0ekr/image/upload/v1711692459/linkedin_iezl5u.png",
      alt: "LinkedIn",
    },
    {
      href: "mailto:shoyebff45@gmail.com",
      src: "https://res.cloudinary.com/ddfye0ekr/image/upload/v1711692459/mail_dvyq4s.png",
      alt: "Email",
    },
    {
      href: "tel:9327156940",
      src: "https://res.cloudinary.com/ddfye0ekr/image/upload/v1711692459/telephone_yjcpuq.png",
      alt: "Phone",
    },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-100 to-white py-16 mt-16">
      <div className="flex justify-center items-center space-x-12 md:space-x-24">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10"
            />
          </a>
        ))}
      </div>
    </footer>
  )
}
