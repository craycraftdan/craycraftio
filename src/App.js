import React, { Component } from 'react'
import Particles from 'react-particles-js'
import config from './Assets/particles.json'
import './Styles/App.css'
import Navigation from './Components/Navigation/index'
import Header from './Components/Sections/Header'
import About from './Components/Sections/About'
import Projects from './Components/Sections/Projects'
import Contact from './Components/Sections/Contact'
import Footer from './Components/Sections/Footer'

const styles = {
  particles: {
    position: 'absolute',
    width: '100vw',
    margin: '0',
    padding: '0',
    height: '100vh',
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
}


class App extends Component {
  render() {
    return (
      <div>
          <div style={{height: '100vh'}}>
            <Navigation />
            <Particles style={styles.particles}params={config} />
            <Header />
          </div>
          <About />
          <Projects />
          <Contact />
          <Footer />
      </div>
    );
  }
}

export default App;