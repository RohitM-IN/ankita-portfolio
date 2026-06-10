import { useState } from 'react'
import { SectionTitle } from '../common/SectionTitle.jsx'

export function FAQ({ content, items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section shell faq-section" id="faq">
      <SectionTitle eyebrow={content.eyebrow} title={content.title} accent={content.accent} />
      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const answerId = `faq-answer-${index}`

          return (
            <article className={isOpen ? 'is-open' : ''} key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span>{item.question}</span>
                <i aria-hidden="true">{isOpen ? '−' : '+'}</i>
              </button>
              <div id={answerId}><p>{item.answer}</p></div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
