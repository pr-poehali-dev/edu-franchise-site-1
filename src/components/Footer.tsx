import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-franchise rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-montserrat font-bold">
                EduFranchise
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Создаем успешные образовательные центры по всей России
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-franchise-blue rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-franchise-blue rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="Share2" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 hover:bg-franchise-blue rounded-lg flex items-center justify-center transition-colors"
              >
                <Icon name="Youtube" size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-montserrat font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Программы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Партнерство
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Документы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обучение
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Техподдержка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-bold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                info@edufranchise.ru
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" size={16} className="mr-2" />
                г. Москва
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EduFranchise. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
