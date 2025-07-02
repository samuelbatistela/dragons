/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Dragon {
  id: string;
  name: string;
  type: string;
  histories: string[];
  image: string;
  imageUrl: string;
  createdAt: string;
}

export type DragonsState = {
  dragons: Dragon[];
  dragon: Dragon | null;
};

export const SET_DRAGONS = 'SET_DRAGONS';
export const SET_DRAGON = 'SET_DRAGON';
export const SET_DRAGON_DELETE = 'SET_DRAGON_DELETE';
export const SET_DRAGON_RESET = 'SET_DRAGON_RESET';

type setDragons = {
  type: typeof SET_DRAGONS;
  payload: Dragon[];
};

type setDragon = {
  type: typeof SET_DRAGON;
  payload: any | null;
};

type setDragonDelete = {
  type: typeof SET_DRAGON_DELETE;
  payload: any | null;
};

type setDragonReset = {
  type: typeof SET_DRAGON_RESET;
  payload: any | null;
};

export type DragonsTypes =
  | setDragons
  | setDragon
  | setDragonDelete
  | setDragonReset;
