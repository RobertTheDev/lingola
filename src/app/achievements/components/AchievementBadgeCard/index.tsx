import Image from 'next/image';

import { type IAchievementBadge } from '@/app/types/AchievementBadge';

export default function AchievementBadgeCard({
  props,
}: {
  props: IAchievementBadge;
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full overflow-hidden rounded-full border-2 border-black bg-white p-6">
        <div className="relative aspect-square w-full">
          <Image fill alt="" src={props.icon} />
        </div>
      </div>
      <p className="mt-6 text-xl font-bold text-black">{props.name}</p>
    </div>
  );
}
