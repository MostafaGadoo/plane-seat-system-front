import Card from '../../UI/card/Card';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';

const ViewAllFeedbacks = (props) => {


  return (
    <Card>
      <CardHeader>
      <h5 className='font-bold w-18'>Date: {props.feedBacks.date} </h5>
      </CardHeader>
      <CardBody>
      <h5>Description: {props.feedBacks.description} </h5>
      </CardBody>
      <CardBody>
      <h5>Email: {props.feedBacks.email} </h5>
      </CardBody>
    </Card>

    
  );
  
};
export default ViewAllFeedbacks;
