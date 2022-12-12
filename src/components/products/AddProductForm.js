import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import AuthContext from '../../store/authContext';
import FormInputError from '../../UI/form/FormInputError';
import SelectInput from '../../UI/form/SelectInput';
import TextAreaInput from '../../UI/form/TextAreaInput';
import TextInput from '../../UI/form/TextInput';

const AddProductForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  // const suppliersOptions = props.suppliers.map((s) => {
  //   return { name: s.name, value: s._id };
  // });

  const submitHandler = async (formData) => {
    try {
      const response = await fetch(' https://plane-management.azurewebsites.netFlights', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }

      console.log(data);
    } catch (err) {
      console.log(err.message);
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
        name="Date"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.name && (
        <FormInputError>Product name must not be empty</FormInputError>
      )}

      <TextAreaInput
        label="Description"
        name="Departure_Time"
        register={register}
        validation={{ required: true }}
      />
      {formState.errors.description && (
        <FormInputError>Product description must not be empty</FormInputError>
      )}

      <TextInput
        label="Departure Location"
        type="string"
        name="Departure_loc"
        register={register}
        validation={{ required: true, min: 0 }}
      />
      {formState.errors.price && (
        <FormInputError>Product price must be greater than 0.</FormInputError>
      )}

      {/* <SelectInput
        label="Supplier"
        name="supplierId"
        register={register}
        validation={{ required: true }}
        options={suppliersOptions}
      />
      {formState.errors.supplierId && (
        <FormInputError>Supplier must not be empty.</FormInputError>
      )} */}

      <button
        type="submit"
        className="bg-white rounded-xl my-4 py-2 px-8 self-center"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
