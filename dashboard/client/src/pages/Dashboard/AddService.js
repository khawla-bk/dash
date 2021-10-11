import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import LayoutDashboard from "../../layout/LayoutDashboard";
import { addService } from "../../redux/actions/userActions";
import "./addservice.css";
import { Redirect } from "react-router-dom";

class Addservice extends Component {
  state = {
    link: "",
    title: "",
    img: "",
    sent: false,
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/service", {
      link: this.state.link,
      title: this.state.title,
      img: this.state.img,
    });
    this.setState({ sent: true });
  };

  render() {
    if (this.state.sent) return <Redirect to="/main-dashboard"></Redirect>;
    return (
      <>
        <LayoutDashboard>
          <h1> Add a new service </h1>
          <form className="newservice" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <input
                className="input-info"
                placeholder="Add link"
                type="text"
                required
                value={this.state.link}
                onChange={(event) =>
                  this.setState({ link: event.target.value })
                }
              />
              <input
                required
                className="input-info"
                placeholder="Add title"
                type="text"
                value={this.state.title}
                onChange={(event) =>
                  this.setState({ title: event.target.value })
                }
              />
              <input
                required
                className="input-info"
                placeholder="Add image"
                type="url"
                value={this.state.img}
                onChange={(event) => this.setState({ img: event.target.value })}
              />
              <img src={this.state.img} alt={this.state.title}></img>
            </div>
            <button type="submit" className="submitb">
              <i className="far fa-plus-square"></i> ADD SERVICE
            </button>
          </form>
        </LayoutDashboard>
      </>
    );
  }
}
const mapDispatchtoProps = (Dispatch) => {
  return { addService: (task) => Dispatch(addService(task)) };
};
export default connect(null, mapDispatchtoProps)(Addservice);
