import { useState } from 'react'
import { createMailtoLink } from '../../utils/contact.js'
import { Arrow } from '../common/Arrow.jsx'
import { SectionTitle } from '../common/SectionTitle.jsx'

export function Contact({ content, contact, socials }) {
  const [isOpeningEmail, setIsOpeningEmail] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsOpeningEmail(true)
    window.location.assign(createMailtoLink(contact.email, new FormData(event.currentTarget)))
    window.setTimeout(() => setIsOpeningEmail(false), 1500)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="shell">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} accent={content.accent} />
        <p className="contact-intro">{contact.description}</p>

        <div className="contact-grid">
          <div className="contact-details">
            <a href={`mailto:${contact.email}`}><span>↗</span>{contact.email}</a>
            <a href={`tel:${contact.phoneLink}`}><span>↗</span>{contact.phone}</a>
            <p><span>●</span>{contact.location}</p>
            <div className="socials">
              {socials.map((social) => (
                <a href={social.link} target="_blank" rel="noreferrer" key={social.name}>{social.name}</a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Name<input required name="name" placeholder="Your name" /></label>
              <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
            </div>
            <label>
              Subject
              <select name="topic" defaultValue="">
                <option value="" disabled>Select a topic</option>
                {contact.formTopics.map((topic) => <option key={topic}>{topic}</option>)}
              </select>
            </label>
            <label>
              Message
              <textarea required name="message" rows="5" placeholder="Tell me about your project or opportunity…" />
            </label>
            <button className="button button-primary" type="submit" disabled={isOpeningEmail}>
              {isOpeningEmail ? content.submittingLabel : content.submitLabel} <Arrow />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
