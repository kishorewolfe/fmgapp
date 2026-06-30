import React from 'react'
import UmcaresHero from './UmcaresHero'
import UMcaresList from './UMcaresList'
import UMCaresHeroTwo from './UMCaresHeroTwo'
import UMClinicalCriteriaPdf from './UMClinicalCriteriaPdf'
import MedicalNecessityHero from './MedicalNecessityHero'

type Props = {}

const UMCaresUIPages = (props: Props) => {
  return (
    <div>
        <UmcaresHero/>
        <UMcaresList/>
        <UMClinicalCriteriaPdf/>
         <UMCaresHeroTwo/>
        <MedicalNecessityHero/>
    </div>
  )
}

export default UMCaresUIPages