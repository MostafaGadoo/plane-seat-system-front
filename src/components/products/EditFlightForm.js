import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const EditFlightForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const params = useParams();
    const flightID = params.flightId;

  const submitHandler = async (formData) => {
    try {
      const response = await fetch(`https://plane-management.azurewebsites.net/Flights/${flightID}` , {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }else{
        navigate(`/Flight`);
      }

      console.log("done");
    } catch (err) {
      console.log("error");
    }
  };

  return (
 <div class="edit">
    <form
      
      onSubmit={handleSubmit(submitHandler)}
    >
      <div class='sign-in'>
      <div class="format">
      <h2 class='Edit'>Edit Flight</h2>
      <div class="content">
      <TextInput
        label="Date"
        type="text"
        name="Date"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.date && (
        <FormInputError>Date name must not be empty</FormInputError>
      )}

      <TextInput
        label="Departure Time"
        type="text"
        name="Departure_Time"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.departureTime && (
        <FormInputError>departureTime must not be empty</FormInputError>
      )}

    
      <button
        type="submit"
        className="button"
      >
        Edit Flight
      </button>
      </div>
      </div>
      <img src="https://i.pinimg.com/564x/dd/c6/94/ddc694ffa2622934f5d5dfcbec51ee97.jpg" class="Edit-photo"></img>
      
      </div>

    </form>
    </div>
  );
};

export default EditFlightForm;
