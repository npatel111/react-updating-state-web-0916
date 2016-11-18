const app = "I don't do much.";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Update our state here...
    this.setState({
      hasBeenClicked: true,
    })
    console.log(this.state.hasBeenClicked);
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? 'not' : null} been clicked yet!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
