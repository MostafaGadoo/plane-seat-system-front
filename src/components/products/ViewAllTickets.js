import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
import CardHeader from '../../UI/card/CardHeader';
import SigninForm from '../../components/auth/SigninForm';
import AuthContext from '../../store/authContext';

const ViewAllTickets = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();
  const params = useParams();
  // const customerId = AuthContext.CustomerID;;
  
  const authContext = useContext(AuthContext);
  const customerId = authContext.id;

  console.log(customerId);

  const updateStatusHandler = async () => {
    //navigate(`/Viewpropertiesup/${props.product._id}`);
    navigate(`/ticketsBooked/${props.product._id}`);
    
}; 
const upgradeTicket = async () => {
    //navigate(`/Viewpropertiesup/${props.product._id}`);
    navigate(`/ticketsUpgraded/${props.product._id}`);
}; 
const cancelTicekt = async () => {
    //navigate(`/Viewpropertiesup/${props.product._id}`);
    navigate(`/cancelBooking/${props.product._id}`);
}; 
const editTicekt = async () => {
    //navigate(`/Viewpropertiesup/${props.product._id}`);
    navigate(`/Complaints/${props.product._id}`);
}; 
  return (
    <Card>
      <CardHeader>
      <h5 className='font-bold '>Flight ID: {props.product.flightID} </h5>
      </CardHeader>
      <CardBody>
      <h5>From: {props.product.departureLocation} </h5>
      </CardBody>
      <CardBody>
      <h5>To: {props.product.arrivalLocation} </h5>
      </CardBody>
      <CardBody>
      <h5>Time: {props.product.departureTime} </h5>
      </CardBody>
      <CardBody>
        <h5> Date: {props.product.date}</h5>
      </CardBody>
      <CardBody>
        <h5>{props.product.price} EGP</h5>
      </CardBody>
      <CardBody>
        <h5>Class: {props.product.class}</h5>
      </CardBody>
      <CardActions>
        <button
          class ="cardButton"
          onClick={updateStatusHandler}
        >
          Book
        </button>
      </CardActions>
      <CardActions>
        <button
          class ="cardButton"
          onClick={upgradeTicket}
        >
          Upgrade
        </button>
      </CardActions>
      <CardActions>
        <button
          class ="cardButton"
          onClick={cancelTicekt}
        >
          cancel
        </button>
      </CardActions>
      <CardActions>
        <button
          class ="cardButton"
          onClick={editTicekt}
        >
          Complain
        </button>
      </CardActions>
    </Card>

    
  );
  
};
export default ViewAllTickets;
