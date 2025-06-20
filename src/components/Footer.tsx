import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerLinks = [
    {
      title: "Компания",
      links: ["О нас", "Программы", "Партнерство", "Новости"],
    },
    {
      title: "Поддержка",
      links: ["Документы", "Обучение", "Техподдержка", "FAQ"],
    },
  ];

  const socialLinks = [
    { icon: "MessageCircle", href: "#", color: "hover:bg-blue-500" },
    { icon: "Share2", href: "#", color: "hover:bg-purple-500" },
    { icon: "Youtube", href: "#", color: "hover:bg-red-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-montserrat font-bold">
                EduFranchise
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-sm">
              Создаем успешные образовательные центры по всей России.
              Присоединяйтесь к нашей растущей сети партнеров.
            </p>

            {/* Social links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800/50 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 group hover:scale-110`}
                >
                  <Icon
                    name={social.icon as any}
                    size={18}
                    className="text-gray-400 group-hover:text-white transition-colors duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="md:col-span-2">
              <h4 className="font-montserrat font-bold mb-4 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block transition-transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="font-montserrat font-bold mb-4 text-lg">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Icon name="Phone" size={16} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm">
                  +7 (495) 123-45-67
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-500/30 transition-colors duration-300">
                  <Icon name="Mail" size={16} className="text-green-400" />
                </div>
                <span className="text-gray-300 text-sm">
                  info@edufranchise.ru
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-purple-500/30 transition-colors duration-300">
                  <Icon name="MapPin" size={16} className="text-purple-400" />
                </div>
                <span className="text-gray-300 text-sm">г. Москва</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2024 EduFranchise. Все права защищены.
          </p>

          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
