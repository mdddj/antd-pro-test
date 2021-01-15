import request from "umi-request";

// 发送消息给所有在线用户
export async function sendSimpleMessageWithSocket(content: string) {
  return request('/api/v1/message/sendAll', {
    data: {
      content: content
    },
    method: 'POST',
    requestType: 'form'
  });
}
