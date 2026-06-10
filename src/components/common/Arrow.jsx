export function Arrow({ direction = 'right' }) {
  return <span aria-hidden="true">{direction === 'left' ? '←' : '→'}</span>
}
