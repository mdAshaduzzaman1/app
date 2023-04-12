import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faDollar} from '@fortawesome/free-solid-svg-icons';




const Featuredlist = ({ list }) => {
  
  const {logo, title, company, remote, location, salary } = list;

  return (
    <div>
      

      <div className="border border-light p-5 d-flex flex-column justify-content-between align-items-center gap-5">
        <img className="img-fluid w-75" src={logo} alt="" />
    <div >
    <h3> {title}</h3>
        <h3> {company}</h3>
       
        <p> <FontAwesomeIcon icon={faLocationCrosshairs} /> Type: {location}</p>
        <p> <FontAwesomeIcon icon={faDollar} /> Salary: {salary}</p>
    
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
