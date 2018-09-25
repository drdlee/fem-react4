//your code goes here
const Pet = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h1', {}, props.breed)
  ]);
};

class App extends React.Component {
  handleClick() {
    alert('You Clicked the title');
  }
  render() {
    return React.createElement('div', { onClick: this.handleClick }, [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: 'Luna',
        animal: 'dog',
        breed: 'Havanese'
      }),
      React.createElement(Pet, {
        name: 'Jiggly',
        animal: 'bird',
        breed: 'Kakaktua'
      }),
      React.createElement(Pet, {
        name: 'Leon',
        animal: 'cat',
        breed: 'Lion'
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
