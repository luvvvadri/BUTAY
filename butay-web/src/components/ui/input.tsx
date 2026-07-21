import { useId, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className' | 'id'
> {
  label: string;
  /** Hides the visible label while keeping it available to assistive technology. */
  hideLabel?: boolean;
  error?: string;
  className?: string;
}

/** Text input with a mandatory, properly associated label — never rendered without one. */
export function Input({
  label,
  hideLabel = false,
  error,
  className,
  ...props
}: InputProps) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={cn(
          'text-foreground font-sans text-sm font-medium',
          hideLabel && 'sr-only',
        )}
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={errorId}
        className={cn(
          'bg-background text-foreground h-11 rounded-md border border-neutral-300 px-3 font-sans text-base',
          'placeholder:text-neutral-500',
          'focus-visible:ring-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
          'disabled:pointer-events-none disabled:opacity-50',
          error && 'border-red-600 focus-visible:ring-red-600',
          className,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} className="font-sans text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
