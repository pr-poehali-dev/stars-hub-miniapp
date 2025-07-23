import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'tasks', label: 'Задания', icon: 'Target' },
    { id: 'profile', label: 'Профиль', icon: 'User' }
  ];

  const gameCards = [
    {
      title: 'Игры',
      description: 'Казино игры, рулетка и многое другое',
      icon: 'Gamepad2',
      gradient: 'from-casino-orange to-casino-purple'
    },
    {
      title: 'Задания',
      description: 'Выполняйте задания и получайте награды',
      icon: 'Target',
      gradient: 'from-casino-purple to-casino-gold'
    },
    {
      title: 'Профиль',
      description: 'Ваша статистика и достижения',
      icon: 'User',
      gradient: 'from-casino-gold to-casino-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-casino-dark font-roboto">
      {/* Header with Profile */}
      <div className="flex justify-between items-center p-4 bg-casino-dark border-b border-casino-purple/20">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-casino-orange to-casino-gold bg-clip-text text-transparent">
            StarsHub
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-r from-casino-orange to-casino-purple text-white">
                  U
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-casino-dark border-casino-purple/20" align="end">
            <DropdownMenuItem className="text-casino-white hover:bg-casino-purple/20">
              <Icon name="User" size={16} />
              <span className="ml-2">Профиль</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-white hover:bg-casino-purple/20">
              <Icon name="Settings" size={16} />
              <span className="ml-2">Настройки</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-white hover:bg-casino-purple/20">
              <Icon name="Trophy" size={16} />
              <span className="ml-2">Достижения</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Content */}
      <div className="p-4 pb-20">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-casino-white mb-2">
            Добро пожаловать в StarsHub! 🎰
          </h1>
          <p className="text-casino-white/70 text-lg">
            Премиум казино игры в вашем Telegram
          </p>
        </div>

        {/* Game Icons Row */}
        <div className="flex justify-center space-x-6 mb-8 animate-scale-in">
          <div className="w-12 h-12 bg-gradient-to-r from-casino-orange to-casino-purple rounded-lg flex items-center justify-center">
            🎲
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-casino-purple to-casino-gold rounded-lg flex items-center justify-center">
            🎰
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-casino-gold to-casino-orange rounded-lg flex items-center justify-center">
            🃏
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-casino-orange to-casino-purple rounded-lg flex items-center justify-center">
            💰
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid gap-4 mb-6">
          {gameCards.map((card, index) => (
            <Card key={card.title} className="bg-casino-white/5 border-casino-purple/20 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${card.gradient} rounded-lg flex items-center justify-center`}>
                    <Icon name={card.icon as any} size={20} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-casino-white text-lg">{card.title}</CardTitle>
                    <CardDescription className="text-casino-white/60">
                      {card.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  className={`w-full bg-gradient-to-r ${card.gradient} hover:opacity-90 text-white border-0`}
                  onClick={() => setActiveTab(card.title.toLowerCase())}
                >
                  Перейти
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Exciting Button */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-casino-orange via-casino-purple to-casino-gold text-white px-8 py-3 text-lg font-bold rounded-full hover:opacity-90 animate-pulse">
            🔥 НАЧАТЬ ИГРАТЬ 🔥
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-casino-dark/95 backdrop-blur-md border-t border-casino-purple/20">
        <div className="flex justify-around py-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-casino-gold bg-casino-purple/20'
                  : 'text-casino-white/60 hover:text-casino-white'
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