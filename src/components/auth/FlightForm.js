import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const FlightForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/Flights', {
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
      <h2 class='Tsignup'>Flight</h2>
      <div class="content1">
       <TextInput
        label="Date"
        type="text"
        name="Date"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Date && (
        <FormInputError>Date must not be empty</FormInputError>
      )}
      <TextInput
        label="Departure_Time"
        type="text"
        name="Departure_Time"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Departure_Time && (
        <FormInputError>Departure_Time must not be empty</FormInputError>
      )}
      <TextInput
        label="Departure_loc"
        type="text"
        name="Departure_loc"
        register={register}
        validation={{ required: true }}
      />
       {formState.errors.Departure_loc && (
        <FormInputError>Departure_loc must not be empty</FormInputError>
      )}

    
      <TextInput
        label="Arrival_loc"
        type="text"
        name="Arrival_loc"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Arrival_loc && (
        <FormInputError>Arrival_loc must not be empty.</FormInputError>
      )}
      <TextInput
        label="Plane_No"
        type="text"
        name="Plane_No"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.Plane_No && (
        <FormInputError>Plane_No must not be empty.</FormInputError>
      )}
      
      <button
        type="submit"
        class="button"
      >
        Add Flight
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/d5/4f/ec/d54fecc599a436636ab8105a25621c63.jpg" class="Flight-photo"></img>
     
      
    </form>
    </div>
  );
};

export default FlightForm;
