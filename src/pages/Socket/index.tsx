import React from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, Card, Radio } from "antd";
import Title from "antd/lib/typography/Title";
import '../../models/counter';
import { useModel } from 'umi';
import { sendMessage, SendMessageParams } from '@/services/test';


const MessageType: React.FC = () => (
  <>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">普通消息</Radio.Button>
      <Radio.Button value="b">消息提示</Radio.Button>
      <Radio.Button value="c">升级提示</Radio.Button>
      <Radio.Button value="d">上线提醒</Radio.Button>
    </Radio.Group>
  </>
);


/// 操作按钮
const CounterButtonTest: React.FC = () => {

  const { add, min } = useModel("counter", (ret) => ({
    add: ret.increment,
    min: ret.decrement
  }));

  return (
    <div>
      <Button type='primary' onClick={add}>增加</Button>
      <Button type='primary' onClick={min}>减少</Button>
    </div>
  );
}

/// 数据显示
const CounterShow: React.FC = () => {
  const model = useModel('counter');
  return (
    <div>
      <Title level={1}>{model.counter}</Title>
    </div>
  );
}

const SubmitMessage = async (content: string) => {
  const response = await sendMessage({ content: content } as SendMessageParams);
  console.log(response);

}

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Title level={1}>推送一条消息到平板</Title>
        <MessageType />
        <CounterButtonTest />
        <CounterShow></CounterShow>
        <Button type='default' onClick={async () => {
          SubmitMessage('测试消息')
        }}>发送消息</Button>
      </Card>
    </PageContainer>
  );
}
