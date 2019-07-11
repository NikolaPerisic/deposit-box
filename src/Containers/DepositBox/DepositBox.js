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

  componentWillUnmount() {
    document.removeEventListener("keydown", el => this.handleKeyPress(el.key));
  }

  componentDidUpdate(prevState) {
    console.log("comp did update");
    if (this.props.isTouched) {
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
  handleKeyPress = el => {
    if (this.props.isBusy) return null;
    if (!this.props.isTouched) {
      this.props.reset();
    }
    if (
      this.props.service &&
      (!isNaN(el) || el !== " " || el === "*" || el === "L" || el === "l")
    ) {
      clearTimeout(this._submitTimer);
      return this.props.handleUserInput(el);
    }
    if (el === "l" || el === "L") {
      return this.props.handleLockFromUser(
        this.props.displayMsg,
        this.props.isLocked
      );
    }
    if ((!isNaN(el) && el !== " ") || el === "*") {
      clearTimeout(this._submitTimer);
      clearTimeout(this._backlightTimer);
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
        <div className="panel__serial">S/N: {this.props.serial}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLocked: state.depositBox.isLocked,
    displayMsg: state.depositBox.displayMsg,
    isTouched: state.depositBox.isTouched,
    isBusy: state.depositBox.isBusy,
    backlightOn: state.depositBox.backlightOn,
    code: state.depositBox.code,
    serial: state.depositBox.serialNo,
    service: state.depositBox.serviceMode
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleUserInput: value => dispatch(actions.handleUserInput(value)),
    handleLockFromUser: (userInput, status) =>
      dispatch(actions.handleLockFromUser(userInput, status)),
    reset: () => dispatch(actions.reset()),
    handleBacklight: () => dispatch(actions.handleBacklight()),
    handleAutoSubmit: (code, userInput, status, isBusy, service, serial) =>
      dispatch(
        actions.handleAutoSubmit(
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
