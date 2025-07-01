/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import Link from 'next/link';
import styled from 'styled-components';
import EyeIcon from '@/components/icons/EyeIcon.component';
import EyeHideIcon from '@/components/icons/EyeHideIcon.component';
import validationSchema from './schema';
import Input from '@/components/input/Input.component';
import {
  Paragraph,
  Title as SharedTitle,
} from '@/components/typography/Typography.component';
import FormCard from '@/components/card/FormCard.component';
import SharedButton from '@/components/button/Button.component';

const LinkNext = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled(FormCard)`
  width: 100%;
  max-width: 415px;

  margin: 0 auto;
`;

const Title = styled(SharedTitle)`
  text-align: center;
  margin: 0;
`;

const Button = styled(SharedButton).attrs(() => ({ block: true }))`
  margin-top: 20px;
`;

const SignupParagraph = styled(Paragraph).attrs(() => ({ color: 'secondary' }))`
  text-align: center;
  margin: 10px 0 0;
`;

const SignupLink = styled.a`
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

interface FormValues {
  user: string;
  password: string;
}

interface SigninFormProps {
  isLoading: boolean;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void;
}

const SigninForm: FC<SigninFormProps> = ({ isLoading, onSubmit }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const submitForm = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    onSubmit(values, formikHelpers);
  };

  const initialValues: FormValues = { user: '', password: '' };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        {({ errors, touched }: FormikProps<FormValues>) => (
          <Form noValidate>
            <Field name="user">
              {({ field }: any) => (
                <Input
                  {...field}
                  label="Digite seu usuário"
                  errorText={touched.user && errors.user ? errors.user : ''}
                  error={touched.user && Boolean(errors.user)}
                  type="text"
                  autoComplete="off"
                />
              )}
            </Field>

            <Field name="password">
              {({ field }: any) => (
                <Input
                  {...field}
                  label="Digite sua senha"
                  errorText={
                    touched.password && errors.password ? errors.password : ''
                  }
                  error={touched.password && Boolean(errors.password)}
                  type={hidePassword ? 'password' : 'text'}
                  autoComplete="off"
                  icon={hidePassword ? EyeHideIcon : EyeIcon}
                  onIconClick={() => setHidePassword(!hidePassword)}
                />
              )}
            </Field>
            <Button type="submit" disabled={isLoading} isLoading={isLoading}>
              Acessar
            </Button>
            <SignupParagraph>
              Ainda não tem conta?{' '}
              <LinkNext href="/signup">
                <SignupLink>Cadastre-se</SignupLink>
              </LinkNext>
            </SignupParagraph>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default SigninForm;
