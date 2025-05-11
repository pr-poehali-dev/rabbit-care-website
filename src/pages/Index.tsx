
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#E5DEFF] to-[#FDE1D3] shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐰</span>
            <h1 className="text-2xl font-bold text-[#6E59A5]">КроликоВод</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-[#403E43] hover:text-[#9b87f5] transition-colors font-medium">Главная</a>
            <a href="#" className="text-[#403E43] hover:text-[#9b87f5] transition-colors font-medium">О нас</a>
            <a href="#" className="text-[#403E43] hover:text-[#9b87f5] transition-colors font-medium">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1A1F2C] mb-4">
              Всё для счастливой жизни вашего кролика
            </h1>
            <p className="text-lg text-[#8E9196] mb-8">
              Полезные советы, рекомендации по питанию и уходу за вашим пушистым другом в одном месте.
            </p>
            <button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
              Узнать больше
            </button>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=774&auto=format&fit=crop"
              alt="Милый кролик" 
              className="rounded-lg shadow-xl w-full h-auto max-h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-16 container mx-auto px-4">
        <Tabs
          defaultValue="home"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mx-auto max-w-4xl"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2 bg-[#F2FCE2] p-2">
              <TabsTrigger 
                value="home" 
                className="flex items-center gap-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                <Icon name="Home" size={16} />
                <span className="hidden md:inline">Главная</span>
              </TabsTrigger>
              <TabsTrigger 
                value="health" 
                className="flex items-center gap-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                <Icon name="Heart" size={16} />
                <span className="hidden md:inline">Здоровье</span>
              </TabsTrigger>
              <TabsTrigger 
                value="nutrition" 
                className="flex items-center gap-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                <Icon name="Apple" size={16} />
                <span className="hidden md:inline">Питание</span>
              </TabsTrigger>
              <TabsTrigger 
                value="care" 
                className="flex items-center gap-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                <Icon name="Scissors" size={16} />
                <span className="hidden md:inline">Уход</span>
              </TabsTrigger>
              <TabsTrigger 
                value="gallery" 
                className="flex items-center gap-2 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                <Icon name="Image" size={16} />
                <span className="hidden md:inline">Галерея</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="home" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[#6E59A5]">Добро пожаловать на КроликоВод!</CardTitle>
                <CardDescription className="text-center">
                  Ваш путеводитель в мире заботы о кроликах
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-[#F2FCE2] p-6 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                    <div className="bg-white w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center">
                      <Icon name="Heart" className="text-[#9b87f5]" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Здоровье</h3>
                    <p className="text-sm text-gray-600">Советы по поддержанию здоровья вашего питомца</p>
                  </div>
                  <div className="bg-[#FDE1D3] p-6 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                    <div className="bg-white w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center">
                      <Icon name="Apple" className="text-[#9b87f5]" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Питание</h3>
                    <p className="text-sm text-gray-600">Правильное питание - залог долгой жизни</p>
                  </div>
                  <div className="bg-[#E5DEFF] p-6 rounded-lg shadow-sm text-center transform transition-transform hover:scale-105">
                    <div className="bg-white w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center">
                      <Icon name="Home" className="text-[#9b87f5]" size={24} />
                    </div>
                    <h3 className="font-semibold mb-2">Жилье</h3>
                    <p className="text-sm text-gray-600">Комфортное жилье для счастливого кролика</p>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#6E59A5]">Почему стоит завести кролика?</h3>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <ul className="space-y-3 list-disc pl-6">
                      <li>Кролики - ласковые и общительные животные</li>
                      <li>Они относительно неприхотливы в уходе</li>
                      <li>Могут быть приучены к лотку как кошки</li>
                      <li>Не требуют выгула на улице</li>
                      <li>Подходят для содержания в квартире</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[#6E59A5]">Здоровье кролика</CardTitle>
                <CardDescription className="text-center">
                  Важные аспекты здоровья вашего питомца
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="Stethoscope" className="mr-2 text-[#9b87f5]" size={20} />
                      Признаки здорового кролика
                    </h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Блестящая шерсть, чистые глаза и уши</li>
                      <li>Активность и любопытство</li>
                      <li>Хороший аппетит</li>
                      <li>Нормальный стул (маленькие твердые шарики)</li>
                      <li>Чистый нос без выделений</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="AlertTriangle" className="mr-2 text-[#9b87f5]" size={20} />
                      Тревожные симптомы
                    </h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Отказ от еды более 12 часов</li>
                      <li>Затрудненное дыхание</li>
                      <li>Жидкий стул или его отсутствие</li>
                      <li>Наклоненная в сторону голова</li>
                      <li>Повышенная температура</li>
                    </ul>
                    <div className="mt-4 p-4 bg-[#FDE1D3] rounded-lg">
                      <p className="text-sm font-medium">⚠️ При обнаружении этих симптомов немедленно обратитесь к ветеринару!</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="CalendarCheck" className="mr-2 text-[#9b87f5]" size={20} />
                      Профилактические меры
                    </h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Ежегодная вакцинация</li>
                      <li>Регулярный осмотр у ветеринара (раз в 6-12 месяцев)</li>
                      <li>Поддержание чистоты в клетке</li>
                      <li>Правильное питание</li>
                      <li>Защита от перегрева и сквозняков</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nutrition" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[#6E59A5]">Питание кролика</CardTitle>
                <CardDescription className="text-center">
                  Рекомендации по правильному питанию
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="Check" className="mr-2 text-green-500" size={20} />
                      Рекомендуемые продукты
                    </h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Сено (должно составлять 80% рациона)</li>
                      <li>Свежая зелень (петрушка, укроп, шпинат)</li>
                      <li>Овощи (морковь, огурец, кабачок)</li>
                      <li>Специальный гранулированный корм</li>
                      <li>Чистая вода (всегда в свободном доступе)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="X" className="mr-2 text-red-500" size={20} />
                      Запрещенные продукты
                    </h3>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Шоколад и сладости</li>
                      <li>Картофель, бобовые, лук, чеснок</li>
                      <li>Авокадо</li>
                      <li>Молочные продукты</li>
                      <li>Хлеб и выпечка</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Icon name="Clock" className="mr-2 text-[#9b87f5]" size={20} />
                    Режим питания
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F2FCE2]">
                          <th className="border px-4 py-2 text-left">Время</th>
                          <th className="border px-4 py-2 text-left">Корм</th>
                          <th className="border px-4 py-2 text-left">Количество</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">Утро</td>
                          <td className="border px-4 py-2">Гранулированный корм</td>
                          <td className="border px-4 py-2">1-2 столовые ложки</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border px-4 py-2">День</td>
                          <td className="border px-4 py-2">Свежие овощи и зелень</td>
                          <td className="border px-4 py-2">1 чашка на 2 кг веса</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Весь день</td>
                          <td className="border px-4 py-2">Сено</td>
                          <td className="border px-4 py-2">Неограниченно</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    * Рацион может отличаться в зависимости от возраста, веса и здоровья кролика.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="care" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[#6E59A5]">Уход за кроликом</CardTitle>
                <CardDescription className="text-center">
                  Советы по правильному уходу за вашим питомцем
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="Home" className="mr-2 text-[#9b87f5]" size={20} />
                      Жильё и обустройство
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Кролику необходимо просторное жилье с местом для еды, игр и отдыха.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#F2FCE2] p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Требования к клетке:</h4>
                        <ul className="space-y-1 list-disc pl-6 text-sm">
                          <li>Минимальный размер: 120х60х60 см</li>
                          <li>Надежная конструкция</li>
                          <li>Нескользкое покрытие дна</li>
                          <li>Удобный доступ для уборки</li>
                        </ul>
                      </div>
                      <div className="bg-[#E5DEFF] p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Необходимые аксессуары:</h4>
                        <ul className="space-y-1 list-disc pl-6 text-sm">
                          <li>Кормушка и поилка</li>
                          <li>Туалетный лоток</li>
                          <li>Домик для уединения</li>
                          <li>Игрушки для жевания</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Icon name="Scissors" className="mr-2 text-[#9b87f5]" size={20} />
                      Груминг и гигиена
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-[#FDE1D3] p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Расчесывание:</h4>
                        <p className="text-sm">
                          Короткошерстных кроликов следует расчесывать 1-2 раза в неделю,
                          длинношерстных - ежедневно, особенно в период линьки.
                        </p>
                      </div>
                      <div className="bg-[#F2FCE2] p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Купание:</h4>
                        <p className="text-sm">
                          Кроликов обычно не купают! Они сами чистят себя. В особых случаях 
                          возможна местная чистка загрязнений влажной тканью.
                        </p>
                      </div>
                      <div className="bg-[#E5DEFF] p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Уход за когтями:</h4>
                        <p className="text-sm">
                          Когти нужно подстригать раз в 1-2 месяца специальными когтерезами.
                          Будьте осторожны, чтобы не задеть кровеносные сосуды.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[#6E59A5]">Галерея кроликов</CardTitle>
                <CardDescription className="text-center">
                  Фотографии наших пушистых друзей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1535241749838-299277b6305f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Кролик" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1517750199383-5442eaf9e041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Кролик" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1591561582301-7ce6588cc286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVubnl8ZW58MHx8MHx8fDA%3D" 
                    alt="Кролик" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1656565565541-95c0c38ab83c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJ1bm55fGVufDB8fDB8fHww" 
                    alt="Кролик" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFiYml0fGVufDB8fDB8fHww" 
                    alt="Кролик" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1619447998919-632e9e8b07d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1bm55fGVufDB8fDB8fHww" 
                    alt="Кролик" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 italic">Присылайте фотографии ваших питомцев для нашей галереи!</p>
                  <button className="mt-4 bg-[#9b87f5] hover:bg-[#7E69AB] text-white font-medium py-2 px-4 rounded transition-colors">
                    Загрузить фото
                  </button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🐰</span>
                <h2 className="text-xl font-bold">КроликоВод</h2>
              </div>
              <p className="text-gray-400 max-w-xs">
                Всё, что нужно знать для счастливой жизни вашего питомца
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Разделы</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Здоровье</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Питание</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Уход</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">О проекте</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Поддержка</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Связаться</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-gray-400" />
                    <a href="mailto:info@krolikovod.ru" className="text-gray-400 hover:text-white transition-colors">
                      info@krolikovod.ru
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-gray-400" />
                    <a href="tel:+78001234567" className="text-gray-400 hover:text-white transition-colors">
                      8 (800) 123-45-67
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 КроликоВод. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
