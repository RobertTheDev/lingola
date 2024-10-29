import { IVocabularyCollection } from '../types/VocabularyCollection';

export const vocabularyCollections: IVocabularyCollection[] = [
  {
    id: '1',
    icon: '/animals/dog.svg',
    name: 'Animals',
    slug: 'animals',
    words: [
      {
        id: '1',
        collectionId: '1',
        english: 'dog',
        icon: '/animals/dog.svg',
        spanish: 'el perro',
      },
      {
        id: '2',
        collectionId: '1',
        english: 'cat',
        icon: '/animals/cat.svg',
        spanish: 'el gato',
      },
    ],
  },
];
