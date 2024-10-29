'use client';

import Image from 'next/image';
import { useState } from 'react';

import { type IVocabularyWord } from '@/app/types/VocabularyWord';

export default function VocabularyWordCard({
  props,
}: {
  props: IVocabularyWord;
}) {
  const [flipCard, setFlipCard] = useState(false);

  function handleFlipCard() {
    setFlipCard(!flipCard);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleFlipCard();
    }
  }

  return (
    <div
      className="flex w-full flex-col items-center overflow-hidden rounded-lg border-2 border-black bg-white p-6"
      role="button"
      tabIndex={0}
      onClick={handleFlipCard}
      onKeyDown={handleKeyDown}
    >
      <div className="relative aspect-square w-full">
        <Image fill alt="" src={props.icon} />
      </div>

      <p className="mt-6 text-xl font-bold text-black">
        {flipCard ? props.spanish : props.english}
      </p>
    </div>
  );
}
