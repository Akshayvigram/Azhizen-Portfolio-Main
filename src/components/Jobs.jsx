import React, { useState, useEffect } from "react";
import JobPosting from "./Jobposting.jsx"; // Update path as necessary

const Jobs = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings from the JSON file
    const fetchJobListings = async () => {
      const response = await fetch("/jobs.json");
      const data = await response.json();
      setJobListings(data);
    };

    fetchJobListings();
  }, []);


  const [favorites, setFavorites] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const toggleFavorite = (index) => {
    if (favorites.includes(index)) {
      setFavorites(favorites.filter((favIndex) => favIndex !== index));
    } else {
      setFavorites([...favorites, index]);
    }
  };

  const openJobPopup = (job) => {
    setSelectedJob(job);
  };

  const closeJobPopup = () => {
    setSelectedJob(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="hidden md:block text-black text-center text-[50px] font-poppins font-bold uppercase mb-6">JOBS</h1>

      {/* Job Listings */}
      <div className="flex justify-center items-center mt-8">
        <div className="w-full flex flex-col items-center gap-6">
          {/* <div className="text-center mb-4 text-lg font-semibold">08 Live Results</div> */}

          {jobListings.map((job, index) => (
            <button
  key={index}
  onClick={() => openJobPopup(job)}
  className="bg-[linear-gradient(135deg,#0078B4_0%,#00B4D9_100%)] text-white rounded-lg p-6 w-full max-w-[350px] md:max-w-[1000px] flex justify-between items-start shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_15px_rgba(0,0,0,0.2)] transition-all duration-300"
>
              <div className="flex flex-col">
                <h2 className="text-black font-poppins text-[25px] md:text-[35px] font-bold leading-tight tracking-wider mb-4">
                  {job.title}
                </h2>
                <div className="text-left flex flex-col">
                  <p className="text-white font-poppins text-[16px] md:text-[18px] font-light self-stretch">
                    {job.category}
                  </p>
                  <p className="text-white font-poppins text-[16px] md:text-[18px] font-light self-stretch">
                    {job.level}, {job.type}
                  </p>
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(index);
                }}
                className="w-10 h-10 flex-shrink-0 focus:outline-none self-end mt-4 cursor-pointer"
              >
                {/* SVG icon for favorite */}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="rounded-lg w-full max-w-7xl max-h-[90vh] overflow-y-auto p-6 relative shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-white">
          <button
            onClick={closeJobPopup}
            className="absolute top-4 right-4 text-white font-bold hover:text-gray-900 focus:outline-none shadow-md bg-gray-900 rounded-full p-2 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <JobPosting job={selectedJob} />
        </div>
      </div>
      

      )}
    </div>
  );
};

export default Jobs;
