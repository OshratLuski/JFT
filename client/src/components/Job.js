import moment from "moment";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Job.js";
import JobInfo from "../components/JobInfo";

const Job = ({
  _id,
  studyProfessional,
  createdAt,
  teacherIn,
  status,
  jobType,
  jobLocation,
}) => {
  const { setEditJob, deleteJob } = useAppContext();
  let date = moment(createdAt).format("DD-MM-YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{studyProfessional.charAt(0)}</div>
        <div className="info">
          <h5>{studyProfessional}</h5>
          <p>{teacherIn}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => {
                setEditJob(_id);
              }}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => {
                deleteJob(_id);
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
