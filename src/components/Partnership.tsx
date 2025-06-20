import Icon from "@/components/ui/icon";

const Partnership = () => {
  const benefits = [
    {
      icon: "Rocket",
      title: "Быстрый старт",
      description: "Запуск центра за 30 дней с полной поддержкой",
    },
    {
      icon: "DollarSign",
      title: "Высокая прибыль",
      description: "Окупаемость от 8 месяцев, рентабельность до 40%",
    },
    {
      icon: "Users",
      title: "Обучение команды",
      description: "Полное обучение персонала и сертификация",
    },
    {
      icon: "HeadphonesIcon",
      title: "24/7 поддержка",
      description: "Круглосуточная техническая и методическая помощь",
    },
    {
      icon: "TrendingUp",
      title: "Маркетинг",
      description: "Готовые решения для привлечения клиентов",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description: "Официальные документы и лицензии",
    },
  ];

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Почему выбирают нас?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексное решение для успешного образовательного бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-franchise rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={benefit.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-montserrat font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-franchise rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-montserrat font-bold mb-4">
            Готовы начать?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Оставьте заявку и получите бизнес-план в подарок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-franchise-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Получить бизнес-план
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
