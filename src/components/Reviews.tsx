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
    },
    {
      name: "Сергей Иванов",
      position: "Партнер в Санкт-Петербурге",
      text: "Отличная система обучения персонала. Все сотрудники прошли сертификацию быстро. Клиенты довольны результатами, рекомендуют друзьям.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Мария Сидорова",
      position: "Директор центра в Екатеринбурге",
      text: "Маркетинговые материалы и стратегии помогли нам быстро набрать клиентскую базу. Сейчас у нас постоянная запись на все программы.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">
            Отзывы партнеров
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Истории успеха наших франчайзи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-600">{review.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-franchise-blue mb-2">
                98%
              </div>
              <div className="text-gray-600">Довольных партнеров</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-franchise-orange mb-2">
                8 мес
              </div>
              <div className="text-gray-600">Средняя окупаемость</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-franchise-blue mb-2">
                35%
              </div>
              <div className="text-gray-600">Средняя рентабельность</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-franchise-orange mb-2">
                24/7
              </div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
