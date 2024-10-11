import InsurancePagePlans from '@/components/InsurancePagePlans'
import { Metadata } from 'next';
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};

const page = (props: Props) => {
  return (
    <div>
      <InsurancePagePlans/>
    </div>
  )
}

export default page