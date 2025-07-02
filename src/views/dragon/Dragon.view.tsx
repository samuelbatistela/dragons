import { FC, useEffect } from 'react';
import Layout from '@/components/layout/Layout.component';
import Flexbox from '@/shared-styles/Flexbox.css';
import styled from 'styled-components';
import useDragons from '@/io/redux/dragons/useDragons.hook';
import { useRouter } from 'next/router';
import Form from './components/Form.component';

const Wrapper = styled.div`
  width: 100%;
  ${Flexbox}
  flex-direction: column;
`;

export interface FormValues {
  name: string;
  type: string;
}

const DragonView: FC = () => {
  const {
    actions: { save, fetchOne, reset },
    state: { dragon },
    loading: { isLoadingSubmit, isLoadingDragon },
  } = useDragons();

  const { query, push } = useRouter();
  const { id } = query;

  const handleSubmit = async (values: FormValues) => {
    const result = await save(values);

    if (result === true) {
      push('/dragons');
    } else {
      alert(result);
    }
  };

  useEffect(() => {
    reset();
  }, [reset]);

  useEffect(() => {
    const fetchDragon = async () => {
      if (typeof id === 'string' && id) {
        const result = await fetchOne(id);

        if (result !== true) {
          alert(result);
        }
      }
    };

    fetchDragon();
  }, [id, fetchOne]);

  return (
    <Layout menuActive>
      <Wrapper>
        <Form
          isLoading={isLoadingDragon}
          isLoadingSubmit={isLoadingSubmit}
          onSubmit={handleSubmit}
          initialData={dragon ?? undefined}
        />
      </Wrapper>
    </Layout>
  );
};

export default DragonView;
