import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './AddService..css'

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
    console.log(data);
    axios.post('http://localhost:5000/services', data)
    .then(res =>{
        console.log(res);
        reset()
    })
  }
   

    return (
        <div className="addservice">
            <h2>Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
      <textarea {...register("description")} placeholder="escription" />
      <input type="number" {...register("price")} placeholder="Price"/>
      <input {...register("img")} placeholder="image"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;