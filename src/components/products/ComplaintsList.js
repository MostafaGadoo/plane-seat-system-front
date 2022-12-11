import ViewAllComplaints from './ViewAllComplaints';

const ComplaintsList = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.complaints.map((p) => (
        <ViewAllComplaints complaints={p} key={p._id} />
      ))}
    </div>
  );
};

export default ComplaintsList;