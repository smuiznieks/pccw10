"use strict";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: {
      name: "",
      residence: {
        city: "",
        country: "",
      },
      profession: "",
    },
  };

  render() {
    return <Details person={this.state} />;
  }
}

const Details = (props) => {
  // TODO: destructure props

  return (
    <div style={{ margin: "1em" }}>
      <div id="name">Name: {props.person.details.name}</div>
      <div id="city">City: {props.person.details.residence.city}</div>
      <div id="country">Country: {props.person.details.residence.country}</div>
      <div id="profession">Profession: {props.person.details.profession}</div>
    </div>
  );
};

ReactDOM.render(React.createElement(Person), document.getElementById("root"));
