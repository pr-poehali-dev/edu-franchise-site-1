import Icon from "@/components/ui/icon";

const Partnership = () => {
  return (
    <section
      id="about-founder"
      className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30 animate-bounce"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            👩‍🏫 Об основателе
          </div>
          <h2
            className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Елена{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Крохмаль
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <Icon
                      name="User"
                      size={80}
                      className="text-blue-400 mx-auto mb-4"
                    />
                    <p className="text-blue-600 font-medium">
                      Фото Елены Крохмаль
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-6">
                  Основатель образовательной локации «Мастерская будущего»
                </h3>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <span>
                      Заместитель председателя регионального отделения «Союз
                      семей России»
                    </span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <span>Педагог дошкольного образования</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Учитель начальных классов</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <span>Психолог</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    </div>
                    <span>Магистр педагогики</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    </div>
                    <span>Кандидат педагогических наук</span>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                    </div>
                    <span>Многодетная мама</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
