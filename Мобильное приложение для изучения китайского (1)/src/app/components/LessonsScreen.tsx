import { useState } from 'react';
import { LessonCard } from '@/app/components/LessonCard';
import { CharacterCard } from '@/app/components/CharacterCard';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'Урок 1: Основные приветствия',
    description: 'Научитесь здороваться по-китайски',
    progress: 100,
    isLocked: false,
    isCompleted: true,
    characters: [
      { character: '你', pinyin: 'nǐ', translation: 'ты', example: '你好 - Привет' },
      { character: '好', pinyin: 'hǎo', translation: 'хороший', example: '你好 - Привет' },
    ],
  },
  {
    id: 2,
    title: 'Урок 2: Числа 1-10',
    description: 'Изучите китайские числительные',
    progress: 60,
    isLocked: false,
    isCompleted: false,
    characters: [
      { character: '一', pinyin: 'yī', translation: 'один', example: '一个人 - один человек' },
      { character: '二', pinyin: 'èr', translation: 'два', example: '二月 - февраль' },
      { character: '三', pinyin: 'sān', translation: 'три', example: '三天 - три дня' },
      { character: '四', pinyin: 'sì', translation: 'четыре', example: '四点 - четыре часа' },
      { character: '五', pinyin: 'wǔ', translation: 'пять', example: '五分钟 - пять минут' },
    ],
  },
  {
    id: 3,
    title: 'Урок 3: Семья',
    description: 'Названия членов семьи',
    progress: 0,
    isLocked: false,
    isCompleted: false,
    characters: [
      { character: '爸', pinyin: 'bà', translation: 'папа', example: '爸爸 - отец' },
      { character: '妈', pinyin: 'mā', translation: 'мама', example: '妈妈 - мать' },
      { character: '哥', pinyin: 'gē', translation: 'старший брат', example: '哥哥 - старший брат' },
    ],
  },
  {
    id: 4,
    title: 'Урок 4: Еда и напитки',
    description: 'Базовая лексика для кафе',
    progress: 0,
    isLocked: true,
    isCompleted: false,
    characters: [],
  },
];

interface LessonsScreenProps {
  onBack: () => void;
}

export function LessonsScreen({ onBack }: LessonsScreenProps) {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  if (selectedLesson !== null) {
    const lesson = lessons.find((l) => l.id === selectedLesson);
    if (!lesson) return null;

    const currentChar = lesson.characters[currentCharIndex];

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setSelectedLesson(null);
              setCurrentCharIndex(0);
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h2 className="font-bold">{lesson.title}</h2>
            <p className="text-sm text-gray-600">
              Иероглиф {currentCharIndex + 1} из {lesson.characters.length}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          {lesson.characters.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded-full ${
                index <= currentCharIndex ? 'bg-red-500' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        <CharacterCard
          character={currentChar.character}
          pinyin={currentChar.pinyin}
          translation={currentChar.translation}
          example={currentChar.example}
        />

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setCurrentCharIndex(Math.max(0, currentCharIndex - 1))}
            disabled={currentCharIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Назад
          </Button>
          <Button
            className="flex-1 bg-red-600 hover:bg-red-700"
            onClick={() => {
              if (currentCharIndex < lesson.characters.length - 1) {
                setCurrentCharIndex(currentCharIndex + 1);
              } else {
                setSelectedLesson(null);
                setCurrentCharIndex(0);
              }
            }}
          >
            {currentCharIndex < lesson.characters.length - 1 ? (
              <>
                Далее
                <ChevronRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              'Завершить'
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-bold">Мои уроки</h2>
      </div>

      <div className="space-y-3">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            {...lesson}
            onClick={() => setSelectedLesson(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
}
