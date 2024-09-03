import HealthEducationPage from '@/components/HealthEducation/HealthEducation'
import { Metadata } from 'next';
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const HealthEducation = (props: Props) => {
  return (
    <div>
        <HealthEducationPage/>
    </div>
  )
}

export default HealthEducation