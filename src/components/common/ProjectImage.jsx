import { useState } from 'react'

export function ProjectImage({ src, alt, className, loading }) {
  const [hasError, setHasError] = useState(false)

  return (
    <>
      <span className="image-fallback" aria-hidden={!hasError}>{alt}</span>
      {!hasError && (
        <img
          className={className}
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setHasError(true)}
        />
      )}
    </>
  )
}
