import React from "react";
export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello World React{this.props.id}</div>;
  }
}
