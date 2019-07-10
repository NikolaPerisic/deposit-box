import React from "react";
import "./DepositBox.scss";
import Display from "../../Components/Display/Display";
import Keypad from "../../Components/Keypad/Keypad";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
//
class DepositBox extends React.Component {
  //
  componentDidMount() {
    document.addEventListener("keydown", el => this.handleKeyPress(el.key));
  }

  componentWillMount() {
    document.removeEventListener("keydown", el => this.handleKeyPress(el.key));
  }

  handleKeyPress = el => {
    if (el === "l") el = "L";
    if ((!isNaN(el) && el !== " ") || el === "L" || el === "*") {
      console.log(el);
      this.props.handleUserInput(el);
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="panel">
        <Display
          isLocked={this.props.isLocked}
          message={this.props.displayMsg}
        />
        <Keypad clickInput={this.handleKeyPress} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLocked: state.depositBox.isLocked,
    displayMsg: state.depositBox.displayMsg
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleUserInput: value => dispatch(actions.handleUserInput(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositBox);
