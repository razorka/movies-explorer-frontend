import React from 'react';

import AuthForm from '../AuthForm/AuthForm';

import AuthHeader from '../AuthHeader/AuthHeader';

import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login() {

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.table(values);
    resetForm();
  };

  const INPUTS_DATA = [
    {
      key: 1,
      inputClassName: '',
      labelClassName: '',
      type: 'email',
      id: 'email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
    },
    {
      key: 2,
      inputClassName: '',
      labelClassName: '',
      type: 'password',
      id: 'password',
      label: 'Пароль',
      placeholder: 'Пароль',
      name: 'password',
      minLength: 8,
      required: true,
    },
  ];

  const SUBMIT_BUTTON_SETTINGS = {
    type: 'submit',
    title: 'Войти',
  };

  const FORM_AUTH_QUESTION_SETTINGS = {
    questionText: 'Ещё не зарегистрированы? ',
  };

  const ROUTE_LINK_SETTINGS = {
    linkTitle: 'Регистрация',
    linkPath: '/signup',
  }

  const TITLE_TEXT = 'Рады видеть!';

  const AUTH_ERROR_TEXT = 'Что-то пошло не так...';

  const LOGIN_STYLE_SETTINGS = {
    main: 'login',
    header: 'register__header',
    title: 'register__title',
  };

  return (
    <main
      className={LOGIN_STYLE_SETTINGS.main}
    >
      <AuthHeader
        titleText={TITLE_TEXT}
      />
      <AuthForm
        inputsData={INPUTS_DATA}
        routeLinkSettings={ROUTE_LINK_SETTINGS}
        onChange={handleChange}
        values={values}
        errors={errors}
        onSubmit={handleSubmit}
        submitButtonSettings={SUBMIT_BUTTON_SETTINGS}
        formAuthQuestionSettings={FORM_AUTH_QUESTION_SETTINGS}
        formIsValid={isValid}
        authErrorText={AUTH_ERROR_TEXT}
      />
    </main>
  )
}

export default Login;
