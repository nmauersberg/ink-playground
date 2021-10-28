export type Id = number | null;

export type Action =
  | {
      type: 'OPEN_SUBMENU';
      payload: { id: Id };
    }
  | {
      type: 'CLOSE_SUBMENU';
    };

export type State = {
  openId?: Id;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'OPEN_SUBMENU':
      return { ...state, openId: action.payload.id };

    case 'CLOSE_SUBMENU':
      return { ...state, openId: null };
  }
};

export const init: State = {};
