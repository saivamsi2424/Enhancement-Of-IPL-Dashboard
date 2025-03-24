// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplCardsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getIplCardsList()
  }

  getIplCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedList = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({iplCardsList: updatedList, isLoading: false})
  }

  render() {
    const {iplCardsList, isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="main-container">
        <div className="headingAndImage-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <div className="iplCards-container">
          <ul className="cardsList">
            {iplCardsList.map(eachCard => (
              <TeamCard key={eachCard.id} cardDetails={eachCard} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
