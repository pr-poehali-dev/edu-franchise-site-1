import { useState } from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Главная", href: "#home" },
    { label: "Программы", href: "#programs" },
    { label: "Стать партнером", href: "#partnership" },
    { label: "Отзывы", href: "#reviews" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-franchise rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-montserrat font-bold text-franchise-blue">
              EduFranchise
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-franchise-blue transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <button className="btn-primary">Связаться с нами</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:text-franchise-blue transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4">
                <button className="btn-primary w-full">Связаться с нами</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
