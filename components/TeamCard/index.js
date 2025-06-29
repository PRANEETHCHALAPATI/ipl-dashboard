// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {details} = props

  const {name, teamImgUrl, id} = details

  const link = `/team-matches/${id}`

  return (
    <Link to={link} className="team-card-link">
      <div className="team-card">
        <img src={teamImgUrl} alt={name} />
        <p className="name"> {name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
 
