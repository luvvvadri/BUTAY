interface GalleryProps {
  productName: string;
  count?: number;
}

/**
 * Labeled placeholder blocks — no real product photography exists yet
 * (Design System §9, PENDIENTE DE DEFINIR). Main image large, the
 * rest as a thumbnail row underneath — a standard ficha de producto
 * layout, not a decision about the real photography direction.
 */
export function Gallery({ productName, count = 3 }: GalleryProps) {
  const thumbnails = count - 1;

  return (
    <div className="flex flex-col gap-2">
      <div
        role="img"
        aria-label={`Placeholder image 1 of ${count} for ${productName}`}
        className="aspect-square rounded-md bg-neutral-100"
      />
      {thumbnails > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: thumbnails }).map((_, index) => (
            <div
              key={index}
              role="img"
              aria-label={`Placeholder image ${index + 2} of ${count} for ${productName}`}
              className="aspect-square rounded-md bg-neutral-100"
            />
          ))}
        </div>
      )}
    </div>
  );
}
