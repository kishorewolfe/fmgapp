import NurseService from '@/components/Services/nurse/NurseService'
import NurseServiceLayout from '@/components/Services/nurse/NurseServiceLayout'
import Contactus from '@/components/contactus'
import { Metadata } from 'next'
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const NursePage = (props: Props) => {
  return (
    <div>
      <NurseServiceLayout/>
      
    </div>
  )
}

export default NursePage