import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const FeedbackForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Reports', {
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
    <div class='Report'>
    <form
  
      onSubmit={handleSubmit(submitHandler)}
    >
     
      <div class="format">
      <h2 class='TReport'>Lost Items</h2>
      <div class="content1">
       <TextInput
        label="Name"
        type="text"
        name="name"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>name must not be empty</FormInputError>
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
        label="Luggage description"
        type="text"
        name="luggage_description"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.luggage_description && (
        <FormInputError>luggage_description must not be empty</FormInputError>
      )}
    
      <TextInput
        label="Ticket_id"
        type="text"
        name="ticket_id"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Ticket_id && (
        <FormInputError>Ticket_id must not be empty.</FormInputError>
      )}
       <TextInput
        label="Flight_id"
        type="text"
        name="flight_id"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Flight_id && (
        <FormInputError>Flight_id must not be empty.</FormInputError>
      )}
      <button
        type="submit"
        class="button"
      >
        Submit
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/84/49/55/8449558709157a7017e6d18985d71637.jpg" class="Report-photo"></img>
     
      
    </form>
    </div>
  );
};

export default FeedbackForm;
