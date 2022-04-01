import styles from './index.less'
import React, { FC } from 'react'
import { connect, HeroModelState, ConnectProps } from 'umi'
import { Row, Col } from 'antd'

interface PagePros extends ConnectProps {
  hero: HeroModelState
}

const Hero: FC<PagePros> = ({ hero }) => {
  console.log('props: ', hero)

  const { heros = [] } = hero

  return (
    <div>
      <h1>Page hero</h1>
      <Row>
        {heros.reverse().map((item) => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero)
