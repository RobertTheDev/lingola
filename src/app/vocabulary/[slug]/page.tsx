import { type Metadata } from 'next';

import { vocabularyCollections } from '../../data/vocabularyCollections';
import VocabularyWordCard from './components/VocabularyWordCard';

export const metadata: Metadata = {
  title: 'Learn Vocabulary',
};

export default async function VocabularyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const collection = vocabularyCollections.find(
    (collection) => collection.slug === slug,
  );

  if (!collection) {
    return (
      <main>
        <p>No colection found</p>
      </main>
    );
  }

  return (
    <main className="flex min-w-full flex-1 flex-col bg-orange-300 p-10">
      <h1 className="text-4xl font-bold">{collection.name}</h1>
      <div className="mt-10 grid grid-cols-4 gap-8">
        {collection.words.map((word) => {
          return <VocabularyWordCard key={word.id} props={word} />;
        })}
      </div>
    </main>
  );
}
