import { Link } from "react-router-dom";

const Featuredlist = ({ list, handleCart }) => {
  const addtoCart = handleCart;
  const { job_title, company_name, remote, location, salary } = list;

  return (
    <div>
      <div className="border border-danger">
        <h3>Job title: {job_title}</h3>
        <h3>Company Name: {company_name}</h3>
        <p> Remote: {remote ? "Yes" : "Not"}</p>
        <p>location: {location}</p>
        <p>Salary: {salary}</p>
        <Link to="/details" state={list}>
          <button className="btn btn-danger">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featuredlist;
