import { type IVocabularyWord } from './VocabularyWord';

export interface IVocabularyCollection {
  id: string;
  icon: string;
  name: string;
  slug: string;
  words: IVocabularyWord[];
}
