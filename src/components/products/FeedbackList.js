import ViewAllFeedbacks from './ViewAllFeedbacks';

const FeedbackList = (props) => {
  return (
    <div className="grid grid-row-2 gap-5 justify-center items-center">
      {props.feedBacks.map((p) => (
        <ViewAllFeedbacks feedBacks={p} key={p._id} />
      ))}
    </div>
  );
};

export default FeedbackList;