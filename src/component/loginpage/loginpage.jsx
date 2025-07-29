import React from 'react';
import {useForm} from 'react-hook-form';
import image from '../../assets/loginimage.png'
import { Link } from 'react-router-dom';
export function Loginpage(){
  const {register,handleSubmit ,formState:{errors}}=useForm();
  function onSubmit(data){
    console.log(data);
  }
   return(
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] h-screen flex justify-center items-center">
          <div className='h-[90%] w-1/2'>
          {/* imgae section */}
            <div className='h-full w-full bg-contain bg-no-repeat bg-center '
            style={{backgroundImage:`url(${image})`}}>
            </div>
          </div>
          <div className='h-full w-1/2'>
          {/* form handling */}
            <form onSubmit={handleSubmit (onSubmit)} className='w-full h-[90%] flex flex-col justify-center '>
              <div>
                <label htmlFor="name" className='font-semibold text-xl'>Mobile Number</label>
                <br />
                <input {...register("Number",{required:true})}
                className=' px-2 border border-black w-[90%] mt-1 h-8 rounded-lg outline-none'
                id='name' 
                placeholder='Enter Number'/>
                {errors.name && <p className='text-[5px] text-red-600'>Number is required</p>}
              </div>
              <div>
                <button type='Submit' className='w-[90%] bg-[#489fb5] h-9 text-white mt-6 rounded-lg'>Genrate OTP</button>
              </div>
              <div>
                <Link to='/singuppage'>
                  <p className='text-sm text-center mt-2'> Don’t have an account?</p>
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </>
   )
}