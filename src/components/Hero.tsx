import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-gradient min-h-screen flex items-center pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
              Образовательная франшиза
              <span className="block text-franchise-orange">будущего</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Откройте успешный образовательный центр с нашей проверенной
              системой. Полная поддержка, готовые программы, высокая прибыль.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-secondary text-lg px-8 py-4">
                Стать партнером
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30">
                Узнать больше
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-franchise-orange">
                  200+
                </div>
                <div className="text-blue-100">Партнеров</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-franchise-orange">
                  50K+
                </div>
                <div className="text-blue-100">Учеников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-franchise-orange">
                  95%
                </div>
                <div className="text-blue-100">Успеха</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Образовательный процесс"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-franchise-orange rounded-full p-4 shadow-lg">
              <Icon name="BookOpen" size={32} className="text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Icon name="Users" size={32} className="text-franchise-blue" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
