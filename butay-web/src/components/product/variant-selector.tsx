'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';
import type { Variant } from '@/types/catalog';

interface VariantSelectorProps {
  variants: Variant[];
}

const optionClass = (selected: boolean) =>
  cn(
    'h-10 min-w-10 rounded-md border px-3 font-sans text-sm capitalize transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    selected
      ? 'border-accent bg-accent text-accent-foreground'
      : 'border-neutral-300 text-foreground hover:bg-neutral-100',
  );

/**
 * Visual selection only — no cart, no checkout (Fase 12 hasn't
 * started). Lets a shopper preview which size/color combinations
 * exist for this SKU.
 */
export function VariantSelector({ variants }: VariantSelectorProps) {
  const sizes = useMemo(
    () => Array.from(new Set(variants.map((v) => v.size))),
    [variants],
  );
  const colors = useMemo(
    () => Array.from(new Set(variants.map((v) => v.color))),
    [variants],
  );

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="flex flex-col gap-4">
      <fieldset>
        <legend className="text-foreground mb-2 font-sans text-sm font-medium">
          Size
        </legend>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              type="button"
              aria-pressed={selectedSize === size}
              onClick={() => setSelectedSize(size)}
              className={optionClass(selectedSize === size)}
            >
              {size}
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend className="text-foreground mb-2 font-sans text-sm font-medium">
          Color
        </legend>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              aria-pressed={selectedColor === color}
              onClick={() => setSelectedColor(color)}
              className={optionClass(selectedColor === color)}
            >
              {color}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
