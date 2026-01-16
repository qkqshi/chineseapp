import { useState } from 'react';
import { HomeworkQuestion } from '@/app/components/HomeworkQuestion';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { ArrowLeft, CheckCircle2, Send } from 'lucide-react';
import { Textarea } from '@/app/components/ui/textarea';

const homeworkData = [
  {
    id: 1,
    question: 'Как сказать "Привет" по-китайски?',
    options: ['你好', '再见', '谢谢', '对不起'],
    correctAnswer: '你好',
  },
  {
    id: 2,
    question: 'Что означает иероглиф "三"?',
    options: ['один', 'два', 'три', 'четыре'],
    correctAnswer: 'три',
  },
  {
    id: 3,
    question: 'Как правильно написать "пять" иероглифом?',
    options: ['四', '五', '六', '七'],
    correctAnswer: '五',
  },
];

interface HomeworkScreenProps {
  onBack: () => void;
}

export function HomeworkScreen({ onBack }: HomeworkScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [essayAnswer, setEssayAnswer] = useState('');

  const handleSelectAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < homeworkData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const correctCount = Object.entries(answers).filter(
    ([index, answer]) => answer === homeworkData[parseInt(index)].correctAnswer
  ).length;

  if (isSubmitted) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold">Домашнее задание</h2>
        </div>

        <Card className="p-6 bg-green-50 border-green-200">
          <div className="text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-800 mb-2">Отправлено!</h3>
            <p className="text-green-700">
              Ваше домашнее задание успешно отправлено на проверку преподавателю.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Результаты тестовой части</h3>
          <div className="text-center mb-4">
            <p className="text-4xl font-bold text-red-600">
              {correctCount}/{homeworkData.length}
            </p>
            <p className="text-gray-600">правильных ответов</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all"
              style={{
                width: `${(correctCount / homeworkData.length) * 100}%`,
              }}
            />
          </div>
        </Card>

        <Button className="w-full bg-red-600 hover:bg-red-700" onClick={onBack}>
          Вернуться
        </Button>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setShowResults(false);
              setCurrentQuestion(0);
            }}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold">Проверка ответов</h2>
        </div>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Ваш результат</h3>
          <div className="text-center mb-4">
            <p className="text-4xl font-bold text-red-600">
              {correctCount}/{homeworkData.length}
            </p>
            <p className="text-gray-600">правильных ответов</p>
          </div>
        </Card>

        <div className="space-y-4">
          {homeworkData.map((q, index) => (
            <HomeworkQuestion
              key={q.id}
              question={q.question}
              options={q.options}
              selectedAnswer={answers[index] || null}
              correctAnswer={q.correctAnswer}
              onSelectAnswer={() => {}}
              showResult={true}
            />
          ))}
        </div>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">Письменное задание</h3>
          <p className="text-sm text-gray-600 mb-3">
            Напишите небольшое сочинение (3-5 предложений) о вашей семье на
            китайском языке. Используйте изученные иероглифы.
          </p>
          <Textarea
            placeholder="Введите ваш ответ здесь..."
            className="min-h-32"
            value={essayAnswer}
            onChange={(e) => setEssayAnswer(e.target.value)}
          />
        </Card>

        <Button
          className="w-full bg-red-600 hover:bg-red-700"
          onClick={handleSubmit}
          disabled={!essayAnswer.trim()}
        >
          <Send className="w-4 h-4 mr-2" />
          Отправить на проверку
        </Button>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / homeworkData.length) * 100;
  const currentQ = homeworkData[currentQuestion];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h2 className="text-xl font-bold">Домашнее задание</h2>
          <p className="text-sm text-gray-600">
            Вопрос {currentQuestion + 1} из {homeworkData.length}
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-red-500 h-2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <HomeworkQuestion
        question={currentQ.question}
        options={currentQ.options}
        selectedAnswer={answers[currentQuestion] || null}
        onSelectAnswer={handleSelectAnswer}
        showResult={false}
      />

      <Button
        className="w-full bg-red-600 hover:bg-red-700"
        onClick={handleNext}
        disabled={!answers[currentQuestion]}
      >
        {currentQuestion < homeworkData.length - 1 ? 'Следующий вопрос' : 'Показать результаты'}
      </Button>
    </div>
  );
}
