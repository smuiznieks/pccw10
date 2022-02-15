const App = () => {
  const { useState } = React;

  let [state, setState] = useState({
    initialized: false,
    productName: null,
    productDescription: null,
    productPrice: null,
  });

  const initializeState = () => {
    console.log('initializing state...');
    // TODO: Here you will set the state object to have values according to the instructions

    return state;
  };
  // you may use this log if needed to ensure you have the correct values in your state
  console.log('State: ', state);
  const { initialized } = state;

  // use string interpolation to construct this
  const stringToReturn = ``;

  if (initialized) {
    return stringToReturn;
  }

  return React.createElement(
    'button',
    { id: 'initial-button', onClick: () => initializeState() },
    'Click here to initialize your state'
  );
};

//---------------
ReactDOM.render(<App />, document.getElementById('jsx-container'));
