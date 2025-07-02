import { FC, useCallback, useEffect } from 'react';
import Layout from '@/components/layout/Layout.component';
import Flexbox from '@/shared-styles/Flexbox.css';
import { Title as SharedTitle } from '@/components/typography/Typography.component';
import SharedButton from '@/components/button/Button.component';
import Grid from '@/components/grid/Grid.component';
import styled from 'styled-components';
import useDragons from '@/io/redux/dragons/useDragons.hook';
import { useRouter } from 'next/router';
import { Dragon } from '@/io/redux/dragons/dragons.types';
import { SkeletonLoading } from '@/components/skeleton/SkeletonLoading.component';

const Wrapper = styled.div`
  width: 100%;
  ${Flexbox}
  flex-direction: column;
`;

const Title = styled(SharedTitle)`
  text-align: center;
  margin: 0;
  text-align: left;
`;

const Button = styled(SharedButton)`
  margin: 16px 0;
  width: 140px;
  font-size: 14px;
`;

const WrapperSkeleton = styled.div`
  margin: 16px 0;
`;

const DragonsView: FC = () => {
  const {
    state: { dragons },
    actions: { fetchAll, remove },
    loading: { isLoading },
  } = useDragons();
  const { push } = useRouter();

  const HEADERS = ['ID', 'Nome']; // 'Tipo', 'Data'
  const DRAGON_KEYS = ['id', 'name']; // 'type', 'createdAt'

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleEditDragon = useCallback(
    (item: Dragon) => {
      push(`/dragon/${item.id}`);
    },
    [push],
  );

  const handleDeleteDragon = useCallback(
    (item: Dragon) => {
      remove(item);
    },
    [remove],
  );

  const handleCreateDragon = useCallback(() => {
    push('/dragon');
  }, [push]);

  return (
    <Layout menuActive>
      <Wrapper>
        <Title>Dragões</Title>

        {isLoading ? (
          <WrapperSkeleton>
            <SkeletonLoading lines={1} height={40} />
            <br />
            <SkeletonLoading lines={1} height={window.innerHeight / 3} />
            <br />
            <SkeletonLoading lines={1} height={30} />
          </WrapperSkeleton>
        ) : (
          <>
            <Button
              type="button"
              disabled={false}
              isLoading={false}
              onClick={handleCreateDragon}
            >
              Incluir dragão
            </Button>

            <Grid
              headers={HEADERS}
              keys={DRAGON_KEYS}
              data={dragons}
              onEdit={handleEditDragon}
              onDelete={handleDeleteDragon}
            />
          </>
        )}
      </Wrapper>
    </Layout>
  );
};

export default DragonsView;
