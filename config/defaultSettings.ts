import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} ={
  "navTheme": "light",
  "primaryColor": "#722ED1",
  "layout": "mix",
  "contentWidth": "Fluid",
  "fixedHeader": false,
  "fixSiderbar": true,
  "title": "后台",
  "pwa": false,
  "iconfontUrl": "",
  "splitMenus": false
};

export default Settings;
