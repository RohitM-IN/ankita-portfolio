export function createMailtoLink(email, formData) {
  const subject = encodeURIComponent(formData.get('topic') || 'Portfolio enquiry')
  const body = encodeURIComponent([
    `Name: ${formData.get('name')}`,
    `Email: ${formData.get('email')}`,
    '',
    formData.get('message'),
  ].join('\n'))

  return `mailto:${email}?subject=${subject}&body=${body}`
}
