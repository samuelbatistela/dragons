import React, { useEffect } from 'react';
import { NextPage } from 'next';
import DragonsView from '@/views/dragons/Dragons.view';
import { useRouter } from 'next/router';
import useUser from '@/io/redux/user/useUser.hook';

const Index: NextPage = () => {
  const { push } = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      push('/');
    }
  }, [user, push]);

  return <DragonsView />;
};

export default Index;
