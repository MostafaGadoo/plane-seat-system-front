import Card from '../../UI/card/Card';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';

const ViewAllLuaggageReport = (props) => {


  return (
    <Card>
      <CardHeader>
      <h5 className='font-bold w-18'>Name: {props.luggage.name} </h5>
      </CardHeader>
      <CardBody>
      <h5>Email: {props.luggage.email} </h5>
      </CardBody>
      <CardBody>
      <h5>Description: {props.luggage.luggage_description} </h5>
      </CardBody>
    </Card>

    
  );
  
};
export default ViewAllLuaggageReport;
