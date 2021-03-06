URL  :  speedlimit.ccbp.tech


########################################################          ****INDEX.JS****




import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)


#############################################################          *****APP.JS****





import Speedometer from './components/Speedometer'
import './App.css'
const App = () => <Speedometer />
export default App


########################################################             ****APP.CSS****





* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


###################################################              ****COMPONENTS_INDEX.JS****






import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(preState => ({count: preState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(preState => ({count: preState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="para">Speed is {count}mph</h1>
        <p className="para2">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btm-card">
          <button className="button" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button2" type="button" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer



#########################################################################################          ****COMPONENT_INDEX.CSS*****







* {
  box-sizing: border-box;
}
body {
  margin: 0px;
}

.bg-container {
  background-color: #07080c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.heading {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;
}
.para {
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
}
.para2 {
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  color: #cbd5e1;
}
.image {
  height: 300px;
}
.btm-card {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button {
  height: 40px;
  width: 100px;
  background-color: #0b69ff;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  border: 0px;
  margin-right: 20px;
  border-radius: 10px;
}
.button2 {
  height: 40px;
  width: 100px;
  background-color: transparent;
  color: #94a3b8;
  font-family: 'Roboto';
  font-weight: 500;
  border: 1px solid #94a3b8;
  margin-right: 20px;
  border-radius: 10px;
}
