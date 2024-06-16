import React, { useState } from 'react';
import { useFormContext } from '../context/FormContext';

const StepOne = () => {
  const { formValues } = useFormContext();

  const [firstname, setFirstname]=useState(formValues.firstname || '');
  const [lastname,setLastname]=useState(formValues.lastname || '');
  const [email,setEmail]=useState(formValues.email || '');
  const [phonenumber,setPhonenumber]=useState(formValues.phonenumber || '');
  const [createpassword,setCreatepassword]=useState(formValues.createpassword || '');
  const [confirmpassowrd,setConfirmpassowrd]=useState(formValues.confirmpassowrd || '');



  return (
      <div className='flex flex-col'>
        <p className='text-gray-400 text-center text-[18px]'>Step 1</p>
        <p className='text-3xl text-center my-4'>Your Profile</p>
        <p className='text-wrap text-center text-[14px] mx-[230px] sm:mx-4'>Enter the login information for your account. You will be able to create additional users after registering</p>
        <div className='grid grid-cols-2 sm:grid-cols-1 sm:mx-4 place-items-center gap-4 mt-8'>
            <div className='flex items-start flex-col gap-2'>
                <label>First Name*</label>
                <input
                type='text'
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                required
                placeholder='Input your first name' 
                className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                />
            </div>
            <div className='flex items-start flex-col gap-2'>
                <label>Last Name*</label>
                <input
                type='text'
                value={lastname}
                onChange={(e)=>setLastname(e.target.value)}
                required
                placeholder='Input your last name' 
                className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                />
            </div>
            <div className='flex items-start flex-col gap-2'>
                <label>Email*</label>
                <input
                type='text'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                placeholder='Input your Email' 
                className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                />
            </div>
            <div className='flex items-start flex-col gap-2'>
                <label>Phone Number*</label>
                <input
                type='text'
                value={phonenumber}
                onChange={(e)=>setPhonenumber(e.target.value)}
                required
                placeholder='Input your Phone Number' 
                className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                />
            </div>
            <div className='flex items-start flex-col gap-2'>
                <label>Password*</label>
                <input
                type='text'
                value={createpassword}
                onChange={(e)=>setCreatepassword(e.target.value)}
                required
                placeholder='Create Password' 
                className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                />
            </div>
            <div className='flex items-start flex-col gap-2'>
                <label>Confirm Password*</label>
                <input
                type='text'
                value={confirmpassowrd}
                onChange={(e)=>setConfirmpassowrd(e.target.value)}
                required
                placeholder='Confirm your password' 
                className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                />
            </div>
        </div>
      </div>
  );
};

export default StepOne;
