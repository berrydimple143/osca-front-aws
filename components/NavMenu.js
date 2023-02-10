import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const NavMenu = () => (
  <Menu className='flex' mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      Navigation One
    </Menu.Item>
    <Menu.Item key="other" icon={<AppstoreOutlined />}>
      Navigation Two
    </Menu.Item>
  </Menu>
);
export default NavMenu;
