import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { StarsBackground } from "@/components/ui/stars-background";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'games', label: 'Игры', icon: 'Gamepad2' },
    { id: 'tasks', label: 'Задания', icon: 'Target' },
    { id: 'profile', label: 'Профиль', icon: 'User' }
  ];

  const stats = [
    { value: '2.5K', label: 'Баланс', color: 'text-casino-gold' },
    { value: '15', label: 'Уровень', color: 'text-casino-amber' },
    { value: '7', label: 'Серия', color: 'text-casino-orange' }
  ];

  return (
    <div className="min-h-screen bg-casino-space font-roboto relative overflow-hidden">
      <StarsBackground />
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" fill="#d4af37"/>
            </svg>
          </div>
          <h1 className="text-casino-gold font-medium">StarsHub</h1>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-casino-gold">
              <div className="text-black text-sm font-bold">😊</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-casino-dark border-casino-card" align="end">
            <DropdownMenuItem className="text-casino-white hover:bg-casino-card">
              <Icon name="User" size={16} />
              <span className="ml-2">Профиль</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-white hover:bg-casino-card">
              <Icon name="Settings" size={16} />
              <span className="ml-2">Настройки</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-casino-white hover:bg-casino-card">
              <Icon name="Trophy" size={16} />
              <span className="ml-2">Достижения</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-32 relative z-10">
        {/* Central Avatar */}
        <div className="flex justify-center mb-8 mt-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-b from-casino-gold to-casino-orange flex items-center justify-center border-4 border-casino-gold/30">
              <div className="text-6xl">🐸</div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" fill="#d4af37"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-casino-gold mb-2" style={{
            background: 'linear-gradient(45deg, #d4af37, #ff8c00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            STARSHUB
          </h1>
          <div className="flex items-center justify-center space-x-2 text-casino-gray text-sm">
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" fill="#d4af37"/>
              </svg>
            </div>
            <span>Premium Gaming Experience</span>
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" fill="#d4af37"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mb-12 px-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-casino-gray text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-casino-dark border border-casino-card rounded-2xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-black" />
              </div>
            </div>
            <h3 className="text-casino-white font-semibold text-center mb-2">Играть</h3>
            <p className="text-casino-gray text-sm text-center mb-4">Начать игру</p>
          </div>

          <div className="bg-casino-dark border border-casino-card rounded-2xl p-6">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-casino-gold rounded-full flex items-center justify-center">
                <Icon name="Trophy" size={24} className="text-black" />
              </div>
            </div>
            <h3 className="text-casino-white font-semibold text-center mb-2">Задания</h3>
            <p className="text-casino-gray text-sm text-center mb-4">Получить награды</p>
          </div>
        </div>

        {/* Daily Bonus */}
        <div className="bg-casino-dark border border-casino-card rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-casino-gold rounded-full flex items-center justify-center">
                <Icon name="Gift" size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-casino-white font-semibold">Ежедневный бонус</h3>
              </div>
            </div>
            <Button className="bg-casino-gold hover:bg-casino-amber text-black font-semibold px-6">
              Получить
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-casino-dark border-t border-casino-card">
        <div className="flex justify-around py-3">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center p-2 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'text-casino-gold'
                  : 'text-casino-gray hover:text-casino-white'
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