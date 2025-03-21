// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, teamImageUrl, name} = cardDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <div className="ipl-card-container">
          <img className="card-image" src={teamImageUrl} alt={`${name}`} />
          <p className="card-heading">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
