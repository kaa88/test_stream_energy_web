import { useState } from "react";

export const useFenching = (callback: (...args: any) => any) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetch = async () => {
    try {
      setIsLoading(true);
      return await callback();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetch, isLoading };
};
