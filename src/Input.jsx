import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const content = this.props.success ? null : (
      <form>
        <input type="text" placeholder="make a guess" data-test="field"></input>
        <button type="submit" data-test="button">
          SUBMIT
          {this.props}
        </button>
      </form>
    );

    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
