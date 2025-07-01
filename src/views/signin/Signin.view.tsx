import { FC } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import useUser from '@/io/redux/user/useUser.hook';
import Layout from '@/components/layout/Layout.component';
import Flexbox from '@/shared-styles/Flexbox.css';
import Form from './components/Form.component';
import { FormikHelpers } from 'formik';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  ${Flexbox}
  flex-direction: column;
  justify-content: center;
`;

interface FormValues {
  user: string;
  password: string;
}

const SigninView: FC = () => {
  const { isLoading, authenticateUser } = useUser();

  const { push } = useRouter();
  const handleLogin = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    if (await authenticateUser(values)) {
      push('/dragons');
    } else
      formikHelpers.setErrors({
        user: 'Confira seu usuário',
        password: 'Confira sua senha',
      });
  };

  return (
    <Layout menuActive={false}>
      <Wrapper>
        <Form isLoading={isLoading} onSubmit={handleLogin} />
      </Wrapper>
    </Layout>
  );
};

export default SigninView;
