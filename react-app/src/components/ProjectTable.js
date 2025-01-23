import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const ProjectTable = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const recordsPerPage = 5;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentProjects = projects.slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setLoading(false);
  }, [projects]);

  return (
    <div className="table-container">
      <div className="table-content">
        {loading ? (
          <Spinner />
        ) : currentProjects.length > 0 ? (
          <div className="project-table-wrapper">
            <table className="project-table" aria-label="Project funding details table">
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Percentage funded</th>
                  <th scope="col">Amount pledged</th>
                </tr>
              </thead>
              <tbody>
                {currentProjects.map((project, index) => (
                  <tr key={index}>
                    <td>{firstIndex + index + 1}</td>
                    <td>{project["percentage.funded"]}</td>
                    <td>{project["amt.pledged"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        ) : (
          <p>No projects available.</p>
        )}
      </div>
      {!loading && (
        <Pagination
          totalRecords={projects.length}
          recordsPerPage={recordsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProjectTable;
