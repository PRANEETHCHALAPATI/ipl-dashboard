import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchDetails: {}}

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.getTeamData(id)
  }

  getTeamData = async id => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatch = data.latest_match_details

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: latestMatch.umpires,
        result: latestMatch.result,
        manOfTheMatch: latestMatch.man_of_the_match,
        id: latestMatch.id,
        date: latestMatch.date,
        venue: latestMatch.venue,
        competingTeam: latestMatch.competing_team,
        competingTeamLogo: latestMatch.competing_team_logo,
        firstInnings: latestMatch.first_innings,
        secondInnings: latestMatch.second_innings,
        matchStatus: latestMatch.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }

    this.setState({teamMatchDetails: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, teamMatchDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="section-title">Latest Matches</h1>
            <LatestMatch details={latestMatchDetails} />
            <ul className="match-cards-list">
              {recentMatches.map(each => (
                <MatchCard key={each.id} details={each} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
 
