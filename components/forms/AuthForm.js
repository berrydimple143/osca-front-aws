import { Input, Form, Space } from 'antd';
import Link from "next/link";
import { DoubleLeftOutlined, SendOutlined } from '@ant-design/icons';
import ModalLoading from '../ModalLoading';

const AuthForm = ({
    onFinish,
    title,
    saving,
    loading,
    inputStatus,
    page
}) => (
    <div>

      {(saving) && (
          <ModalLoading
              message="Saving, please wait ..."
              pcolor="bg-green-500"
          />
      )}
      {(loading) && (
          <ModalLoading
              message="Loading, please wait ..."
              pcolor="bg-yellow-500"
          />
      )}
      <h4 className='text-primary text-xl text-center'>{title}</h4>
      <Form
          layout="vertical"
          className="py-0"
          onFinish={onFinish}
      >
        { page !== "Login" && (
          <>
            <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'First Name is required.' }, { max: 191, message: 'First Name must be at most 191 characters long' }]}>
                <Input status="warning" size="large" className="w-full" placeholder="Type your first name here ..." />
            </Form.Item>
            <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Last Name is required.' }, { max: 191, message: 'First Name must be at most 191 characters long' }]}>
                <Input status="warning" size="large" className="w-full" placeholder="Type your last name here ..." />
            </Form.Item>
          </>
        )}
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Email is required.' }, { type: 'email', message: 'Invalid email address.' }, { max: 191, message: 'First Name must be at most 191 characters long' }]}>
              <Input status={`${inputStatus}`} size="large" className="w-full" placeholder="Type email here ..." />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password is required.' }, { min: 6, message: 'Password must be at least 6 characters long.' }]}>
              <Input.Password status={`${inputStatus}`} size="large" className="w-full" placeholder="Type your password here ..." />
          </Form.Item>
          { page !== "Login" && (
            <Form.Item
              label="Confirm Password"
              name="confirm"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
              >
                <Input.Password status="warning" size="large" className="w-full" placeholder="Type your password here ..." />
            </Form.Item>
          )}
          <Form.Item>
              <button className="px-8 py-3 w-full border rounded-none bg-active uppercase text-xl hover:bg-yellow-500">
                  <Space size="middle">
                    <SendOutlined />
                    {page}
                  </Space>
              </button>
          </Form.Item>
          { page !== "Login" && (
              <h3>
                  <Link href="/login" className="font-bold text-primary hover:text-orange-500">Already registered? Click here to login</Link>
              </h3>
          )}
          { page === "Login" && (
              <h3>
                  <Link href="/" className="font-bold text-primary hover:text-orange-500">
                      <Space size="small"><DoubleLeftOutlined />Back home</Space>
                  </Link>
              </h3>
          )}
      </Form>
    </div>
);

export default AuthForm;
