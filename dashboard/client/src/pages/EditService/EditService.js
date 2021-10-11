import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import LayoutDashboard from "../../layout/LayoutDashboard";
import { editService } from "../../redux/actions/userActions";
import "../Dashboard/addservice.css";
import { Redirect } from "react-router-dom";

class EditService extends Component {
  state = {
    id: null,
    link: "",
    title: "",
    img: "",
    sent: false,
  };

  componentDidMount() {
    this.setState({ id: this.props.match.params.serviceId }, this.refresh);
  }
  refresh = () => {
    axios.get(`/api/service/${this.state.id}`).then((res) => {
      this.setState({
        link: res.data.link,
        title: res.data.title,
        img: res.data.img,
      });
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/service/${this.state.id}`, {
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
              <i className="far fa-edit"></i> EDIT SERVICE
            </button>
          </form>
        </LayoutDashboard>
      </>
    );
  }
}
const mapDispatchtoProps = (Dispatch) => {
  return { editService: (task) => Dispatch(editService(task)) };
};
export default connect(null, mapDispatchtoProps)(EditService);
