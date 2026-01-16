import { BookOpen, Lock, CheckCircle2 } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

interface LessonCardProps {
  id: number;
  title: string;
  description: string;
  progress: number;
  isLocked: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export function LessonCard({
  title,
  description,
  progress,
  isLocked,
  isCompleted,
  onClick,
}: LessonCardProps) {
  return (
    <Card
      className={`p-4 cursor-pointer transition-all ${
        isLocked ? 'opacity-50' : 'hover:shadow-lg'
      }`}
      onClick={!isLocked ? onClick : undefined}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isCompleted
              ? 'bg-green-100'
              : isLocked
              ? 'bg-gray-100'
              : 'bg-red-100'
          }`}
        >
          {isLocked ? (
            <Lock className="w-6 h-6 text-gray-400" />
          ) : isCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          ) : (
            <BookOpen className="w-6 h-6 text-red-600" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          {!isLocked && (
            <div className="space-y-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500">{progress}% завершено</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
