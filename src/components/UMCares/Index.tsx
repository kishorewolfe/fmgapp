import React from 'react'
import UmcaresHero from './UmcaresHero'
import UMcaresList from './UMcaresList'
import UMCaresHeroTwo from './UMCaresHeroTwo'
import UMClinicalCriteriaPdf from './UMClinicalCriteriaPdf'

type Props = {}

const UMCaresUIPages = (props: Props) => {
  return (
    <div>
        <UmcaresHero/>
        <UMcaresList/>
        <UMClinicalCriteriaPdf/>
         <UMCaresHeroTwo/>
        {/* <UMCaresHeroTwo/> */}
    </div>
  )
}

export default UMCaresUIPages