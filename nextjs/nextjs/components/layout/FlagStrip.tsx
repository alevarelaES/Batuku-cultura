export const FlagStrip = () => {
  const segments = [
    { color: 'bg-cv' },      // Cap-Vert — bleu
    { color: 'bg-primary' }, // Angola — orange
    { color: 'bg-accent' },  // Guinée-Bissau — or
    { color: 'bg-nature' },  // Mozambique — vert
    { color: 'bg-deep' },    // São Tomé — violet
  ]

  return (
    <div className="w-full flex h-[5px]">
      {segments.map((seg, i) => (
        <div key={i} className={`flex-1 ${seg.color}`} />
      ))}
    </div>
  )
}
