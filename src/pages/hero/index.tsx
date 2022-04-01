import styles from './index.less'
import React, { FC } from 'react'
import { connect, HeroModelState, ConnectProps } from 'umi'
import { Row, Col, Card, Radio } from 'antd'

interface PagePros extends ConnectProps {
  hero: HeroModelState
}

const RadioGroup = Radio.Group

const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
]

const Hero: FC<PagePros> = ({ hero, dispatch }) => {
  const { heros = [], filterKey = 0 } = hero

  const onChange = (e: any) => {
    dispatch({
      type: 'hero/save',
      payload: {
        filterKey: e.target.value,
      },
    })
  }

  return (
    <div className={styles.normal}>
      <Card className={styles.radioPanel}>
        <RadioGroup onChange={onChange} value={filterKey}>
          {heroType.map((data) => (
            <Radio value={data.key} key={`hero-radio-${data.key}`}>
              {data.value}
            </Radio>
          ))}
        </RadioGroup>
      </Card>
      <Row>
        {heros
          .filter((item) => filterKey === 0 || item.hero_type === filterKey)
          .reverse()
          .map((item) => (
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
