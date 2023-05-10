import { useContext } from 'react';
import { DataAssetContext } from '../context/dataAssetContext';

export const useDataAssetContext = () => {
  const context = useContext(DataAssetContext);

  if (!context) {
    throw Error('Something bad occured on useFacilityContext');
  }

  return context;
};
