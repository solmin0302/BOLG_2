import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../store/modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const { form } = useSelector(({ auth }) => ({ form: auth.register }));
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      type="register"
    />
  );
};

export default RegisterForm;
