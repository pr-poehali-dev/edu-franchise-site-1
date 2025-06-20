import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-franchise-orange/10 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Asymmetric */}
          <div className="lg:col-span-7 text-white">
            <div className="max-w-2xl animate-slide-up">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
                <span className="w-2 h-2 bg-franchise-orange rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium">
                  Образование будущего
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-montserrat font-bold mb-8 leading-tight">
                Откройте собственную
                <br />
                <span className="text-franchise-orange animate-gradient-text">
                  образовательную локацию
                </span>
                <br />
                <span className="text-4xl lg:text-5xl text-blue-100">
                  «Мастерская будущего»
                </span>
              </h1>

              <p className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed max-w-lg">
                Зарабатывайте от 280 000 рублей в месяц. Возьмите будущее в свои
                руки!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-franchise-orange hover:bg-franchise-orange-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
                  <span className="relative z-10">Стать партнером</span>
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 border border-white/30 backdrop-blur-sm hover:scale-105">
                  Узнать больше
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Creative Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="Образовательный процесс"
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto animate-scale-in"
                />

                {/* Overlapping Cards */}
                <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl animate-float z-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-franchise-orange rounded-full flex items-center justify-center">
                      <Icon name="BookOpen" size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        200+
                      </div>
                      <div className="text-xs text-gray-600">Партнеров</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-franchise-blue rounded-2xl p-4 shadow-xl animate-float-delayed z-20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-franchise-orange rounded-full flex items-center justify-center">
                      <Icon name="Users" size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">95%</div>
                      <div className="text-xs text-blue-100">Успеха</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-franchise-orange to-franchise-orange-600 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -top-4 left-1/3 w-8 h-8 bg-white rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Modern Layout */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "200+", label: "Партнеров", icon: "Users" },
            { number: "50K+", label: "Учеников", icon: "GraduationCap" },
            { number: "95%", label: "Успеха", icon: "TrendingUp" },
            { number: "8 мес", label: "Окупаемость", icon: "DollarSign" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors duration-300">
                <Icon
                  name={stat.icon as any}
                  size={20}
                  className="text-white"
                />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-franchise-orange mb-1">
                {stat.number}
              </div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
