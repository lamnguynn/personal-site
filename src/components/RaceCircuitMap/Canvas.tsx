import { Canvas } from '@react-three/fiber';
import { useContext } from 'react';

import { HomeContext } from '@/context/HomeContext';

import ResponsiveCamera from './ResponsiveCamera';
import Scene from './Scene';

export default function RaceTrack() {
  const context = useContext(HomeContext);
  const { cameraPosition } = context!;

  return (
    <div className="flex w-screen justify-center items-center">
      <div className="w-full h-full relative">
        <Canvas>
          <ResponsiveCamera position={cameraPosition} />
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}
