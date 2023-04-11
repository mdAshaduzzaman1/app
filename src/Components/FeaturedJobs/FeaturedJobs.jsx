import "./FeaturedJobd.css";
import Featuredlist from "../FeaturedList/Featuredlist";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const FeaturedJobs = () => {
  const [loader, setLoader] = useState(false);
  const [featured, setFeatured] = useState([]);

  const handleClick = () => {
    setLoader(true);
  };

  // Call useLoaderData() inside the component
  const data = useLoaderData();

  // Update the featured state based on the loader state
  useEffect(() => {
    if (loader) {
      setFeatured(data);
     
    } else {
      setFeatured(data.slice(0, 4));
    }
  }, [loader, data]);

  return (
    <div className="text-center mt-5">
      <h1>Featured Jobs</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus similique esse quasi magni.</p>

      <div className="container mt-5">
        {featured.map((data) => (
          <Featuredlist key={data.id} list={data}></Featuredlist>
        ))}
      </div>
      <button onClick={() => handleClick()} className="btn btn-dark">
        See All
      </button>
    </div>
  );
};

export default FeaturedJobs;
