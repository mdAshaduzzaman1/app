import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";

const Data = ({ data }) => {
  console.log(data);

  return (
    <div>
      <div className="mt-5 d-flex justify-content-center  justify-content-around gap-4">
        <div className="d-flex gap-5 justify-content-between">
          <img className="img-fluid w-75 h-75" src={data.logo} alt="df" />
          <div className="d-flex flex-column gap-2 p-4">
            <h3>{data.title}</h3>
            <h3>{data.company}</h3>
            <div>
              <h4 className="text-danger">{data.location}</h4>
            </div>
            <div className="d-flex gap-3">
              <p className="text-primary">{data.address}</p>
              <p className="fw-bold">
                {" "}
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                Salary: {data.salary}
              </p>
            </div>
          </div>
        </div>
        <button className="btn btn-danger h-25 w-25">Details</button>
      </div>
    </div>
  );
};

export default Data;
