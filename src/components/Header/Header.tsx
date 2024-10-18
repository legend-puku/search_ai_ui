import React, { useState } from 'react';
import { useSettings } from '../../store/store';
import { IonIcon } from '@ionic/react';
import { caretDownOutline, shareOutline, informationCircleOutline } from 'ionicons/icons';

const Header: React.FC = () => {
  const { settings, setSelectedDatabase } = useSettings();
  const { selectedDatabase, systemMessage, useSystemMessageForAllChats } = settings;
  const [isOpen, setIsOpen] = useState(false);
  const databases = ['ERP Navi', 'UDS', 'Discovery']; // Add your database options here

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="relative ml-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-lg font-semibold"
        >
          {/* <span>{selectedDatabase || 'Select Database'}</span> */}
          <span>{selectedDatabase ? selectedDatabase.toUpperCase() : 'SELECT DATABASE'}</span>
          <IonIcon icon={caretDownOutline} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            {databases.map((db) => (
              <button
                key={db}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => {
                  setSelectedDatabase(db);
                  setIsOpen(false);
                }}
              >
                {db}
              </button>
            ))}
          </div>
        )}
      </div>
      {systemMessage && useSystemMessageForAllChats && (
        <span className="text-sm relative group">
          <IonIcon icon={informationCircleOutline} className="text-xl" />
          <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {systemMessage}
          </span>
        </span>
      )}
      <button className="text-xl">
        <IonIcon icon={shareOutline} />
      </button>
    </header>
  );
};

export default Header;


// import React from 'react';
// import { useSettings } from '../../store/store';

// const Header: React.FC = () => {
//   const { selectedDatabase } = useSettings();

//   return (
//     <header className="text-center py-4 bg-gray-100">
//       <h1 className="text-2xl font-bold">
//         {selectedDatabase || 'Select a Database'}
//       </h1>
//     </header>
//   );
// };

// export default Header;


// import { IonIcon } from "@ionic/react";
// import { shareOutline, informationCircleOutline } from "ionicons/icons";
// import { useSettings } from "../../store/store";

// export default function Header() {
//   const [model, systemMessage, useSystemMessageForAllChats] = useSettings(
//     (state) => [
//       state.settings.selectedModal,
//       state.settings.systemMessage,
//       state.settings.useSystemMessageForAllChats,
//     ]
//   );
//   return (
//     <header className=" text-center my-2 text-sm dark:text-gray-300 border-b dark:border-none dark:shadow-md py-2 flex items-center justify-between px-2">
//       <div className="md:block hidden"></div>
//       <div className=" flex items-center relative">
//         <span>Using ({model.toLocaleUpperCase()})</span>
//         {useSystemMessageForAllChats && (
//           <span className=" flex text-xl ml-2 group cursor-pointer">
//             <IonIcon icon={informationCircleOutline} />
//             <span className=" absolute z-10 left-0 w-[calc(100%+10rem)] top-[calc(100%+1rem)] text-sm bg-gray-900 text-white p-2  rounded-md invisible  pointer-events-none group-hover:visible group-hover:pointer-events-auto transition">
//               <span className=" block underline text-teal-600">
//                 <strong>System message</strong>
//               </span>
//               <span className=" text-gray-400 block text-left">
//                 {systemMessage}
//               </span>
//             </span>
//           </span>
//         )}
//       </div>
//       <div className="">
//         <button className=" text-xl">
//           <IonIcon icon={shareOutline} />
//         </button>
//       </div>
//     </header>
//   );
// }
