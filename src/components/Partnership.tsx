import Icon from "@/components/ui/icon";

const Partnership = () => {
  const benefits = [
    {
      icon: "Rocket",
      title: "Быстрый старт",
      description: "Запуск центра за 30 дней с полной поддержкой",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "DollarSign",
      title: "Высокая прибыль",
      description: "Окупаемость от 8 месяцев, рентабельность до 40%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "Users",
      title: "Обучение команды",
      description: "Полное обучение персонала и сертификация",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: "HeadphonesIcon",
      title: "24/7 поддержка",
      description: "Круглосуточная техническая и методическая помощь",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "TrendingUp",
      title: "Маркетинг",
      description: "Готовые решения для привлечения клиентов",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description: "Официальные документы и лицензии",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section
      id="partnership"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-50 to-transparent rounded-full translate-y-40 -translate-x-40"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            ⭐ Преимущества партнерства
          </div>
          <h2
            className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Почему выбирают{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              нас?
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Комплексное решение для образовательного бизнеса
          </p>
        </div>

        {/* Benefits grid with creative layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative ${index === 1 || index === 4 ? "md:mt-8" : ""}`}
            >
              <div
                className="relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={benefit.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>

                <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Subtle gradient border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-center text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                Готовы начать?
              </h3>
              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Оставьте заявку и получите бизнес-план в подарок
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  Получить бизнес-план
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  Задать вопрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
