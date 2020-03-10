import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(`/map/${this.state.search}`)
  }

  handleClick = (e) => {
    console.log(e.target.id)
    localStorage.setItem('skill', e.target.id)
  }

  render() {
    return (
      <>
        <div className="hero-body">
          <form onSubmit={this.handleSubmit} className="search-bar">
            <div className="search">
              <input type="text" className="search-text" placeholder="What's your postcode?" onChange={this.handleChange} />
              <button type="submit" className="search-button">
                <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863927/Chow%20Vow/search_yofphr.png" />
              </button>
            </div>
          </form>
          <a href="#skills" className="arrow"><img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863923/Chow%20Vow/arrow_dxoubk.png" /></a>
        </div>
        <section>
          <div className="wrapper" id="skills">
            <div className="columns is-mobile is-multiline">
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863923/Chow%20Vow/african_v4eh1g.jpg" alt="African" id="African" />
                  <div className="border" id="African">
                    <h2 id="African">African</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863924/Chow%20Vow/caribbean_d3ntq1.jpg" alt="Caribbean" id="Caribbean"/>
                  <div className="border" id="Caribbean">
                    <h2 id="Caribbean">Caribbean</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863924/Chow%20Vow/chinese_vyakui.jpg" alt="Chinese" id="Chinese"/>
                  <div className="border" id="Chinese">
                    <h2 id="Chinese">Chinese</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863924/Chow%20Vow/french_su7rfz.jpg" alt="French" id="French"/>
                  <div className="border" id="French">
                    <h2 id="French">French</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863925/Chow%20Vow/greek_slm8w3.jpg" alt="Greek" id="Greek"/>
                  <div className="border" id="Greek">
                    <h2 id="Greek">Greek</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863926/Chow%20Vow/indian_biblc2.jpg" alt="Indian" id="Indian"/>
                  <div className="border" id="Indian">
                    <h2 id="Indian">Indian</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863926/Chow%20Vow/italian_dxewpk.jpg" alt="Italian" id="Italian"/>
                  <div className="border" id="Italian">
                    <h2 id="Italian">Italian</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863925/Chow%20Vow/japanese_hykvvp.jpg" alt="Japanese" id="Japanese"/>
                  <div className="border" id="Japanese">
                    <h2 id="Japanese">Japanese</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863925/Chow%20Vow/korean_snu3i9.jpg" alt="Korean" id="Korean"/>
                  <div className="border" id="Korean">
                    <h2 id="Korean">Korean</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863926/Chow%20Vow/mexican_bscz2x.jpg" alt="Mexican" id="Mexican"/>
                  <div className="border" id="Mexican">
                    <h2 id="Mexican">Mexican</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863926/Chow%20Vow/moroccan_knph94.jpg" alt="Moroccan" id="Moroccan" />
                  <div className="border" id="Moroccan">
                    <h2 id="Moroccan">Moroccan</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863924/Chow%20Vow/asian_rs2lri.jpg" alt="South-East Asian" id="South-East Asian"/>
                  <div className="border" id="South-East Asian">
                    <h2 id="South-East Asian">South-East Asian</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863927/Chow%20Vow/spanish_wrkj2p.jpg" alt="Spanish" id="Spanish"/>
                  <div className="border" id="Spanish">
                    <h2 id="Spanish">Spanish</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863927/Chow%20Vow/turkish_cvubet.jpg" alt="Turkish/Middle-Eastern" id="Turkish/Middle-Eastern"/>
                  <div className="border" id="Turkish/Middle-Eastern">
                    <h2 id="Turkish/Middle-Eastern">Turkish/Middle-Eastern</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863928/Chow%20Vow/vegan_xld1oh.jpg" alt="Vegan" id="Vegan" />
                  <div className="border" id="Vegan">
                    <h2 id="Vegan">Vegan</h2>
                  </div>
                </Link>
              </div>
              <div className="skill column is-one-quarter-desktop is-half-tablet is-full-mobile">
                <Link onClick={this.handleClick} to="/chefs">
                  <img src="https://res.cloudinary.com/dqrkw1z1a/image/upload/v1583863927/Chow%20Vow/vegetarian_jlpi0n.jpg" alt="Vegetarian" id="Vegetarian"/>
                  <div className="border" id="Vegetarian">
                    <h2 id="Vegetarian">Vegetarian</h2>
                  </div>
                </Link>
              </div>
            </div >
          </div >
        </section >
      </>
    )
  }
}

export default Home