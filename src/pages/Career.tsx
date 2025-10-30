import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/391cf7fb-f0a2-4c3e-8cb3-d0e03e0922a6.png" 
              alt="H&C Logistics" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">H&C Logistics</h1>
              <p className="text-xs text-muted-foreground">5PL оператор</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm hover:text-primary transition-colors">Главная</Link>
            <Link to="/career" className="text-sm text-primary font-medium">Карьера</Link>
          </div>

          <Link to="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              На главную
            </Button>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Карьера в H&C Logistics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Присоединяйтесь к команде профессионалов и развивайтесь в динамичной индустрии логистики
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-card border-border">
              <Icon name="Heart" className="text-accent mb-4" size={40} />
              <h2 className="text-3xl font-bold mb-6">Социальный пакет</h2>
              <p className="text-muted-foreground mb-6">
                Мы заботимся о наших сотрудниках и предлагаем расширенный социальный пакет с уникальными преимуществами
              </p>
              <ul className="space-y-4">
                {[
                  { icon: 'Heart', title: 'ДМС для сотрудника и семьи', desc: 'Полис ДМС с расширенным покрытием' },
                  { icon: 'Brain', title: 'Психологическая поддержка 24/7', desc: 'Конфиденциальная помощь специалистов' },
                  { icon: 'Home', title: 'Корпоративная ипотека', desc: 'Выгодные условия для покупки жилья' },
                  { icon: 'Dumbbell', title: 'Фитнес-компенсация', desc: 'Оплата абонемента в спортзал' },
                  { icon: 'GraduationCap', title: 'Обучение и развитие', desc: 'Тренинги, курсы, конференции' },
                  { icon: 'Users', title: 'Корпоративные мероприятия', desc: 'Тимбилдинги и праздники' }
                ].map((benefit, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={benefit.icon as any} className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <Icon name="Briefcase" className="text-primary mb-4" size={40} />
              <h2 className="text-3xl font-bold mb-6">Отправить резюме</h2>
              <p className="text-muted-foreground mb-6">
                Заполните форму, и наш HR-менеджер свяжется с вами в течение 2 рабочих дней
              </p>
              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо! Ваше резюме отправлено. Мы свяжемся с вами в ближайшее время.');
              }}>
                <div>
                  <Label htmlFor="name">ФИО *</Label>
                  <Input id="name" placeholder="Иванов Иван Иванович" required />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>
                <div>
                  <Label htmlFor="position">Желаемая позиция *</Label>
                  <Input id="position" placeholder="Менеджер по логистике" required />
                </div>
                <div>
                  <Label htmlFor="experience">Опыт работы (лет)</Label>
                  <Input id="experience" type="number" placeholder="3" min="0" />
                </div>
                <div>
                  <Label htmlFor="message">О себе *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о своем опыте работы, навыках и достижениях..." 
                    rows={6} 
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить резюме
                </Button>
              </form>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-gradient">Почему H&C Logistics?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'TrendingUp',
                  title: 'Карьерный рост',
                  description: 'Прозрачная система повышения и развития карьеры внутри компании'
                },
                {
                  icon: 'Award',
                  title: 'Лидер рынка',
                  description: 'Работайте с крупнейшими проектами и партнерами в индустрии'
                },
                {
                  icon: 'Users',
                  title: 'Сильная команда',
                  description: 'Окружите себя профессионалами и единомышленниками'
                },
                {
                  icon: 'Lightbulb',
                  title: 'Инновации',
                  description: 'Внедряйте новые технологии и решения в логистике'
                },
                {
                  icon: 'Globe',
                  title: 'Масштаб',
                  description: 'Работайте с международными проектами и партнерами'
                },
                {
                  icon: 'DollarSign',
                  title: 'Достойная оплата',
                  description: 'Конкурентная зарплата и премии за результаты'
                }
              ].map((reason, idx) => (
                <Card key={idx} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={reason.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <div className="text-center max-w-3xl mx-auto">
              <Icon name="Rocket" className="mx-auto mb-6 text-primary" size={64} />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Заполните форму выше или напишите нам напрямую на hr@hc-logistics.ru
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="mailto:hr@hc-logistics.ru">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Написать в HR
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/">
                    <Icon name="ArrowLeft" className="mr-2" size={20} />
                    На главную
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

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

export default Career;
