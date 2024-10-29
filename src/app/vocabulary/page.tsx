import { type Metadata } from 'next';

import { vocabularyCollections } from '../data/vocabularyCollections';
import VocabularyCollectionCard from './components/VocabularyCollectionCard';

export const metadata: Metadata = {
  title: 'Vocabulary',
};

export default function VocabularyPage() {
  return (
    <main className="flex min-w-full flex-1 flex-col bg-orange-300 p-10">
      <h1 className="text-4xl font-bold">Collections</h1>
      <div className="mt-10 grid grid-cols-4 gap-8">
        {vocabularyCollections.map((collection) => {
          return (
            <VocabularyCollectionCard key={collection.id} props={collection} />
          );
        })}
      </div>
    </main>
  );
}
