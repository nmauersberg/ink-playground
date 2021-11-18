import { ReactElement, useContext, useEffect, useState } from 'react';
import { ConsoleMessages } from '@paritytech/components/';
import { MessageContext } from '~/context/messages';
import { Message } from '@paritytech/components/';

export const Console = (): ReactElement => {
  const [state] = useContext(MessageContext);
  const [processedMessages, setProcessedMessages] = useState<Message[]>([]);

  const findNext = (id: number): Message | null => {
    const messagesOfConcern = state.messages.filter(message => message.id === id);
    return messagesOfConcern.length > 1 ? messagesOfConcern[messagesOfConcern.length - 1] : null;
  };

  const isFirst = (id: number, index: number): boolean => {
    const indexFound = state.messages.map(m => m.id).indexOf(id);
    return indexFound === index ? true : false;
  };

  useEffect(() => {
    const messagesToRender: Message[] = [];
    state.messages.forEach((message, index) => {
      const nextMessage = findNext(message.id);
      if (nextMessage) message = nextMessage;
      if (isFirst(message.id, index)) messagesToRender.push(message);
    });
    setProcessedMessages(messagesToRender);
  }, [state.messages]);

  return (
    <div className="h-full w-full relative">
      <div
        className={`
          dark:text-primary dark:bg-primary text-light text-sm subpixel-antialiased  
          leading-normal px-5 pt-4 pb-4 shadow-lg overflow-y-scroll h-full w-full absolute
        `}
      >
        <ConsoleMessages messages={processedMessages} />
      </div>
    </div>
  );
};
