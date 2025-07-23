import { useState } from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'tasks', label: 'Задания', icon: 'Target' },
    { id: 'profile', label: 'Профиль', icon: 'User' }
  ];

  const gameFeatures = [
    { emoji: '🎲', title: 'Казино игры', description: 'Классические игры казино с реалистичной физикой' },
    { emoji: '🎰', title: 'Слоты', description: 'Разнообразные игровые автоматы с бонусами' },
    { emoji: '🃏', title: 'Карточные игры', description: 'Покер, блэкджек и другие карточные игры' },
    { emoji: '🏆', title: 'Турниры', description: 'Участвуйте в турнирах и выигрывайте призы' }
  ];

  return (
    <div className="min-h-screen bg-casino-dark font-roboto">
      {/* Header with Profile */}
      <div className="flex justify-between items-center p-4 bg-casino-darker border-b border-casino-gray">
        <div>
          <h1 className="text-xl font-bold text-casino-white">StarsHub</h1>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-casino-gray text-casino-white">
                  U
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-casino-darker border-casino-gray" align="end">
            <DropdownMenuItem className="text-casino-white hover:bg-casino-gray">
              <Icon name="User" size={16} />
              <span className="ml-2">Профиль</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-white hover:bg-casino-gray">
              <Icon name="Settings" size={16} />
              <span className="ml-2">Настройки</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-white hover:bg-casino-gray">
              <Icon name="Trophy" size={16} />
              <span className="ml-2">Достижения</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Content */}
      <div className="p-6 pb-24">
        {/* Intro Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl font-bold text-casino-white mb-4">
            Добро пожаловать в мир азарта
          </h2>
          <p className="text-casino-lightgray text-base leading-relaxed max-w-md mx-auto">
            Премиум казино игры прямо в вашем Telegram. Играйте, выигрывайте и наслаждайтесь настоящим азартом.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          {gameFeatures.map((feature, index) => (
            <div 
              key={feature.title} 
              className="bg-casino-darker border border-casino-gray rounded-lg p-4 animate-fade-in"
              style={{animationDelay: `${index * 150}ms`}}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{feature.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-casino-white font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-casino-lightgray text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <div className="bg-casino-darker border border-casino-gray rounded-lg p-6">
            <h3 className="text-casino-white font-semibold text-lg mb-3">
              Как начать играть?
            </h3>
            <p className="text-casino-lightgray text-sm leading-relaxed">
              Перейдите во вкладку "Игры" чтобы выбрать подходящую игру, 
              или в "Задания" чтобы заработать дополнительные бонусы.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-casino-darker border-t border-casino-gray">
        <div className="flex justify-around py-3">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-casino-white bg-casino-gray'
                  : 'text-casino-lightgray hover:text-casino-white'
              }`}
            >
              <Icon name={item.icon as any} size={20} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;