import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Award, Calendar, BookOpen, Target } from 'lucide-react';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-bold">Мой профиль</h2>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            АИ
          </div>
          <div>
            <h3 className="text-xl font-bold">Алексей Иванов</h3>
            <p className="text-gray-600">Уровень HSK 2</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>До следующего уровня</span>
            <span className="font-semibold">45%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: '45%' }} />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm text-gray-600">Дней подряд</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-600">Уроков</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-green-500" />
            </div>
            <p className="text-2xl font-bold">45</p>
            <p className="text-sm text-gray-600">Иероглифов</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-purple-500" />
            </div>
            <p className="text-2xl font-bold">8</p>
            <p className="text-sm text-gray-600">Наград</p>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Достижения</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            { emoji: '🔥', label: 'Огонь' },
            { emoji: '⭐', label: 'Звезда' },
            { emoji: '🎯', label: 'Цель' },
            { emoji: '🏆', label: 'Трофей' },
            { emoji: '📚', label: 'Книги' },
            { emoji: '✨', label: 'Искра' },
            { emoji: '🎓', label: 'Учеба' },
            { emoji: '💪', label: 'Сила' },
          ].map((achievement, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center p-2"
            >
              <div className="text-3xl mb-1">{achievement.emoji}</div>
              <p className="text-xs text-gray-600 text-center">{achievement.label}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-3">История обучения</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Урок 2: Числа 1-10</p>
              <p className="text-sm text-gray-600">Вчера в 18:30</p>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-semibold">+5 🪙</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Домашнее задание #3</p>
              <p className="text-sm text-gray-600">2 дня назад</p>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-semibold">+10 🪙</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Урок 1: Приветствия</p>
              <p className="text-sm text-gray-600">3 дня назад</p>
            </div>
            <div className="text-right">
              <p className="text-green-600 font-semibold">+5 🪙</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
