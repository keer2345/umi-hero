import React from 'react'
import { Layout, Menu } from 'antd'
import { LayoutBreadcrumbProps } from '@ant-design/pro-layout/lib/BasicLayout'
import { UmiComponentProps } from '@/common/type'
import styles from './index.less'

const { Header, Content, Footer } = Layout

interface LayoutProps extends UmiComponentProps {}

const BaseLayout = (props: LayoutProps) => {
  return (
    <Layout>
      <Header>
        <div className={styles.logo}>王者荣耀资料库</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">英雄</Menu.Item>
          <Menu.Item key="2">道具</Menu.Item>
          <Menu.Item key="3">技能</Menu.Item>
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
