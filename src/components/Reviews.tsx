import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      position: "Владелец центра в Москве",
      text: "За 6 месяцев мы окупили все вложения. Программы действительно работают, дети с удовольствием занимаются. Поддержка франчайзера на высшем уровне.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b9c1a6c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Сергей Иванов",
      position: "Партнер в Санкт-Петербурге",
      text: "Отличная система обучения персонала. Все сотрудники прошли сертификацию быстро. Клиенты довольны результатами, рекомендуют друзьям.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Мария Сидорова",
      position: "Директор центра в Екатеринбурге",
      text: "Маркетинговые материалы и стратегии помогли нам быстро набрать клиентскую базу. Сейчас у нас постоянная запись на все программы.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const stats = [
    {
      value: "98%",
      label: "Довольных партнеров",
      icon: "Heart",
      color: "text-red-500",
    },
    {
      value: "8 мес",
      label: "Средняя окупаемость",
      icon: "TrendingUp",
      color: "text-green-500",
    },
    {
      value: "35%",
      label: "Средняя рентабельность",
      icon: "PieChart",
      color: "text-blue-500",
    },
    {
      value: "24/7",
      label: "Поддержка",
      icon: "Clock",
      color: "text-purple-500",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating elements */}
      <div
        className="absolute top-20 right-10 w-20 h-20 bg-yellow-100 rounded-full opacity-50 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-40 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            💬 Истории успеха
          </div>
          <h2
            className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Отзывы{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              партнеров
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Реальные истории успешного бизнеса
          </p>
        </div>

        {/* Reviews cards with creative positioning */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`group ${index === 1 ? "lg:-mt-8" : ""} ${index === 2 ? "lg:mt-4" : ""}`}
            >
              <div
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2 + 0.6}s` }}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${review.gradient} rounded-t-3xl`}
                ></div>

                {/* Stars */}
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={18}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <Icon
                    name="Quote"
                    size={32}
                    className="text-gray-200 absolute -top-2 -left-2"
                  />
                  <p className="text-gray-700 leading-relaxed relative z-10 italic">
                    {review.text}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${review.gradient} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">
                      {review.position}
                    </div>
                  </div>
                </div>

                {/* Floating accent */}
                <div
                  className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${review.gradient} rounded-full opacity-60 group-hover:scale-125 transition-transform duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section with modern design */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 1.2}s` }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Icon
                      name={stat.icon as any}
                      size={32}
                      className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
