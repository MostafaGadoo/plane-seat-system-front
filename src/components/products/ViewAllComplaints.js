import Card from '../../UI/card/Card';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';

const ViewAllComplaints = (props) => {


  return (
    <Card>
      <CardHeader>
      <h5 className='font-bold w-18'>Date: {props.complaints.date} </h5>
      </CardHeader>
      <CardBody>
      <h5>Description: {props.complaints.description} </h5>
      </CardBody>
      <CardBody>
      <h5>Email: {props.complaints.email} </h5>
      </CardBody>
    </Card>

    
  );
  
};
export default ViewAllComplaints;
