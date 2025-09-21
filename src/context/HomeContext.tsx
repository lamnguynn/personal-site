import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from 'react';

import type { Vector3 } from '@/types/RaceCircuitType';

type IsCarAtTarget = boolean;
type SectionTitle = string | undefined;
type Index = number | undefined;
type CarTarget = {
  label: string | undefined;
  coordinate: Vector3 | undefined;
};

export const HomeContext = createContext<
  | {
      isCarAtTarget: IsCarAtTarget;
      setIsCarAtTarget: Dispatch<SetStateAction<IsCarAtTarget>>;
      sectionTitle: SectionTitle;
      setSectionTitle: Dispatch<SetStateAction<SectionTitle>>;
      animateRowIndex: Index;
      setAnimateRowIndex: Dispatch<SetStateAction<Index>>;
      carTarget: CarTarget;
      setCarTarget: Dispatch<SetStateAction<CarTarget>>;
    }
  | undefined
>(undefined);

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [isCarAtTarget, setIsCarAtTarget] = useState<IsCarAtTarget>(false);
  const [sectionTitle, setSectionTitle] = useState<SectionTitle>(undefined);
  const [animateRowIndex, setAnimateRowIndex] = useState<Index>(undefined);
  const [carTarget, setCarTarget] = useState<CarTarget>({
    label: undefined,
    coordinate: undefined,
  });

  return (
    <HomeContext.Provider
      value={{
        isCarAtTarget,
        setIsCarAtTarget,
        sectionTitle,
        setSectionTitle,
        animateRowIndex,
        setAnimateRowIndex,
        carTarget,
        setCarTarget,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
