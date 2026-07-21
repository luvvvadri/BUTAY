interface GalleryProps {
  productName: string;
  count?: number;
}

/** Labeled placeholder blocks — no real product photography exists yet (Design System §9, PENDIENTE DE DEFINIR). */
export function Gallery({ productName, count = 3 }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="img"
          aria-label={`Placeholder image ${index + 1} of ${count} for ${productName}`}
          className="aspect-square rounded-md bg-neutral-100"
        />
      ))}
    </div>
  );
}
