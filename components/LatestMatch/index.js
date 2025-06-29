import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details

  return (
    <div className="latest-match-card">
      <div className="match-main-info">
        <div>
          <p className="team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <hr className="separator" />
      <div className="match-breakdown">
        <p>First Innings: {firstInnings}</p>
        <p>Second Innings: {secondInnings}</p>
        <p>Man Of The Match: {manOfTheMatch}</p>
        <p>Umpires: {umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
 
