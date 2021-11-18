import { useEffect, useRef, ReactElement } from 'react';
import { ConsoleMessage } from './ConsoleMessage';
import { Message } from './ConsoleMessage';

export const ConsoleMessages = ({ messages }: { messages: Message[] }): ReactElement => {
  const Messages = () => {
    return (
      <>
        {messages.map((message, index) => {
          return <ConsoleMessage key={index} message={message} />;
        })}
      </>
    );
  };

  return (
    <div>
      <Messages />
      <AlwaysScrollToBottom />
    </div>
  );
};

const AlwaysScrollToBottom = () => {
  const elementRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => elementRef?.current?.scrollIntoView());
  return <div ref={elementRef} />;
};
