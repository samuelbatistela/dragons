/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../root.reducer';
import {
  DragonsState,
  DragonsTypes,
  SET_DRAGON,
  SET_DRAGONS,
  SET_DRAGON_DELETE,
  SET_DRAGON_RESET,
} from './dragons.types';
import DragonApi from '@/io/api/dragonApi';

const useDragons = () => {
  const { dragons, dragon } = useSelector<AppState, DragonsState>((state) => ({
    dragons: state.dragons.dragons,
    dragon: state.dragons.dragon,
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [isLoadingDragon, setIsLoadingDragon] = useState(false);

  const dispatch = useDispatch<Dispatch<DragonsTypes>>();

  const saveDragon = useCallback(
    async (dragon: any): Promise<true | string> => {
      try {
        setIsLoadingSubmit(true);

        if (dragon.id) {
          await DragonApi.updateDragon(dragon);
        } else {
          await DragonApi.createDragon(dragon);
        }

        dispatch({ type: SET_DRAGON, payload: null });
        return true;
      } catch (err: any) {
        console.error('Erro ao salvar dragão:', err);
        return 'Erro ao salvar dragão';
      } finally {
        setIsLoadingSubmit(false);
      }
    },
    [dispatch],
  );

  const fetchAllDragons = useCallback(async (): Promise<true | string> => {
    try {
      setIsLoading(true);
      const data = await DragonApi.getDragons();
      dispatch({ type: SET_DRAGONS, payload: data });
      return true;
    } catch (err) {
      console.error('Erro ao buscar dragões:', err);
      return 'Erro ao buscar dragões:';
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  const fetchDragonById = useCallback(
    async (id: string): Promise<true | string> => {
      try {
        setIsLoadingDragon(true);
        const data = await DragonApi.getDragonById(id);
        dispatch({ type: SET_DRAGON, payload: data });
        return true;
      } catch (err) {
        console.error('Erro ao buscar dragão por ID:', err);
        return 'Erro ao buscar dragão por ID:';
      } finally {
        setIsLoadingDragon(false);
      }
    },
    [dispatch],
  );

  const removeDragon = useCallback(
    async (dragon: any): Promise<true | string> => {
      try {
        setIsLoading(true);
        await DragonApi.deleteDragon(dragon.id);
        dispatch({ type: SET_DRAGON_DELETE, payload: dragon });
        return true;
      } catch (err) {
        console.error('Erro ao deletar dragão:', err);
        return 'Erro ao deletar dragão:' + err;
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch],
  );

  const resetDragon = useCallback(() => {
    dispatch({ type: SET_DRAGON_RESET, payload: null });
  }, [dispatch]);

  return {
    state: { dragons, dragon },
    actions: {
      fetchAll: fetchAllDragons,
      fetchOne: fetchDragonById,
      save: saveDragon,
      remove: removeDragon,
      reset: resetDragon,
    },
    loading: {
      isLoading,
      isLoadingSubmit,
      isLoadingDragon,
    },
  };
};

export default useDragons;
