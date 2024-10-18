import React, { useState } from 'react';
import { useSettings } from '../../store/store';
import { IonIcon } from '@ionic/react';
import { caretDownOutline } from 'ionicons/icons';

const GptIntro: React.FC = () => {
  const { settings, setSelectedDatabase } = useSettings();
  const { selectedDatabase } = settings;
  const [isOpen, setIsOpen] = useState(false);
  const databases = ['ERP Navi', 'UDS', 'Discovery'];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 text-lg font-semibold"
        >
          <span>{selectedDatabase || 'Select Database'}</span>
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
    </div>
  );
};

export default GptIntro;


// import React, { useState } from 'react';
// import { IonIcon } from '@ionic/react';
// import { caretDownOutline } from 'ionicons/icons';
// import { useSettings } from '../../store/store';
// import logoImage from '/home/mac/kshitij-projects/search_ai_ui/src/assets/vis-logo-character-002.gif';

// const GptIntro: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { selectedDatabase, setSelectedDatabase } = useSettings();
//   const databases = ['ERP Navi', 'UDS', 'Discovery']; 

//   return (
//     <div className="flex flex-col items-center justify-center h-96">
//       <img 
//         src={logoImage} 
//         alt="Logo" 
//         className="w-50 h-20 mb-2"
//       />
      
//       <div className="relative w-64 mt-2">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//         >
//           {selectedDatabase || 'Select Database'}
//           <IonIcon icon={caretDownOutline} className="ml-2 h-5 w-5" />
//         </button>

//         {isOpen && (
//           <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md">
//             {databases.map((db) => (
//               <button
//                 key={db}
//                 onClick={() => {
//                   setSelectedDatabase(db);
//                   setIsOpen(false);
//                 }}
//                 className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//               >
//                 {db}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GptIntro;


// import React, { useState } from 'react';
// import { IonIcon } from '@ionic/react';
// import { caretDownOutline } from 'ionicons/icons';
// import { useSettings } from '../../store/store';

// const GptIntro: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { selectedDatabase, setSelectedDatabase } = useSettings();
//   const databases = ['Database 1', 'Database 2', 'Database 3']; // Replace with your actual database list

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//       >
//         {selectedDatabase || 'Select Database'}
//         <IonIcon icon={caretDownOutline} className="ml-2 h-5 w-5" />
//       </button>

//       {isOpen && (
//         <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md">
//           {databases.map((db) => (
//             <button
//               key={db}
//               onClick={() => {
//                 setSelectedDatabase(db);
//                 setIsOpen(false);
//               }}
//               className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//             >
//               {db}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GptIntro;


// import { IonIcon } from "@ionic/react";
// import { sparkles } from "ionicons/icons";
// import { useSettings } from "../../store/store";
// import classNames from "classnames";

// export default function GptIntro() {
//   const [selectedModel, setModel] = useSettings((state) => [
//     state.settings.selectedModal,
//     state.setModal,
//   ]);
//   const isGptThreeSelected = selectedModel.startsWith("gpt-3");
//   return (
//     <>
//       <div className="modals md:w-1/5 md:min-w-[300px] mx-2 relative flex items-center rounded-md justify-between mt-5 md:mx-auto  bg-gray-200 dark:bg-[#202123] gap-2">
//         <button
//           title="GPT-3 Turbo"
//           className={classNames(
//             "gpt3 uppercase  rounded-md  font-bold p-2 transition  flex-1 flex items-center  dark:text-white justify-center",
//             {
//               "bg-white dark:bg-dark-primary border-2 dark:border-white border-gray-700":
//                 isGptThreeSelected,
//               "opacity-50": !isGptThreeSelected,
//             }
//           )}
//           type="button"
//           onClick={() => setModel("gpt-3.5-turbo")}
//         >
//           <span
//             className={classNames(" mr-2 transition", {
//               "text-teal-400": isGptThreeSelected,
//             })}
//           >
//             <i className="fa-solid fa-bolt "></i>
//           </span>
//           <span className="mr-2">gpt - 3.5</span>
//         </button>

//         <button
//           title="GPT - 4"
//           className={classNames(
//             "gpt4 uppercase rounded p-2 transition  dark:text-white flex-1 flex  items-center justify-center",
//             {
//               "bg-white dark:bg-dark-primary border-2 dark:border-white border-gray-700":
//                 !isGptThreeSelected,
//               "opacity-50": isGptThreeSelected,
//             }
//           )}
//           onClick={() => setModel("gpt-4")}
//         >
//           <span
//             className={classNames("mr-2 transition", {
//               "text-teal-400": !isGptThreeSelected,
//             })}
//           >
//             <IonIcon icon={sparkles} />
//           </span>
//           <span className="mr-2">gpt - 4</span>
//         </button>

//         <button
//           title="Aryan - LLM"
//           className={classNames(
//             "gpt4 uppercase rounded p-2 transition  dark:text-white flex-1 flex  items-center justify-center",
//             {
//               "bg-white dark:bg-dark-primary border-2 dark:border-white border-gray-700":
//                 !isGptThreeSelected,
//               "opacity-50": isGptThreeSelected,
//             }
//           )}
//           onClick={() => setModel("gpt-4")}
//         >
//           <span
//             className={classNames("mr-2 transition", {
//               "text-teal-400": !isGptThreeSelected,
//             })}
//           >
//             <IonIcon icon={sparkles} />
//           </span>
//           <span className="mr-2">Aryan-llm</span>
//         </button>
//       </div>
//       <div className=" h-96 flex items-start justify-center">
//         <h1 className=" text-4xl font-bold mt-5 text-center text-gray-300">
//           ERP Navi      
//         </h1>
//         <h5 className=" text-2xl  mt-6 text-center text-gray-300">
//           v
//         </h5>
//       </div>
//     </>
//   );
// }
