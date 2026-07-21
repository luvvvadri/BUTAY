import { Section } from '@/components/ui/section';

export default function Loading() {
  return (
    <Section>
      <div
        className="animate-pulse space-y-4"
        role="status"
        aria-label="Loading"
      >
        <div className="h-6 w-1/3 rounded bg-neutral-200" />
        <div className="h-4 w-2/3 rounded bg-neutral-200" />
        <div className="h-4 w-1/2 rounded bg-neutral-200" />
      </div>
    </Section>
  );
}
