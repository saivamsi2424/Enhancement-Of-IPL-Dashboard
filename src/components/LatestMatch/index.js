// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchdetails} = props
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
    matchStatus,
  } = matchdetails
  return (
    <div className="latest-match-container1">
      <div className="content1-container">
        <p className="team-heading">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{matchStatus}</p>
      </div>
      <div className="team-logo-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo-image"
        />
      </div>
      <div className="content-2-container">
        <p className="para">{umpires}</p>
        <p className="para">{manOfTheMatch}</p>
        <p className="para">{firstInnings}</p>
        <p className="para">{secondInnings}</p>
        <p className="para">{matchStatus}</p>
        <p className="para">{result}</p>
      </div>
    </div>
  )
}
export default LatestMatch
