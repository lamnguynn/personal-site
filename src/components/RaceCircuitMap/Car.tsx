import { useFrame } from '@react-three/fiber';
import { useContext, useRef } from 'react';
import type { CatmullRomCurve3, Mesh } from 'three';

import { COLORS } from '@/constants/RaceCircuitConstants';
import { HomeContext } from '@/context/HomeContext';
import { getDistanceVector3 } from '@/util/util';

interface Props {
  pathCurve: CatmullRomCurve3;
  targetPosition?: [number, number, number];
}

export default function Car({ pathCurve, targetPosition }: Props) {
  const carRef = useRef<Mesh | null>(null);
  const timeRef = useRef(0);
  const speed = 500;

  const context = useContext(HomeContext);
  const { isCarAtTarget, setIsCarAtTarget } = context!;

  const moveFreely = (car: Mesh, t: number) => {
    const point = pathCurve.getPointAt(t);
    // Stop at the target if it exists AND call callback to slide out row
    if (targetPosition) {
      if (getDistanceVector3(targetPosition, point) < 3) {
        setIsCarAtTarget(true);
      }
    }

    // Move freely if there is no target
    if (!isCarAtTarget) {
      car.position.set(point.x, point.y, point.z);

      const tangent = pathCurve.getTangentAt(t);
      const lookAtPoint = point.clone().add(tangent);
      car.lookAt(lookAtPoint);
    }
  };

  useFrame((_, delta) => {
    if (!isCarAtTarget) {
      timeRef.current += delta * speed;
      const t = (timeRef.current % 6000) / 6000;

      if (carRef.current) {
        moveFreely(carRef.current, t);
      }
    }
  });

  return (
    <mesh ref={carRef} scale={[1, 1, 1]}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color={COLORS.CAR} />
    </mesh>
  );
}
