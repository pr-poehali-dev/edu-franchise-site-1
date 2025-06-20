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
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    },
    {
      icon: "Palette",
      title: "Мастер-классы",
      description:
        "Увлекательные творческие занятия для развития навыков и талентов. Рисование, лепка, конструирование и многое другое.",
      features: [
        "Художественное творчество",
        "Научные эксперименты",
        "Кулинарные мастер-классы",
        "Техническое творчество",
      ],
      price: "от 800 ₽/занятие",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
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
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="programs"
      className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-orange-100 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-32 h-32 bg-purple-100 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            🎯 Проверенные программы
          </div>
          <h2
            className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Наши{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              программы
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Образовательные решения для успешного бизнеса
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative group ${index === 1 ? "lg:mt-12" : ""} ${index === 2 ? "lg:mt-6" : ""}`}
            >
              {/* Card background with hover effect */}
              <div
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2 + 0.6}s` }}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 ${program.color.replace("bg-gradient-to-br", "bg-gradient-to-r")} rounded-t-3xl`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-20 h-20 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={program.icon as any}
                    size={40}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon
                          name="Check"
                          size={14}
                          className="text-green-600"
                        />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {program.price}
                    </span>
                  </div>
                  <button className="px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                    Подробнее
                  </button>
                </div>

                {/* Floating mini element */}
                <div
                  className={`absolute -top-2 -right-2 w-6 h-6 ${program.color} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
