import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import LayoutDashboard from "../../layout/LayoutDashboard";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Swal from "sweetalert2";

const swalWithBootstrapButtons = Swal.mixin({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
});

const Item = ({ _id, link, title, img, isAdmin, reload }) => (
  <div className="wrap">
    {isAdmin && (
      <div className="btn-container">
        <Link to={`/edit-service/${_id}`}>
          <button className="primary">
            <i className="fas fa-edit"></i>
          </button>
        </Link>
        <button
          className="danger"
          onClick={() => {
            swalWithBootstrapButtons
              .fire({
                text: `Are you sure you want to delete ${title}?`,
              })
              .then((result) => {
                if (result.isConfirmed) {
                  axios.delete(`/api/service/${_id}`).then(() => {
                    reload();
                    Swal.fire(
                      "Deleted!",
                      "Your file has been deleted.",
                      "success"
                    );
                  });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  Swal.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                  );
                }
              });
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    )}
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt={title} className="image" />
    </a>
    <p className="title">{title}</p>
  </div>
);

const MainDashboard = ({ isAdmin }) => {
  const [items, setItems] = useState([]);

  const refresh = () => {
    axios
      .get("/api/service")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        setItems([]);
      });
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <LayoutDashboard title="Main Dashboard">
      <div className="main-content">
        {items.map((element) => (
          <Item
            reload={refresh}
            key={element._id}
            isAdmin={isAdmin}
            {...element}
          />
        ))}
      </div>
      {isAdmin && (
        <div className="icon-container">
          <Link to="/add-service">
            <button className="success-btn">
              <i className="fas fa-plus"></i>
            </button>
          </Link>
        </div>
      )}{" "}
    </LayoutDashboard>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.userReducer.user?.role === "ADMIN",
});

export default connect(mapStateToProps, {})(MainDashboard);
