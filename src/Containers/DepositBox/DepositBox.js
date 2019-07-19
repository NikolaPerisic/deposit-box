import React from "react";
import "./DepositBox.scss";
import Display from "../../Components/Display/Display";
import Keypad from "../../Components/Keypad/Keypad";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import * as asyncActions from "../../actions/asyncActions";
import { playSound } from "../../sounds/sounds";

/*
main container, recieving props and state from redux, sending props to children
*/
export class DepositBox extends React.Component {
  // local timers
  _submitTimer = null;
  _backlightTimer = null;
  //
  componentDidMount() {
    document.addEventListener("keydown", el => this.handleKeyPress(el.key));
    this.handleDisplayBacklight();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", el => this.handleKeyPress(el.key));
    clearTimeout(this._submitTimer);
    clearTimeout(this._backlightTimer);
  }
  /*
  checking the state after update, if error emmits error sound, if device
  is touched and there is no change in 1.2s dispatching autosubmit to action
  creator for handling further condition
  */
  componentDidUpdate() {
    if (this.props.displayMsg === "Error") {
      playSound("error");
    }
    if (this.props.isTouched && !this.props.lastKey) {
      this._submitTimer = setTimeout(() => {
        this.props.handleAutoSubmit(
          this.props.code,
          this.props.displayMsg,
          this.props.isLocked,
          this.props.isBusy,
          this.props.service,
          this.props.serial
        );
      }, 1200);
    }
    clearTimeout(this._backlightTimer);
    if (this.props.backlightOn && !this.props.service) {
      this.handleDisplayBacklight();
    }
  }

  // function for dimming the display after 5 secs of inactivity
  handleDisplayBacklight = () => {
    this._backlightTimer = setTimeout(() => {
      this.props.reset();
      this.props.handleBacklight();
    }, 5000);
  };

  /*
  handling input coming from both keyboad and click events, catching
  only valid inputs and processing futher
  */
  handleKeyPress = el => {
    if (
      this.props.isBusy ||
      el === " " ||
      (el !== "l" && el !== "L" && el !== "*" && isNaN(el))
    ) {
      return null;
    }
    if (!this.props.isTouched) {
      this.props.reset();
    }
    this.props.resetKeyPress();
    playSound();
    if (this.props.service) {
      clearTimeout(this._submitTimer);
      return this.props.handleUserInput(el);
    }
    if (el === "l" || el === "L") {
      return this.props.handleLockFromUser(
        this.props.displayMsg,
        this.props.isLocked
      );
    }
    if (el === "*") return null;
    clearTimeout(this._submitTimer);
    clearTimeout(this._backlightTimer);
    return this.props.handleUserInput(el);
  };

  render() {
    return (
      <div className="panel">
        <Display
          isLocked={this.props.isLocked}
          message={this.props.displayMsg}
          backlight={this.props.backlightOn}
        />
        <Keypad
          clickInput={this.handleKeyPress}
          activeItem={this.props.lastKey}
        />
        <div className="panel__serial">S/N: {this.props.serial}</div>
      </div>
    );
  }
}
// connect redux state
const mapStateToProps = state => {
  return {
    isLocked: state.depositBox.isLocked,
    displayMsg: state.depositBox.displayMsg,
    isTouched: state.depositBox.isTouched,
    isBusy: state.depositBox.isBusy,
    backlightOn: state.depositBox.backlightOn,
    code: state.depositBox.code,
    serial: state.depositBox.serialNo,
    service: state.depositBox.serviceMode,
    lastKey: state.depositBox.key
  };
};
//
const mapDispatchToProps = dispatch => {
  return {
    handleUserInput: value => dispatch(actions.handleUserInput(value)),
    reset: () => dispatch(actions.reset()),
    handleBacklight: () => dispatch(actions.handleBacklight()),
    handleLockFromUser: (userInput, status) =>
      dispatch(asyncActions.handleLockFromUser(userInput, status)),
    resetKeyPress: () => dispatch(asyncActions.resetKeyPress()),
    handleAutoSubmit: (code, userInput, status, isBusy, service, serial) =>
      dispatch(
        asyncActions.handleAutoSubmit(
          code,
          userInput,
          status,
          isBusy,
          service,
          serial
        )
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepositBox);
