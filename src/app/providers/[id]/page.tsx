"use client"
import { RootState } from '@/app/store'
import { doctorData } from '@/components/FindaDoctor/DoctorData'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation'
import EachDoctorProfile from '@/components/FindaDoctor/EachDoctorProfile'
import ProfileNotFound from '@/components/FindaDoctor/ProfileNotFound'

const ProvidersPage = ({params}  ) => {
    //const[isprofileavailable,setIsProfileAvailable] = useState(true)
    let isProfileAvailable = null;
    let i = params?.id;



    isProfileAvailable = doctorData.some(obj => obj.id === Number(i));
const doctor = doctorData.filter(obj => obj.id === Number(i));

console.log(isProfileAvailable);

        if(isProfileAvailable){
            return <EachDoctorProfile doctor={doctor} />
        }
        else{
            return <ProfileNotFound/>
        }
    }


 


export default ProvidersPage

