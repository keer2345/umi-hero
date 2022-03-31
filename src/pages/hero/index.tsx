import React, { FC } from 'react'
import { connect, HeroModelState, ConnectProps } from 'umi'

interface PagePros extends ConnectProps {
  hero: HeroModelState
}

const Hero: FC<PagePros> = (props) => {
  console.log('props: ', props.hero)
  return (
    <div>
      <h1>Page hero</h1>
      <h2>This is {props.hero.name}</h2>
      <h3>This is {JSON.stringify(props.hero)}</h3>
    </div>
  )
}

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero)
