import {
  DragonsState,
  DragonsTypes,
  SET_DRAGON,
  SET_DRAGONS,
  SET_DRAGON_DELETE,
  SET_DRAGON_RESET,
} from './dragons.types';

const initialState: DragonsState = {
  dragons: [],
  dragon: null,
};

const dragonsReducer = (state = initialState, action: DragonsTypes) => {
  switch (action.type) {
    case SET_DRAGONS:
      return {
        ...state,
        dragons: action.payload,
      };
    case SET_DRAGON:
      return {
        ...state,
        dragon: action.payload,
      };
    case SET_DRAGON_DELETE: {
      const { dragons } = state;

      const updatedDragons = dragons.filter(
        (dragon) => dragon.id !== action.payload.id,
      );

      return {
        ...state,
        dragons: updatedDragons,
      };
    }
    case SET_DRAGON_RESET:
      return {
        ...state,
        dragon: action.payload,
      };
    default:
      return state;
  }
};

export default dragonsReducer;
