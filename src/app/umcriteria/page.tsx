import React from 'react'
import UMCaresUIPages from '@/components/UMCares/Index'
import { Metadata } from 'next';
type Props = {}
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const UMcaresPage = (props: Props) => {
  return (
    <div>
        <UMCaresUIPages/>
    </div>
  )
}

export default UMcaresPage