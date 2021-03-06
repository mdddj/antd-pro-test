import React from "react";
import {PageContainer} from "@ant-design/pro-layout";
import {Button, Card, message, Radio} from "antd";
import Title from "antd/lib/typography/Title";
import '../../models/counter';
import {useModel} from 'umi';
import FCTest from '@/pages/components/SFCCounter';
import {FCSpreadAttributes} from '@/pages/components/SFAttributes';
import {ClassCounter} from "../components/ClassComponent";
import {DefaultProps} from "../components/DefaultProps";
import {GenerList} from "../components/GenericListComponent";
import {UserRender} from "../components/UserRender";
import {User} from '@/pages/components/user';
import {sendMessage} from '@/services/test';


const users = [
  new User(1, '小黄', 24),
  new User(2, '小洋', 22),
  new User(3, '小谢', 25),
]

const MessageType: React.FC = () => (
  <>
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">普通消息</Radio.Button>
      <Radio.Button value="b">消息提示</Radio.Button>
      <Radio.Button value="c">升级提示</Radio.Button>
      <Radio.Button value="d">上线提醒</Radio.Button>
    </Radio.Group>
    <Card>
      <Button onClick={async () => {
        await sendMessageHandle('测试消息');
      }}>
        发送
      </Button>
    </Card>

  </>
);


/// 操作按钮
const CounterButtonTest: React.FC = () => {

  const {add, min} = useModel("counter", (ret) => ({
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
// FC ----------
type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

export const FCCounter: React.FC<Props> = props => {
  const {label, count, onIncrement} = props;

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

const sendMessageHandle = async (msg: string) => {
  const hide = message.loading('正在发送');
  await sendMessage({content: msg});
  hide();
  message.success('发送成功');
}


export default (): React.ReactNode => {

  return (
    <PageContainer>
      <Card>
        <Title level={1}>推送一条消息到平板</Title>
        <MessageType/>
        <CounterButtonTest/>
        <CounterShow/>
        <FCTest/>
        <FCSpreadAttributes
          style={{backgroundColor: 'grey'}}
        >
          {`你好，看看我的背景颜色变了吗？`}
        </FCSpreadAttributes>
        <ClassCounter lable='class counter 例子'/>
        <DefaultProps lable='带有默认参数的计数器'/>
        <GenerList
          items={users}
          itemRenderer={(item) => <UserRender user={item}/>}
        />
      </Card>
    </PageContainer>
  );
}
