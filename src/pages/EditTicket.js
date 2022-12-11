import { useEffect, useState } from 'react';
import ProductsList from '../components/products/ProductsList';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import EditTicketForm from '../components/products/EditTicketForm';

const EditTicket = () => {
 

  return (
    <div>
      <EditTicketForm />
    </div>
  );
};

export default EditTicket;
