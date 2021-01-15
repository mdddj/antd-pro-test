import * as React from 'react';
import {PageContainer} from "@ant-design/pro-layout";
import {Card, Tabs} from "antd";
// @ts-ignore
import {SimpleSendToAll} from './Components/SimpleSendToAll';

// 选项卡属性
type RenderTabsProps = {
  callback: (key: string) => void
}

// 选项卡
const RenderTabs: React.FC<RenderTabsProps> = props => {
  const {TabPane} = Tabs;
  return <><Tabs onChange={props.callback} type="card">
    <TabPane tab="普通通知" key="1">
      <SimpleSendToAll/>
    </TabPane>
    <TabPane tab="单个发送" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="特殊消息" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs></>;
}

// 页面布局
export default (): React.ReactNode => {

  // 选项卡切换事件
  const onTabChanged = (key: string) => {
    console.log(key);
  }

  return (
    <PageContainer>
      <Card>
        <RenderTabs callback={onTabChanged}/>
      </Card>
    </PageContainer>
  );
}
