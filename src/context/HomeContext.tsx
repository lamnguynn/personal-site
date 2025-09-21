import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useState,
} from 'react';

import { DEFAULT_CAMERA_POSITION } from '@/constants/RaceCircuitConstants';
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
      cameraPosition: Vector3;
      setCameraPosition: Dispatch<SetStateAction<Vector3>>;
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
  const [cameraPosition, setCameraPosition] = useState(DEFAULT_CAMERA_POSITION);

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
        cameraPosition,
        setCameraPosition,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
