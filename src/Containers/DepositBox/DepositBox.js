import React from "react";
import "./DepositBox.scss";
import Display from "../../Components/Display/Display";
import Keypad from "../../Components/Keypad/Keypad";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
//
class DepositBox extends React.Component {
  //
  _submitTimer = null;
  _backlightTimer = null;
  //
  componentDidMount() {
    document.addEventListener("keydown", el => this.handleKeyPress(el.key));
    this.handleDisplayBacklight();
  }

  componentWillMount() {
    document.removeEventListener("keydown", el => this.handleKeyPress(el.key));
  }

  componentDidUpdate(prevState) {
    console.log(prevState.isTouched);
    if (this.props.isTouched) {
      this._timer = setTimeout(() => {
        this.props.reset();
      }, 2000);
    }
    clearTimeout(this._backlightTimer);
    this.handleDisplayBacklight();
  }
  // function for dimming the display after 5 secs of inactivity
  handleDisplayBacklight = () => {
    this._backlightTimer = setTimeout(() => {
      this.props.handleBacklight();
    }, 5000);
  };
  handleKeyPress = el => {
    if (!this.props.isTouched) {
      this.props.reset();
    }
    clearTimeout(this._timer);
    clearTimeout(this._backlightTimer);
    if (el === "l" || el === "L") {
      return this.props.handleLock();
    }
    if ((!isNaN(el) && el !== " ") || el === "*") {
      return this.props.handleUserInput(el);
    }
  };

  render() {
    return (
      <div className="panel">
        <Display
          isLocked={this.props.isLocked}
          message={this.props.displayMsg}
          backlight={this.props.backlightOn}
        />
        <Keypad clickInput={this.handleKeyPress} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLocked: state.depositBox.isLocked,
    displayMsg: state.depositBox.displayMsg,
    isTouched: state.depositBox.isTouched,
    backlightOn: state.depositBox.backlightOn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleUserInput: value => dispatch(actions.handleUserInput(value)),
    handleLock: () => dispatch(actions.handleLock()),
    reset: () => dispatch(actions.reset()),
    handleBacklight: () => dispatch(actions.handleBacklight())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositBox);
