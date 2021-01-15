import * as React from "react";
import {Button, Card, Form, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import {sendSimpleMessageWithSocket} from '../service';
import Title from "antd/lib/typography/Title";
import {FormInstance} from "antd/lib/form";

type SubmitDataType = {
  content: string
}

export const SimpleSendToAll: React.FC = () => {

  const formRef = React.createRef<FormInstance>();

  // 开始发送
  const sendToAll = async (values: SubmitDataType) => {
    const loading = message.loading('正在发送');
    const response = await sendSimpleMessageWithSocket(values.content);
    loading();
    if (response.state == 200) {
      message.success('发送成功');
      formRef.current!.setFieldsValue({
        content:''
      })
    } else {
      message.error(response.message);
    }
  }

  const onFinish = async (values: SubmitDataType) => {
    await sendToAll(values);
  }

  return <div>
    <Card>
      <Title level={1}>发送消息给所有人</Title>
      <Form ref={formRef} layout='vertical' onFinish={onFinish}>
        <Form.Item name={'content'} label={'正文'} rules={[{required: true}]}>
          <TextArea rows={4} placeholder={'请输入发送内容'}/>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>发送</Button>
        </Form.Item>
      </Form>


      {/*<Button type={"primary"} onClick={async () => {*/}
      {/*  await sendToAll();*/}
      {/*}}>发送</Button>*/}
    </Card>
  </div>

}

