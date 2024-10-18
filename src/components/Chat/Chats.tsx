// In /src/components/Chat/Chats.tsx

import React from 'react';
import { useChat, useSettings } from '../../store/store';
import BotMessage from './BotMessage';
import UserMessage from './UserMessage';

const Chats: React.FC = () => {
  const { chats } = useChat();
  const { settings } = useSettings();
  const { selectedDatabase } = settings;

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="text-lg font-semibold mb-4">
        Selected Database: {selectedDatabase || 'None'}
      </div>
      {chats.map((chat, index) => (
        chat.role === 'assistant' ? (
          <BotMessage key={chat.id} index={index} chat={chat} />
        ) : (
          <UserMessage key={chat.id} chatIndex={index} chat={chat} />
        )
      ))}
    </div>
  );
};

export default Chats;



// import useChat from "../../store/store";
// import BotMessage from "./BotMessage";
// import UserMessage from "./UserMessage";

// export default function Chats() {
//   const chats = useChat((state) => state.chats);

//   return (
//     <div className="md:mt-10 w-full">
//       {chats.map((chat, index) =>
//         chat.role === "assistant" ? (
//           <BotMessage index={index} key={chat.id} chat={chat} />
//         ) : (
//           <UserMessage chat={chat} chatIndex={index} key={chat.id} />
//         )
//       )}

//       <div className="h-48 flex-shrink-0"></div>
//     </div>
//   );
// }
