import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const products = [
    {
      id: 1,
      name: "Кондиционер Premium",
      power: "2.5 кВт",
      price: "45 000",
      image: "https://cdn.poehali.dev/projects/d15382e4-d247-4960-82a7-b02154332e1c/files/3cb57663-b742-45f1-883c-cc0e7a9e2990.jpg",
      features: ["Тихая работа", "Энергоэффективность A++", "Самоочистка"]
    },
    {
      id: 2,
      name: "Кондиционер Comfort",
      power: "3.5 кВт",
      price: "55 000",
      image: "https://cdn.poehali.dev/projects/d15382e4-d247-4960-82a7-b02154332e1c/files/3cb57663-b742-45f1-883c-cc0e7a9e2990.jpg",
      features: ["Wi-Fi управление", "Очистка воздуха", "Турбо режим"]
    },
    {
      id: 3,
      name: "Кондиционер Elite",
      power: "5.0 кВт",
      price: "75 000",
      image: "https://cdn.poehali.dev/projects/d15382e4-d247-4960-82a7-b02154332e1c/files/3cb57663-b742-45f1-883c-cc0e7a9e2990.jpg",
      features: ["Премиум дизайн", "Ионизация", "Умный климат-контроль"]
    }
  ];

  const services = [
    {
      title: "Установка",
      description: "Профессиональный монтаж любой сложности",
      icon: "Wrench",
      price: "от 8 000 ₽"
    },
    {
      title: "Обслуживание",
      description: "Регулярная чистка и диагностика",
      icon: "Settings",
      price: "от 3 000 ₽"
    },
    {
      title: "Ремонт",
      description: "Быстрое устранение неисправностей",
      icon: "Hammer",
      price: "от 2 500 ₽"
    }
  ];

  const reviews = [
    {
      name: "Александр",
      text: "Отличный сервис! Установили кондиционер за 3 часа, все аккуратно и профессионально.",
      rating: 5
    },
    {
      name: "Мария",
      text: "Очень довольна качеством работы. Ребята вежливые, все объяснили и показали.",
      rating: 5
    },
    {
      name: "Дмитрий",
      text: "Кондиционер работает отлично, тихий и эффективный. Рекомендую!",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wind" size={28} className="text-primary" />
            <span className="text-xl font-bold">CoolAir</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Идеальный климат в вашем доме
              </h1>
              <p className="text-lg text-muted-foreground">
                Продажа и профессиональная установка кондиционеров с гарантией качества
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="ShoppingCart" size={20} />
                  Каталог
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Установок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/d15382e4-d247-4960-82a7-b02154332e1c/files/3cb57663-b742-45f1-883c-cc0e7a9e2990.jpg" 
                alt="Кондиционер" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наш каталог</h2>
            <p className="text-lg text-muted-foreground">Подберем идеальное решение для любого помещения</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>Мощность: {product.power}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-2xl font-bold">{product.price} ₽</div>
                    <Button>Заказать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный цикл работ от консультации до обслуживания</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Гарантия 5 лет</h3>
                    <p className="text-sm text-muted-foreground">На все оборудование и работы</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Мы уверены в качестве нашей работы и предоставляем расширенную гарантию на все услуги. 
                  В случае любых неполадок наши специалисты оперативно устранят проблему.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Бесплатный выезд мастера</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Техническое обслуживание</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Замена деталей по гарантии</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Консультации 24/7</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://cdn.poehali.dev/projects/d15382e4-d247-4960-82a7-b02154332e1c/files/78e4cbf5-3da0-4e74-bd9d-e2bd3cefbf02.jpg"
                  alt="Монтаж кондиционера"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Закажите консультацию или расчет стоимости</p>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <Input 
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем помещении и пожеланиях"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
                <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-medium">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">info@coolair.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Режим работы</div>
                      <div className="font-medium">Пн-Вс 9:00-21:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" size={24} className="text-primary" />
                <span className="text-lg font-bold">CoolAir</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная установка и обслуживание кондиционеров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Бытовые кондиционеры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Коммерческие системы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мультисплит-системы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Установка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обслуживание</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ремонт</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@coolair.ru</li>
                <li>Пн-Вс 9:00-21:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 CoolAir. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
