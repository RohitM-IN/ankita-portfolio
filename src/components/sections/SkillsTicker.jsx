export function SkillsTicker({ skills }) {
  const tickerSkills = [...skills, ...skills]

  return (
    <div className="ticker" aria-label="Design skills">
      <div>
        {tickerSkills.map((skill, index) => (
          <span key={`${skill}-${index}`}><i />{skill}</span>
        ))}
      </div>
    </div>
  )
}
