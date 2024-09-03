import FAQ from '@/components/Privacy/FAQ'
import { Metadata } from 'next';
import React from 'react'

type Props = {}
export const metadata: Metadata = {
  title: "My Family Medical Group",
  description: "My Family Medical Group",
  // other metadata
};
const Page = (props: Props) => {
  return (
    <div className=''><FAQ/></div>
  )
}

export default Page