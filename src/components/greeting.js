import { Component } from "react"

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: "It's nice to see you!",
    }
  }

  componentDidMount() {
    let a = Math.floor(Math.random() * Math.floor(4) + 1)
    console.log(a)

    switch (a) {
      case 1:
        this.setState({
          greeting: "It's nice to see you!",
        })
        break
      case 2:
        this.setState({
          greeting: "Welcome to my portfolio!",
        })
        break
      case 3:
        this.setState({
          greeting: "How are you doing today?",
        })
        break
      case 4:
      default:
        this.setState({
          greeting: "Come and take a look!",
        })
        break
    }
  }
  render() {
    return this.state.greeting
  }
}

export default Greeting
