import { Link } from "react-router-dom";

const Featuredlist = ({ list }) => {
  
  const {logo, title, company, remote, location, salary } = list;

  return (
    <div>
      <div className="border border-light p-5 d-flex flex-column justify-content-between align-items-center gap-5">
        <img className="img-fluid w-75" src={logo} alt="" />
    <div >
    <h3>Job title: {title}</h3>
        <h3>Company Name: {company}</h3>
        <p> Remote: {remote ? "Yes" : "Not"}</p>
        <p>location: {location}</p>
        <p>Salary: {salary}</p>
        <Link to="/details" state={list}>
          <button className="btn btn-danger">
            View Details
          </button>
        </Link>
    </div>
      </div>
    </div>
  );
};

export default Featuredlist;
