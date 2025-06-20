import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите консультацию и начните свой успешный бизнес уже сегодня
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
              Оставьте заявку
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franchise-blue focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franchise-blue focus:border-transparent"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franchise-blue focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Город
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franchise-blue focus:border-transparent"
                  placeholder="Ваш город"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franchise-blue focus:border-transparent"
                  placeholder="Расскажите о ваших планах..."
                ></textarea>
              </div>
              <button className="btn-primary w-full text-lg py-4">
                Отправить заявку
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-franchise-blue rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Телефон</div>
                    <div className="text-gray-600">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-franchise-orange rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@edufranchise.ru</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-franchise-blue rounded-lg flex items-center justify-center mr-4">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Адрес</div>
                    <div className="text-gray-600">
                      г. Москва, ул. Примерная, д. 123
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-franchise-orange rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Время работы
                    </div>
                    <div className="text-gray-600">Пн-Пт: 9:00-18:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-montserrat font-bold text-gray-900 mb-4">
                Мы в соцсетях
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-franchise-blue rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-gray-600 group-hover:text-white"
                  />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-franchise-blue rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon
                    name="Share2"
                    size={24}
                    className="text-gray-600 group-hover:text-white"
                  />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-100 hover:bg-franchise-blue rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon
                    name="Youtube"
                    size={24}
                    className="text-gray-600 group-hover:text-white"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
