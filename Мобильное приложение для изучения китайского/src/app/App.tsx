import { useState } from 'react';
import { HomeScreen } from '@/app/components/HomeScreen';
import { LessonsScreen } from '@/app/components/LessonsScreen';
import { HomeworkScreen } from '@/app/components/HomeworkScreen';
import { ProfileScreen } from '@/app/components/ProfileScreen';
import { BottomNav } from '@/app/components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'lessons':
        return <LessonsScreen onBack={() => setActiveTab('home')} />;
      case 'homework':
        return <HomeworkScreen onBack={() => setActiveTab('home')} />;
      case 'profile':
        return <ProfileScreen onBack={() => setActiveTab('home')} />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
        <div className="p-6 pb-24">{renderScreen()}</div>
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}
