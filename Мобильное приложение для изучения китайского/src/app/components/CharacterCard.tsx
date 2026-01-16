import { Volume2 } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';

interface CharacterCardProps {
  character: string;
  pinyin: string;
  translation: string;
  example?: string;
}

export function CharacterCard({
  character,
  pinyin,
  translation,
  example,
}: CharacterCardProps) {
  const handleSpeak = () => {
    // В реальном приложении здесь была бы аудио озвучка
    console.log(`Озвучка: ${character}`);
  };

  return (
    <Card className="p-6">
      <div className="text-center mb-4">
        <div className="text-8xl mb-2">{character}</div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl text-gray-600">{pinyin}</p>
          <Button
            size="sm"
            variant="ghost"
            className="rounded-full w-8 h-8 p-0"
            onClick={handleSpeak}
          >
            <Volume2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="border-t pt-4">
        <p className="text-lg font-medium text-center mb-2">{translation}</p>
        {example && (
          <p className="text-sm text-gray-600 text-center italic">{example}</p>
        )}
      </div>
    </Card>
  );
}
