import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contactInfo = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@edufranchise.ru",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "г. Москва, ул. Примерная, д. 123",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "Clock",
      title: "Время работы",
      value: "Пн-Пт: 9:00-18:00",
      color: "from-orange-500 to-red-500",
    },
  ];

  const socialLinks = [
    { icon: "MessageCircle", href: "#", color: "hover:bg-blue-500" },
    { icon: "Share2", href: "#", color: "hover:bg-purple-500" },
    { icon: "Youtube", href: "#", color: "hover:bg-red-500" },
  ];

  return (
    <section
      id="contacts"
      className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-x-40 -translate-y-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100 to-transparent rounded-full translate-x-48 translate-y-48"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            📞 Начните прямо сейчас
          </div>
          <h2
            className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Свяжитесь с{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              нами
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Получите консультацию и начните успешный бизнес
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-t-3xl"></div>

              <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-8">
                Оставьте заявку
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Город
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Ваш город"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Расскажите о ваших планах..."
                  ></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02]">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-8">
                Контактная информация
              </h3>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group flex items-start p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon
                        name={contact.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {contact.title}
                      </div>
                      <div className="text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in" style={{ animationDelay: "1s" }}>
              <h4 className="font-montserrat font-bold text-gray-900 mb-6">
                Мы в соцсетях
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-14 h-14 bg-gray-100 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110`}
                  >
                    <Icon
                      name={social.icon as any}
                      size={24}
                      className="text-gray-600 group-hover:text-white transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional CTA */}
            <div
              className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
              <h4 className="font-bold mb-2 relative">Срочная консультация?</h4>
              <p className="text-gray-300 text-sm mb-4 relative">
                Звоните прямо сейчас
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm relative">
                Перезвонить мне
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
