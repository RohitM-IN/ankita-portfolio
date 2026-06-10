export function TagList({ tags, limit }) {
  const visibleTags = typeof limit === 'number' ? tags.slice(0, limit) : tags

  return (
    <div className="tags">
      {visibleTags.map((tag) => (
        <span key={tag.label}>{tag.label}</span>
      ))}
    </div>
  )
}
