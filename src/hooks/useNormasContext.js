import { useContext } from "react";

import { NormasContext } from "../contexts/NormasContext";

export function useNormasContext() {
  const value = useContext(NormasContext);

  return value;
}
