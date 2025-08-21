import type React from "react";
import { createContext, useState } from "react";
import { InteriorOptions, type Interior } from "../types/InteriorColorType";


export const InteriorColorContext = createContext<
  | { interiorColor: Interior; setInteriorColor: (color: Interior) => void; }
  | undefined
  >(undefined);

export function InteriorColorProvider({ children }: { children: React.ReactNode }){
    const [interiorColor, setInteriorColor] = useState<Interior>(InteriorOptions.TARTUFO);

    return (
        <InteriorColorContext.Provider value={{ interiorColor, setInteriorColor }}>
          { children }
        </InteriorColorContext.Provider>
    );
}