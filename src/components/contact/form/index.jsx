import React from 'react';
import './style.scss';
import { send } from 'emailjs-com';
import {useForm} from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Form = () => {
    const {register, handleSubmit, formState: {errors}}=useForm();
    const onSubmit =(data)=>{
        send(
            "",
            "",
            data,
            ""
        ).then(response=>{
            console.log(response);
            formSuccess();
        }).catch(err=>console.log(err));
    };
    const formSuccess= ()=>{
        toast("Thanks for submitting your query!!");
        document.getElementById("queryForm").reset();
    }
  return (
    <div className="query-form">
        <ToastContainer/>
        <form id='queryForm' onSubmit={handleSubmit(onSubmit)}>
            <div className="input-field">
                <input type="text" name='from_name' placeholder='Name' {...register("from_name", {
                    required: "Name is required!"
                })}/>
            {errors.from_name?.message && <p className="errors">{errors.from_name?.message}</p>}
            </div>
            <div className="input-field">
                <input type="text" name='reply_to' placeholder='Email' {...register("reply_to", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
            })} />
           {errors.reply_to?.message && <p className="errors">{errors.reply_to?.message}</p>}
            </div>
            <div className="input-field">
                <input type="text" name='phone_number' placeholder='Phone' {...register("phone_number", {
                    required: "Phone number is required!",
                    minLength:{
                        value: 8,
                        message: "Phone number is not valid!"
                    }
                })}/>
                {errors.phone_number?.message &&<p className="errors">{errors.phone_number?.message}</p>}
            </div>
            <div className="input-field">
                <input type="text" name='subject' placeholder='Subject' {...register("subject", {
                    required: "Subject is required!",
                    minLength:{
                        value: 10,
                        message: "Minimum 10 characters required!"
                    }
                })} />
               {errors.subject?.message && <p className="errors">{errors.subject?.message}</p>}
            </div>
            <div className="input-field full-width">
                <textarea name="message" className='textarea' placeholder='Your Message' {...register("message", {
                    required: "Message is required!",
                    minLength:{
                        value: 20,
                        message: "Minimum 20 characters required!"
                    }
                })}/>
                {errors.from_name?.message &&<p className="errors">{errors.message?.message}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form