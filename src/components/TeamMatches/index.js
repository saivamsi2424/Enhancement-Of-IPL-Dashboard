// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import PieChart from '../PieChart'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    teamDetailsList: {},
    isLoading: true,
    won: 0,
    lost: 0,
    draw: 0,
  }

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(eachItem => ({
        umpires: eachItem.umpires,
        result: eachItem.result,
        manOfTheMatch: eachItem.man_of_the_match,
        id: eachItem.id,
        date: eachItem.date,
        venue: eachItem.venue,
        competingTeam: eachItem.competing_team,
        competingTeamLogo: eachItem.competing_team_logo,
        firstInnings: eachItem.first_innings,
        secondInnings: eachItem.second_innings,
        matchStatus: eachItem.match_status,
      })),
    }
    let won = 0
    let lost = 0
    let draw = 0

    const {recentMatches} = updatedData
    recentMatches.forEach(matching => {
      if (matching.matchStatus === 'Won') {
        won += 1
      } else if (matching.matchStatus === 'Lost') {
        lost += 1
      } else {
        draw += 1
      }
    })

    this.setState({
      teamDetailsList: updatedData,
      isLoading: false,
      won,
      draw,
      lost,
    })
    console.log(updatedData)
  }

  render() {
    const {teamDetailsList, isLoading, won, draw, lost} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetailsList
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="main-teamMatch-container">
        <Link to="/">
          <button type="button" className="back-button">
            Back
          </button>
        </Link>
        <PieChart won={won} lost={lost} draw={draw} />
        <img src={teamBannerUrl} alt="team banner" className="banner-image" />
        <p className="latest-matches">Latest Matches</p>
        <LatestMatch matchdetails={latestMatchDetails} />
        <div className="match-card-container">
          <ul className="match-card-container">
            {recentMatches.map(eachItem => (
              <MatchCard key={eachItem.id} matchCardDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default TeamMatches
