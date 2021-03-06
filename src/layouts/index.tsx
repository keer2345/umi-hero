import React from 'react'
import { Layout, Menu } from 'antd'
import { LayoutBreadcrumbProps } from '@ant-design/pro-layout/lib/BasicLayout'
import { UmiComponentProps } from '@/common/type'
import styles from './index.less'
import { Link } from 'umi'

const { Header, Content, Footer } = Layout

const menuData = [
  { route: '/hero', name: '英雄' },
  { route: '/item', name: '局内道具' },
  { route: '/summoner', name: '召唤师技能' },
]

interface LayoutProps extends UmiComponentProps {}

const BaseLayout = (props: LayoutProps) => {
  return (
    <Layout>
      <Header>
        <div className={styles.logo}>
          <Link to="/">王者荣耀资料库</Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map((menu) => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Umi</Footer>
    </Layout>
  )
}

export default BaseLayout
