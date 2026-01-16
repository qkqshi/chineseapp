import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

interface HomeworkQuestionProps {
  question: string;
  options: string[];
  selectedAnswer: string | null;
  correctAnswer?: string;
  onSelectAnswer: (answer: string) => void;
  showResult: boolean;
}

export function HomeworkQuestion({
  question,
  options,
  selectedAnswer,
  correctAnswer,
  onSelectAnswer,
  showResult,
}: HomeworkQuestionProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">{question}</h3>
      <div className="space-y-2">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = showResult && option === correctAnswer;
          const isWrong = showResult && isSelected && option !== correctAnswer;

          return (
            <Button
              key={index}
              variant="outline"
              className={`w-full justify-start h-auto py-3 px-4 ${
                isCorrect
                  ? 'bg-green-100 border-green-500'
                  : isWrong
                  ? 'bg-red-100 border-red-500'
                  : isSelected
                  ? 'bg-blue-50 border-blue-500'
                  : ''
              }`}
              onClick={() => !showResult && onSelectAnswer(option)}
              disabled={showResult}
            >
              {option}
            </Button>
          );
        })}
      </div>
    </Card>
  );
}
