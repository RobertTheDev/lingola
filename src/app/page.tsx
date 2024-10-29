import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-w-full flex-1 flex-col bg-orange-300 p-10">
      <h1 className="text-4xl font-bold">Home</h1>
      <Link href="/vocabulary">Vocabulary</Link>
    </div>
  );
}
