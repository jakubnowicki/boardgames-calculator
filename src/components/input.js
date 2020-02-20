import React from 'react';

class InputNumeric extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }
  }

  adjustValue(v) {
    this.setState({
      value: v.target.value
    });
  }

  render() {
    const { value } = this.state;
    return <input type="number" value={value} onChange={(e) => this.adjustValue(e)}/>;
  }
}

export default InputNumeric;
