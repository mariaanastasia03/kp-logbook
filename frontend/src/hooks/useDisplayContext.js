import { DisplayContext } from '../context/displayContext';
import { useContext } from 'react';

export const useDisplayContext = () => {
  const context = useContext(DisplayContext);

  if (!context) {
    throw Error(
      'useDisplayContext must be used inside an DisplayContextProvider'
    );
  }

  return context;
};
