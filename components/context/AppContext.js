import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = (keyContext) => {
    const context = useContext(AppContext);
    console.log("bawah section use app context")
    if (!context) {
      throw new Error("AppContext must be used within an AppProvider");
    }
  
    if (!context.hasOwnProperty(keyContext)) {
      // Buat konteks baru dengan nilai awal sebagai undefined
      context[keyContext] = undefined;
    }
    

    console.log(context[keyContext])

    return context;
  };

export const AppProvider = ({ children }) => {
  const [contexts, setContexts] = useState({});

  const addContext = (keyContext, context) => {
    setContexts((prevContexts) => ({
      ...prevContexts,
      [keyContext]: context,
    }));
  };

  const removeContext = (keyContext) => {
    setContexts((prevContexts) => {
      const updatedContexts = { ...prevContexts };
      delete updatedContexts[keyContext];
      return updatedContexts;
    });
  };

  return (
    <AppContext.Provider value={{ addContext, removeContext, ...contexts }}>
      {children}
    </AppContext.Provider>
  );
};
