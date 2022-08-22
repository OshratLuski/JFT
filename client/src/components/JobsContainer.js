import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "../components/Loading";
import Job from "../components/Job";
import PageBtnContainer from "./PageBtnContainer";
import Wrapper from "../assets/wrappers/JobsContainer";

const JobsContainer = () => {
  const {
    getJobs,
    isLoading,
    page,
    jobs,
    totalJobs,
    sort,
    search,
    searchTeacherIn,
    searchType,
    searchStatus,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, [page, sort, search, searchTeacherIn, searchType, searchStatus]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs To Display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
