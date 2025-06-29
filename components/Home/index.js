// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const {teams} = await response.json()

    const formattedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImgUrl: each.team_image_url,
    }))

    this.setState({iplTeamsList: formattedData, isLoading: false})
  }

  render() {
    const {iplTeamsList, isLoading} = this.state

    const element = isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    ) : (
      <>
        <div className="ipl-dashboard-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="teams-container">
          {iplTeamsList.map(each => (
            <TeamCard details={each} key={each.id} />
          ))}
        </div>
      </>
    )

    return <div className="main-container">{element}</div>
  }
}

export default Home
 
