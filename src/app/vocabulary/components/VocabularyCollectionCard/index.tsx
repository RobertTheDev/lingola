import Image from 'next/image';
import Link from 'next/link';

import { type IVocabularyCollection } from '@/app/types/VocabularyCollection';

export default function VocabularyCollectionCard({
  props,
}: {
  props: IVocabularyCollection;
}) {
  return (
    <Link
      className="flex w-full flex-col items-center overflow-hidden rounded-lg border-2 border-black bg-white p-6"
      href={`/vocabulary/${props.slug}`}
    >
      <div className="relative aspect-square w-full">
        <Image fill alt="" src={props.icon} />
      </div>
      <p className="mt-6 text-xl font-bold text-black">{props.name}</p>
    </Link>
  );
}
