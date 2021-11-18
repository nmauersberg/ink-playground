import { Message, Status, Severity, Prompt } from '@paritytech/components/';

export const defaultState: State = {
  messages: [],
  nextId: 0,
};

export type State = {
  messages: Array<Message>;
  nextId: number;
};

export type Action = {
  type: 'LOG_COMPILE' | 'LOG_SYSTEM' | 'LOG_GIST';
  payload: {
    status: Status;
    content: string;
  };
};

export type Dispatch = (action: Action) => void;

const lastId = (state: State, prompt: Prompt): number => {
  const arr = state.messages.filter(message => message.prompt === prompt);
  return arr[arr.length - 1].id;
};

export const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'LOG_SYSTEM':
      if (payload.status === 'IN_PROGRESS') {
        const newMessage: Message = {
          id: state.nextId,
          prompt: 'SYSTEM',
          status: 'IN_PROGRESS',
          content: payload.content,
          severity: Severity.Info,
        };
        return {
          ...state,
          messages: [...state.messages, newMessage],
          nextId: state.nextId + 1,
        };
      } else {
        const id = lastId(state, 'SYSTEM');
        const updateMessage: Message = {
          id,
          prompt: 'SYSTEM',
          status: payload.status,
          content: payload.content,
          severity: Severity.Success,
        };
        return {
          ...state,
          messages: [...state.messages, updateMessage],
        };
      }
    case 'LOG_COMPILE':
      if (payload.status === 'IN_PROGRESS') {
        const newMessage: Message = {
          id: state.nextId,
          prompt: 'COMPILE',
          status: 'IN_PROGRESS',
          content: payload.content,
          severity: Severity.Info,
        };
        return {
          ...state,
          messages: [...state.messages, newMessage],
          nextId: state.nextId + 1,
        };
      } else {
        const id = lastId(state, 'COMPILE');
        const updateMessage: Message = {
          id,
          prompt: 'COMPILE',
          status: payload.status,
          content: payload.content,
          severity: Severity.Success,
        };
        const newMessage: Message = {
          id: state.nextId,
          prompt: 'COMPILE',
          status: payload.status,
          content: 'This is your compile Result: <RESULT>',
          severity: Severity.Success,
        };
        return {
          ...state,
          messages: [...state.messages, updateMessage, newMessage],
          nextId: state.nextId + 1,
        };
      }
    case 'LOG_GIST':
      return state;
    default:
      return state;
  }
};
