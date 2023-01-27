import { useState } from "react";
import { useDebounce } from "shared/hooks/useDebounce";

export const useSearchList = () => {
  const [cacheState, setCacheState] = useState<any[]>([]);

  const reqSearch = useDebounce((key: string, val: string) => {
    if (!val) {
      return cacheState;
    }

    const regex = new RegExp("\\b(" + val + ")", "ig");

    const filterList = cacheState.filter(
      (item) => item[key].toLowerCase().trim().match(regex)?.length
    );

    return filterList;
  });

  return { reqSearch, setCacheState };
};
