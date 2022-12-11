import { useEffect, useState } from 'react';
import TicketsList from '../components/products/TicketsList';
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
