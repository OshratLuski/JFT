import { useAppContext } from "../../context/appContext.js";
import Wrapper from "../../assets/wrappers/DashboardFormPage.js";
import FormRow from "../../components/FormRow";
import FormRowSelect from "../../components/FormRowSelect";
import Alert from "../../components/Alert";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    studyProfessional,
    jobLocation,
    teacherIn,
    teacherInOptions,
    status,
    statusOptions,
    jobType,
    jobTypeOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobLocation || !teacherIn || !studyProfessional) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editJob();
      return;
    }
    createJob();
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="studyProfessional"
            labelText="study professional"
            value={studyProfessional}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            list={teacherInOptions}
            name="teacherIn"
            labelText="teacher in"
            value={teacherIn}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            list={statusOptions}
            name="status"
            value={status}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            list={jobTypeOptions}
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
