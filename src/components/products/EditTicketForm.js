import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormInputError from '../../UI/form/FormInputError';
import TextInput from '../../UI/form/TextInput';

const EditTicketForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const params = useParams();
    const ticketID = params.ticketId;

  const submitHandler = async (formData) => {
    try {
      const response = await fetch(`http://localhost:3000/tickets/editticket/${ticketID}` , {
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
        navigate(`/tickets`);
      }

      console.log("done");
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <form
      className="flex  flex-col p-10 gap-5 bg-gray-800 w-fit"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextInput
        label="Date"
        type="text"
        name="date"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.date && (
        <FormInputError>Product name must not be empty</FormInputError>
      )}

      <TextInput
        label="Departure Time"
        type="text"
        name="departureTime"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.departureTime && (
        <FormInputError>Product description must not be empty</FormInputError>
      )}

    
      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Edit Ticket
      </button>
    </form>
  );
};

export default EditTicketForm;
