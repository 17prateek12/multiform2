import React, { useState } from 'react';
import { useFormContext } from '../context/FormContext';
import { PiGreaterThanFill } from "react-icons/pi";


const StepTwo = () => {
    const { formValues } = useFormContext();
    const [brandname, setBrandname] = useState(formValues.brandname || '');
    const [brandtype, setBrandtype] = useState(formValues.brandtype || '');
    const [address, setAddress] = useState(formValues.address || '');
    const [city, setCity] = useState(formValues.city || '');
    const [zipcode, setZipcode] = useState(formValues.zipcode || '');
    const [taxidnumber, setTaxidnumber] = useState(formValues.taxidnumber || '');
    const [signedAgreement, setSignedAgreement] = useState(formValues.signedAgreement || '');
    const [waiverAndRelease, setWaiverAndRelease] = useState(formValues.waiverAndRelease || '');
    const [signedCoiPdf, setSignedCoiPdf] = useState(formValues.signedCoiPdf || '');

    return (
        <div className='flex flex-col'>
            <p className='text-gray-400 text-center text-[18px]'>Step 1</p>
            <p className='text-3xl text-center my-4'>Your Profile</p>
            <p className='text-wrap text-center text-[14px] mx-[230px] sm:mx-4'>Enter the login information for your account. You will be able to create additional users after registering</p>
            <div className='mt-8 flex flex-col'>
                <label className='text-blue-500'>GENERAL INFORMATION</label>
                <div className='grid grid-cols-2 sm:grid-cols-1 place-items-start gap-4'>
                    <div className='flex items-start flex-col gap-2'>
                        <label>Brand Name*</label>
                        <input
                            type='text'
                            value={brandname}
                            onChange={(e) => setBrandname(e.target.value)}
                            required
                            placeholder='Input your Brand name'
                            className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                        />
                    </div>
                    <div className='flex items-start flex-col gap-2'>
                        <label>Last Name*</label>
                        <select
                            type='text'
                            value={brandtype}
                            onChange={(e) => setBrandtype(e.target.value)}
                            required
                            placeholder='Select your brand type'
                            className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                        >
                            <option>abc</option>
                            <option>xyz</option>
                            <option>efg</option>
                        </select>
                    </div>
                    <div className='flex items-start flex-col gap-2'>
                        <label>Select Address*</label>
                        <input
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            placeholder='Input your Address'
                            className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                        />
                    </div>
                    <div className='flex items-start flex-col gap-2'>
                        <label>City*</label>
                        <input
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            placeholder='Input your City'
                            className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                        />
                    </div>
                    <div className='flex items-start flex-col gap-2'>
                        <label>Zip Code*</label>
                        <input
                            type='text'
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                            required
                            placeholder='Input Zip Code'
                            className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                        />
                    </div>
                    <div className='flex items-start flex-col gap-2'>
                        <label>Tax ID Number*</label>
                        <input
                            type='text'
                            value={taxidnumber}
                            onChange={(e) => setTaxidnumber(e.target.value)}
                            required
                            placeholder='Input Tax ID Number'
                            className='w-[270px] h-[2.5rem] pl-2 focus:outline-none border border-gray-300 hover hover:border-blue-400 rounded-lg'
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start mt-8'>
                <label className='text-blue-500'>DOCUMENTS</label>
                <label className='text-[14px]'>Once the following document are signed, you will be get ready to start</label>
                <div className='flex items-center mt-4 flex-wrap'>
                    <div className='flex items-center relative justify-end rounded-lg'>
                        <label className='w-[580px] h-[2.5rem] sm:w-3/4 sm:h-auto pl-2 pt-1 focus:outline-none border border-gray-300 rounded-lg'>Electronically sign the agreement(s)</label>
                        <input
                            type="checkbox"
                            className="mr-4 absolute"
                            checked={signedAgreement}

                            onChange={() => setSignedAgreement(!signedAgreement)}
                        />
                    </div>
                    <div className='rounded-lg'>
                        <PiGreaterThanFill className='text-blue-500 text-[40px] rounded-lg' />
                    </div>
                </div>
                <div className='flex items-center mt-4 flex-wrap'>
                    <div className='flex items-center relative justify-end rounded-lg'>
                        <label className='w-[580px] h-[2.5rem] sm:w-3/4 sm:h-auto pl-2 pt-1 focus:outline-none border border-gray-300 rounded-lg'>
                            Non-adult beverage Kroger market supplier waiver and release
                        </label>
                        <input
                            type="checkbox"
                            className="mr-4 absolute"
                            checked={waiverAndRelease}
                            onChange={() => setWaiverAndRelease(!waiverAndRelease)}
                        />
                    </div>
                    <div className='rounded-lg'>
                        <PiGreaterThanFill className='text-blue-500 text-[40px] rounded-lg' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start mt-8'>
                <label className='text-blue-500'>COI PDF UPLOAD</label>
                <label className='text-[14px]'>Once the following document are signed, you will be get ready to start</label>
                <div className='flex items-center mt-4 flex-wrap'>
                    <div className='flex items-center relative justify-end rounded-lg'>
                        <label className='w-[580px] sm:w-3/4 sm:h-auto h-[2.5rem] pl-2 pt-1 focus:outline-none border border-gray-300 rounded-lg'>Electronically sign the agreement(s)</label>
                        <input
                            type="checkbox"
                            className="mr-4 absolute"
                            checked={signedCoiPdf}
                            onChange={() => setSignedCoiPdf(!signedCoiPdf)}
                        />
                    </div>
                    <div className='rounded-lg'>
                        <PiGreaterThanFill className='text-blue-500 text-[40px] rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepTwo;
