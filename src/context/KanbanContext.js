import { createContext, useContext } from 'react';

export const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  return <KanbanContext.Provider value={{}}>{children}</KanbanContext.Provider>;
};

export const useKanbanContext = () => useContext(KanbanContext);
