import React from 'react';
import { useForm } from 'react-hook-form';
import CardActions from '../UI/card/CardActions';

const HomePage = () => {
  const { register, handleSubmit, formState } = useForm();

  return (
    <div class="homeMainDiv">
      <h1 class="homeMainDivHeader">Book your flight ticket</h1>
      <div>
      </div>
    </div>


  );
};

export default HomePage;
