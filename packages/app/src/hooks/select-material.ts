import { IUseSelectMaterialHook } from '@/types/hook';
import { useState } from 'react';

export const useSelectMaterial: IUseSelectMaterialHook = () => {
  const [materialFilterList, setMaterialFilterList] = useState<string[]>([]);

  /**
   * Toggle material filter selections
   * @param material
   */
  const toggleMaterialFilterHandler = (material: string) => {
    let updatedMaterialFilter = [...materialFilterList];
    const index = materialFilterList.indexOf(material);

    if (materialFilterList.length === 0 || index === -1) {
      updatedMaterialFilter = [...updatedMaterialFilter, material];
    } else {
      updatedMaterialFilter = materialFilterList.filter(
        (filter) => filter !== material
      );
    }

    setMaterialFilterList(updatedMaterialFilter);
  };

  return [materialFilterList, toggleMaterialFilterHandler];
};
