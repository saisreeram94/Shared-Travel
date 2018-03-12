import React from 'react';
import Input from '../../components/Input/Input';

const LoginContainer = () => {
  const userFieldProps = {
    inputPlaceHolder: 'username',
    className: 'username-field',
    inputType: 'text',
    regex: '',
  };
  const passwordFieldProps = {
    inputPlaceHolder: 'password',
    className: 'password-field',
    inputType: 'password',
    regex: '',
  };

  return (
    <div>
      <Input fieldProps={userFieldProps} />
      <Input fieldProps={passwordFieldProps} />
    </div>
  );
};

export default LoginContainer;
