import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      icon: "Clock",
      title: "Продленка",
      description:
        "Полноценный присмотр и развивающая программа для детей после школы. Выполнение домашних заданий, творческие занятия, прогулки.",
      features: [
        "Помощь с домашними заданиями",
        "Развивающие игры",
        "Творческие мастерские",
        "Прогулки и спорт",
      ],
      price: "от 15 000 ₽/мес",
      color: "franchise-blue",
    },
    {
      icon: "Palette",
      title: "Мастер-классы",
      description:
        "Увлекательные творческие занятия для развития навыков и талантов. Рисование, лепка, конструирование и многое другое.",
      features: [
        "Художественное творчество",
        "Научные эксперименты",
        "Кулинарные мастер-классы",
        "Техническое творчество",
      ],
      price: "от 800 ₽/занятие",
      color: "franchise-orange",
    },
    {
      icon: "Brain",
      title: "Интеллектуальное развитие",
      description:
        "Комплексная программа развития когнитивных способностей, логического мышления и памяти для детей разных возрастов.",
      features: [
        "Ментальная арифметика",
        "Скорочтение",
        "Развитие памяти",
        "Логические игры",
      ],
      price: "от 6 000 ₽/мес",
      color: "franchise-blue",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Наши программы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Проверенные образовательные решения для успешного бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-16 h-16 bg-${program.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <Icon
                  name={program.icon as any}
                  size={32}
                  className="text-white"
                />
              </div>

              <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                {program.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>

              <ul className="space-y-3 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {program.price}
                  </span>
                  <button
                    className={`btn-${program.color === "franchise-blue" ? "primary" : "secondary"}`}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
