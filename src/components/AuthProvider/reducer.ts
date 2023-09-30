import { IAuthState } from './initialState';
import { Types } from './types';
import { IUser } from '@/components/Registration/types';

export type Action =
  | { type: Types.Login; payload: IUser }

export const reducer = (state: IAuthState, { type, payload }: Action) => {
  switch (type) {
  case Types.Login:
    return {
      ...state,

      isAuthenticated: true,
      user: payload
    };

  default:
    return state;
  }
};
