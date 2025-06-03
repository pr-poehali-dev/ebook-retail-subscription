import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Базовый",
      price: 299,
      period: "месяц",
      description: "Для начинающих читателей",
      features: [
        "Доступ к 10,000+ книг",
        "Чтение на 2 устройствах",
        "Базовая поддержка",
        "Офлайн чтение",
      ],
      popular: false,
    },
    {
      name: "Премиум",
      price: 499,
      period: "месяц",
      description: "Самый популярный выбор",
      features: [
        "Доступ ко всем 50,000+ книг",
        "Чтение на 5 устройствах",
        "Приоритетная поддержка",
        "Офлайн чтение",
        "Аудиокниги",
        "Ранний доступ к новинкам",
      ],
      popular: true,
    },
    {
      name: "Семейный",
      price: 799,
      period: "месяц",
      description: "До 6 членов семьи",
      features: [
        "Все функции Премиум",
        "6 независимых аккаунтов",
        "Семейная библиотека",
        "Родительский контроль",
        "Персональные рекомендации",
        "Групповые скидки",
      ],
      popular: false,
    },
  ];

  return (
    <section id="subscription" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Выберите подписку
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Неограниченный доступ к тысячам книг по выгодной цене
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "hover:shadow-md"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-montserrat">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}₽
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Icon
                        name="Check"
                        className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  size="lg"
                >
                  {plan.popular ? "Начать сейчас" : "Выбрать план"}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-3">
                  Первые 7 дней бесплатно
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Есть вопросы? Мы поможем выбрать подходящий план
          </p>
          <Button variant="outline" size="lg">
            <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
