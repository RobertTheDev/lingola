import { type Metadata } from 'next';

import { achievementBadges } from '../data/achievementBadges';
import AchievementBadgeCard from './components/AchievementBadgeCard';

export const metadata: Metadata = {
  title: 'Achievements',
};

export default function AchievementsPage() {
  return (
    <main className="flex min-w-full flex-1 flex-col bg-orange-300 p-10">
      <h1 className="text-4xl font-bold">Achievements</h1>
      <div className="mt-10 grid grid-cols-4 gap-8">
        {achievementBadges.map((achievementBadge) => {
          return (
            <AchievementBadgeCard
              key={achievementBadge.id}
              props={achievementBadge}
            />
          );
        })}
      </div>
    </main>
  );
}
