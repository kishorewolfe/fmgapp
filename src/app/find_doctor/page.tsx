import FindDoctor from '@/components/FindaDoctor'
import { Metadata } from 'next';
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const ProvidersPageScreen = (props: Props) => {
  return (
    <div>
      <FindDoctor/>
    </div>
  )
}

export default ProvidersPageScreen;