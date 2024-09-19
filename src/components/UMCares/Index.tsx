import React from 'react'
import UmcaresHero from './UmcaresHero'
import UMcaresList from './UMcaresList'
import UMCaresHeroTwo from './UMCaresHeroTwo'

type Props = {}

const UMCaresUIPages = (props: Props) => {
  return (
    <div>
        <UmcaresHero/>
        <UMcaresList/>
        <UMCaresHeroTwo/>
    </div>
  )
}

export default UMCaresUIPages