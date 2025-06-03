import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
              Откройте мир
              <span className="text-primary block">электронных книг</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Более 50,000 книг в вашем кармане. Читайте где угодно, покупайте
              отдельно или оформите подписку с неограниченным доступом.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="BookOpen" className="mr-2 h-5 w-5" />
                Начать читать
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                <Icon name="Play" className="mr-2 h-5 w-5" />
                Смотреть обзор
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">Книг</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-gray-600">Читателей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Доступ</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Чтение электронных книг"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="mt-6">
                <h3 className="font-semibold text-lg">Современная классика</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Читайте на любом устройстве
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-primary">299₽</span>
                  <Button size="sm">В корзину</Button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 animate-bounce">
              <Icon name="Star" className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 animate-pulse">
              <Icon name="Download" className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
