import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import CardBody from '../../UI/card/CardBody';
import TextInput from '../../UI/form/TextInput';
import AuthContext from '../../store/authContext';
// import AuthProvider from '../../store/AuthProvider';
import React, { useContext } from 'react';


const FeedbackForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const customerId = authContext.id;

  const params = useParams();
  const ticketID = params.ticketId;

  const submitHandler = async (formData) => {
    try {
      const response = await fetch(`https://plane-management.azurewebsites.netComplaints`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
    
  };

  return (
    <div class='Feedback'>
    <form
  
      onSubmit={handleSubmit(submitHandler)}
    >
     
      <div class="format">
      <h2 class='Tsignup'>Complaint</h2>
      <div class="content1">
       <TextInput
        label="Description"
        type="text"
        name="description"
        value = {ticketID} 
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Description must not be empty</FormInputError>
      )}
      <TextInput
        label="Date"
        type="text"
        name="date"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Date must not be empty</FormInputError>
      )}
      <TextInput
        label="Email"
        type="text"
        name="email"
        register={register}
        validation={{ required: true }}
      />
       {formState.errors.email && (
        <FormInputError>Email must not be empty</FormInputError>
      )} 

      <TextInput
        label="Ticket_id"
        type="text"
        name="Ticket_id"
        register={register}
        validation={{ required: true }}
      />
       {formState.errors.email && (
        <FormInputError>Email must not be empty</FormInputError>
      )}

    
      {/* <label>
            Ticket Id:
            <input
              name="Ticket_id"
              type="text"
              value={ticketID.toString()}
            />
          </label>
       */}
       <TextInput
        label="User Name"
        type="text"
        name="userName"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Customer_id must not be empty.</FormInputError>
      )}
      
      <button
        type="submit"
        class="button"
      >
        Submit
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/61/fe/65/61fe65f66438907989d7201efb498548.jpg" class="Complaint-photo"></img>
     
      
    </form>
    </div>
  );
};

export default FeedbackForm;
