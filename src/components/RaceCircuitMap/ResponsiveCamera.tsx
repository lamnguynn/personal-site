import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { BASE_FOV, LERP_SPEED } from '@/constants/RaceCircuitConstants';
import type { Vector3 } from '@/types/RaceCircuitType';

interface Props {
  position: Vector3;
}

export default function ResponsiveCamera({ position }: Props) {
  const { set, size } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useEffect(() => {
    // Set up the camera
    if (!cameraRef.current) return;
    set({ camera: cameraRef.current });

    // Add responsiveness
    const perspectiveCamera = cameraRef.current;
    perspectiveCamera.fov = Math.max(
      BASE_FOV,
      -0.05 * window.innerWidth + 151.75,
    );
    perspectiveCamera.updateProjectionMatrix();
  }, [set, size]);

  useFrame((state) => {
    // Enforce resetting back to default position
    if (!cameraRef.current) return;

    const [x, y, z] = position;
    const target = { x, y, z };
    const center: Vector3 = [0, 0, 0];

    state.camera.position.lerp(target, LERP_SPEED);
    state.camera.lookAt(...center);
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      position={position}
      args={[BASE_FOV, size.width / size.height, 0.1, 1000]}
    />
  );
}
