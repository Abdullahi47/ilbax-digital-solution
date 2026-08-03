export default function ImageFeature({ src, alt, badge, className = "" }) {
  return (
    <figure className={`relative overflow-hidden rounded-[2rem] bg-white shadow-soft ${className}`}>
      <img src={src} alt={alt} className="h-full min-h-[260px] w-full object-cover" loading="lazy" />
      {badge && (
        <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-navy/88 px-5 py-4 text-white backdrop-blur">
          <p className="text-sm font-bold text-cyan">{badge}</p>
        </figcaption>
      )}
    </figure>
  );
}
