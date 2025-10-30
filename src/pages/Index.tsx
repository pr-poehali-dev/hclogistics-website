import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/391cf7fb-f0a2-4c3e-8cb3-d0e03e0922a6.png" 
              alt="H&C Logistics" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">H&C Logistics</h1>
              <p className="text-xs text-muted-foreground">5PL оператор</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('partners')} className="text-sm hover:text-primary transition-colors">Партнеры</button>
            <button onClick={() => scrollToSection('career')} className="text-sm hover:text-primary transition-colors">Карьера</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </div>

          <Button onClick={() => scrollToSection('contacts')} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(201 169 97 / 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
            <span className="text-primary text-sm font-medium">5PL оператор полного цикла</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            H&C Logistics
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Комплексные логистические решения мирового уровня с вооруженным сопровождением и ВЭД
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('services')} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Package" className="mr-2" size={20} />
              Наши услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('career')} className="border-primary text-primary hover:bg-primary/10">
              <Icon name="Briefcase" className="mr-2" size={20} />
              Вакансии
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Shield', label: 'Вооруженное сопровождение', value: '24/7' },
              { icon: 'Globe', label: 'Страны доставки', value: '120+' },
              { icon: 'Truck', label: 'Единиц транспорта', value: '500+' },
              { icon: 'Users', label: 'Партнеров', value: '50+' }
            ].map((stat, idx) => (
              <Card key={idx} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <Icon name={stat.icon as any} className="mx-auto mb-3 text-primary" size={32} />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              H&C Logistics - часть холдинга H&C Group с многолетним опытом в различных отраслях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card border-border">
              <Icon name="Building2" className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">H&C Logistics</h3>
              <p className="text-muted-foreground mb-4">
                Ведущий 5PL-оператор с контрактами с крупными 3PL и 2PL операторами. Мы обеспечиваем полный цикл логистических услуг от планирования до финальной доставки.
              </p>
              <ul className="space-y-2">
                {['РЖД-службы', 'Авиакомпании', 'Морские перевозчики', 'Распределительные комплексы'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Icon name="CheckCircle2" className="text-accent" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <Icon name="Network" className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">H&C Group</h3>
              <p className="text-muted-foreground mb-4">
                Многопрофильный холдинг, объединяющий лидеров в различных отраслях экономики
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'HardHat', name: 'Строительство' },
                  { icon: 'Heart', name: 'Медицина' },
                  { icon: 'Radio', name: 'Медиа' },
                  { icon: 'ShieldCheck', name: 'Безопасность' },
                  { icon: 'Truck', name: 'Логистика' },
                  { icon: 'Cpu', name: 'IT-разработки' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Icon name={item.icon as any} className="text-accent" size={16} />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Вооруженное сопровождение',
                description: 'Профессиональная охрана грузов специализированной группой с круглосуточным мониторингом',
                features: ['24/7 контроль', 'Спецподготовка', 'GPS-трекинг', 'Реагирование']
              },
              {
                icon: 'FileText',
                title: 'ВЭД',
                description: 'Полный спектр услуг внешнеэкономической деятельности и таможенного оформления',
                features: ['Таможня', 'Сертификация', 'Документация', 'Консультации']
              },
              {
                icon: 'TrendingUp',
                title: 'Крупные возможности',
                description: 'Масштабируемые логистические решения для крупного бизнеса любой сложности',
                features: ['Мультимодальность', 'Склады', 'Оптимизация', 'Аналитика']
              },
              {
                icon: 'Factory',
                title: 'Логистический аутсорсинг',
                description: 'Полная передача логистики на аутсорс для производителей - от склада до клиента',
                features: ['Складирование', 'Транспортировка', 'Дистрибуция', 'Управление запасами']
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:border-primary/50 transition-all group">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <Icon name="ChevronRight" className="text-accent" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Партнеры</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы работаем с ведущими операторами и перевозчиками
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Building2', title: '3PL операторы', desc: 'Крупнейшие операторы' },
              { icon: 'Train', title: 'РЖД-службы', desc: 'Железнодорожные перевозки' },
              { icon: 'Plane', title: 'Авиакомпании', desc: 'Воздушные грузоперевозки' },
              { icon: 'Ship', title: 'Морские', desc: 'Морские перевозчики' },
              { icon: 'Package', title: '2PL операторы', desc: 'Проверенные партнеры' },
              { icon: 'Warehouse', title: 'Комплексы', desc: 'Распределительные центры' },
              { icon: 'Truck', title: 'Автопарк', desc: 'Автомобильные перевозки' },
              { icon: 'Container', title: 'Контейнеры', desc: 'Контейнерные перевозки' }
            ].map((partner, idx) => (
              <Card key={idx} className="p-6 bg-card border-border hover:border-primary/50 transition-all text-center">
                <Icon name={partner.icon as any} className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="font-bold mb-1">{partner.title}</h3>
                <p className="text-sm text-muted-foreground">{partner.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Карьера</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Присоединяйтесь к команде профессионалов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-border">
              <Icon name="Heart" className="text-accent mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Социальный пакет</h3>
              <ul className="space-y-3">
                {[
                  'ДМС для сотрудника и семьи',
                  'Психологическая поддержка 24/7',
                  'Корпоративная ипотека',
                  'Фитнес-компенсация',
                  'Обучение и развитие',
                  'Корпоративные мероприятия'
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="CheckCircle2" className="text-accent flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <Icon name="Briefcase" className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Отправить резюме</h3>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо! Ваше резюме отправлено. Мы свяжемся с вами в ближайшее время.');
              }}>
                <div>
                  <Label htmlFor="name">ФИО</Label>
                  <Input id="name" placeholder="Иванов Иван Иванович" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div>
                  <Label htmlFor="position">Желаемая позиция</Label>
                  <Input id="position" placeholder="Менеджер по логистике" required />
                </div>
                <div>
                  <Label htmlFor="message">О себе</Label>
                  <Textarea id="message" placeholder="Расскажите о своем опыте..." rows={4} required />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить резюме
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Контакты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Phone', title: 'Телефон', value: '+7 (495) 123-45-67', link: 'tel:+74951234567' },
              { icon: 'Mail', title: 'Email', value: 'info@hc-logistics.ru', link: 'mailto:info@hc-logistics.ru' },
              { icon: 'MapPin', title: 'Адрес', value: 'Москва, ул. Примерная, д.1', link: '#' }
            ].map((contact, idx) => (
              <Card key={idx} className="p-8 bg-card border-border hover:border-primary/50 transition-all text-center">
                <Icon name={contact.icon as any} className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="font-bold mb-2">{contact.title}</h3>
                <a href={contact.link} className="text-accent hover:underline">
                  {contact.value}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/391cf7fb-f0a2-4c3e-8cb3-d0e03e0922a6.png" 
              alt="H&C Logistics" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-gradient font-bold">H&C Logistics</span>
          </div>
          <p>© 2024 H&C Logistics. Часть холдинга H&C Group. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;