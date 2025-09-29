import { Html } from '@react-three/drei';

import { COLORS } from '@/constants/RaceCircuitConstants';
import type { Vector3 } from '@/types/RaceCircuitType';

interface Props {
  pointsData: {
    label: string;
    coordinate: Vector3;
  }[];
  onPointClick: (label: string, coordinate: Vector3) => void;
}

export default function Points({ pointsData, onPointClick }: Props) {
  const handlePointClick = (label: string, coordinate: Vector3) => {
    onPointClick(label, coordinate);
  };

  return (
    <>
      {pointsData.map((point, index) => (
        <mesh
          key={`point_${index}`}
          onClick={() => handlePointClick(point.label, point.coordinate)}
          position={point.coordinate}
        >
          <sphereGeometry args={[4, 32, 32]} />
          <meshStandardMaterial color={COLORS.POINT} />
          <Html>
            <p
              onClick={() => handlePointClick(point.label, point.coordinate)}
              className="font-bebas-neue mt-2 ml-3 cursor-pointer text-xl text-zinc-500 sm:text-2xl md:text-3xl"
            >
              {point.label}
            </p>
          </Html>
        </mesh>
      ))}
    </>
  );
}
