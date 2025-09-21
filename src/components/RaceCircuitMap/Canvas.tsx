import { Canvas, useThree } from '@react-three/fiber';
import Scene from './Scene';
import { useEffect } from 'react';
import * as THREE from 'three';
import { BASE_FOV } from '@/constants/RaceCircuitConstants';

const CAMERA_POSITION: [x: number, y: number, z: number] = [0, -225, 200];

function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const perspectiveCamera = camera as THREE.PerspectiveCamera;
    perspectiveCamera.fov = Math.max(
      BASE_FOV,
      -0.05 * window.innerWidth + 151.75,
    ); // y = mx + b
    perspectiveCamera.updateProjectionMatrix();
  }, [size, camera]);

  return null;
}

export default function RaceTrack() {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="w-full h-full relative">
        <Canvas camera={{ position: CAMERA_POSITION, fov: BASE_FOV }}>
          <ResponsiveCamera />
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}
