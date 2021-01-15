import {request} from 'umi';

export type SendMessageParams = {
  content: string
}

export async function sendMessage(params: SendMessageParams) {
  return request('/api/v1/message/sendAll', {
    method: 'POST',
    data: params,
    requestType: 'form'
  });
}
