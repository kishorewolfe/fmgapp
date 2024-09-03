import InsurancePage from '@/components/Insurance'
import { Metadata } from 'next';
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const Insurance = (props: Props) => {
  return (
    <div>
      <InsurancePage/>
    </div>
  )
}

export default Insurance