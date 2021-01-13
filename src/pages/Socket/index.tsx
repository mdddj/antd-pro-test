import React from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { Button, Card, Radio } from "antd";
import Title from "antd/lib/typography/Title";
import '../../models/counter';
import { useModel, useRequest } from 'umi';
import { sendMessage, SendMessageParams } from '@/services/test';
import FCTest from '@/pages/components/SFCCounter';
import {FCSpreadAttributes} from '@/pages/components/SFAttributes';

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

// 网络请求

const SubmitMessage : React.FC = () => {
  const { data, error, loading } = useRequest(() => {
    return sendMessage({ content: '测试' } as SendMessageParams);
  })

  console.log(data);

  if(loading){
    return <div>加载中</div>
  }

  if(error){
    return <div>{error}</div>
  }

  return (
    <div>
      <Title level={1}>{data}</Title>
    </div>
  );
}


// FC ----------
type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

 export const FCCounter: React.FC<Props> = props => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => {
    onIncrement();
  };

  return (
    <div>
      <Title level={1}>
        {label}: {count}
      </Title>
      <Button type='primary' onClick={handleIncrement}>
        {`加1`}
      </Button>
    </div>
  );
};




export default (): React.ReactNode => {



  return (
    <PageContainer>
      <Card>
        <Title level={1}>推送一条消息到平板</Title>
        <MessageType />
        <CounterButtonTest />
        <CounterShow></CounterShow>
        <FCTest></FCTest>
        <FCSpreadAttributes
          style={{backgroundColor:'grey'}}
        >
          {`你好，看看我的背景颜色变了吗？`}
        </FCSpreadAttributes>
      </Card>
    </PageContainer>
  );
}
