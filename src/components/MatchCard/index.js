// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    venue,
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = matchCardDetails
  return (
    <li>
      <div className="card-background">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="card-logo"
        />
        <p className="para-normal">{competingTeam}</p>
        <p className="para-normal">{venue}</p>
        <p className="para-normal">{matchStatus}</p>
        <p className="para-normal">{result}</p>
      </div>
    </li>
  )
}
export default MatchCard
