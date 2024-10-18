// import React from 'react';
// import { useChat, useSettings } from '../../store/store';
// import { BotMessage, UserMessage } from './Message';
// import { IonIcon } from '@ionic/react';
// import { caretDownOutline } from 'ionicons/icons';

// const Chats: React.FC = () => {
//   const { chats } = useChat();
//   const { selectedDatabase, setSelectedDatabase } = useSettings();
//   const [isOpen, setIsOpen] = React.useState(false);
//   const databases = ['ERP Navi', 'UDS', 'Discovery'];

//   return (
//     <div className="flex flex-col h-full overflow-y-auto">
//       {chats.map((chat) => (
//         chat.role === 'assistant' ? (
//           <BotMessage key={chat.id} message={chat} />
//         ) : (
//           <UserMessage key={chat.id} message={chat} />
//         )
//       ))}
//       <div className="mt-4 flex justify-center">
//         <div className="relative w-64">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//           >
//             {selectedDatabase || 'Select Database'}
//             <IonIcon icon={caretDownOutline} className="ml-2 h-5 w-5" />
//           </button>

//           {isOpen && (
//             <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md">
//               {databases.map((db) => (
//                 <button
//                   key={db}
//                   onClick={() => {
//                     setSelectedDatabase(db);
//                     setIsOpen(false);
//                   }}
//                   className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                 >
//                   {db}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chats;


import useChat from "../../store/store";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";

export default function Chats() {
  const chats = useChat((state) => state.chats);

  return (
    <div className="md:mt-10 w-full">
      {chats.map((chat, index) =>
        chat.role === "assistant" ? (
          <BotMessage index={index} key={chat.id} chat={chat} />
        ) : (
          <UserMessage chat={chat} chatIndex={index} key={chat.id} />
        )
      )}

      <div className="h-48 flex-shrink-0"></div>
    </div>
  );
}
