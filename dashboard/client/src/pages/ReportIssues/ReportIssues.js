import LayoutDashboard from "../../layout/LayoutDashboard";
import React from "react";
import "./report.css";

class Reportissues extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your report has been submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <LayoutDashboard>
        <h1>Report an issue!</h1>
        <p>If you encountered a bug, please do not hesitate to report it</p>
        <i className="fas fa-bug"></i>
        <div>
          <form className="input-cont" onSubmit={this.handleSubmit}>
            <label>
              Subject:
              <input
                className="lab-input"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Message:
              <textarea className="mess-input" type="text" value="" />
            </label>
            <input
              className="input-file"
              placeholder="add image"
              type="file"
              value={this.state.newimg}
              onChange={(event) =>
                this.setState({ newimg: event.target.value })
              }
            />
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      </LayoutDashboard>
    );
  }
}
export default Reportissues;
