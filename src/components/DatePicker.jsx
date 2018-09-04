import React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import calendarIcon from "../assets/icons/baseline-date_range-24px.svg";
import isNull from "lodash/isNull";
import "../stylesheets/DatePicker.css";

class DatePickerComponent extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null
  };

  convertMomentToString = date => {
    return !isNull(date) ? date.format("YYYY.MM.DD") : "";
  };

  handleToggleInputFocus = type => {
    this.setState({
      focusedInput: type
    });
  };

  handleDatesChange = ({ startDate, endDate }) => {
    return this.setState({ startDate, endDate });
  };

  handleSubmit = () => {
    alert(
      `The selected dates are \n start date : ${this.convertMomentToString(
        this.state.startDate
      )} \n end date : ${this.convertMomentToString(this.state.endDate)}`
    );

    this.setState({
      startDate: null,
      endDate: null,
      focusedInput: null
    });
  };

  render() {
    return (
      <div className="date-picker">
        <div
          className="date-picker__picker-container"
          style={{
            visibility: isNull(this.state.focusedInput) ? "hidden" : "visible"
          }}
        >
          <DayPickerRangeController
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={this.handleDatesChange}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput =>
              this.setState({ focusedInput: focusedInput || "startDate" })
            }
          />
        </div>

        <div className="date-picker__input-container">
          <FormGroup>
            <FormControl
              style={{
                marginBottom: "12px"
              }}
            >
              <InputLabel>From</InputLabel>
              <Input
                endAdornment={
                  <InputAdornment position="end">
                    <img src={calendarIcon} alt="시작" />
                  </InputAdornment>
                }
                value={this.convertMomentToString(this.state.startDate)}
                onFocus={this.handleToggleInputFocus.bind(this, "startDate")}
              />
            </FormControl>

            <FormControl
              style={{
                marginBottom: "24px"
              }}
            >
              <InputLabel>To</InputLabel>
              <Input
                endAdornment={
                  <InputAdornment position="end">
                    <img src={calendarIcon} alt="끝" />
                  </InputAdornment>
                }
                value={this.convertMomentToString(this.state.endDate)}
                onFocus={this.handleToggleInputFocus.bind(this, "endDate")}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              적용
            </Button>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default DatePickerComponent;
