import { COLORS, FONT_PATH } from '@/constants/RaceCircuitConstants';
import { convertToRadians, getContent } from '@/util/util';
import { useLoader } from '@react-three/fiber';
import Text from './Text';
import { animated, useSpring } from '@react-spring/three';

import Tires from './Tires';
import type { Rotation3, Vector3 } from '@/types/RaceCircuitType';
import { useContext } from 'react';
import { FontLoader } from 'three/examples/jsm/Addons.js';
import { HomeContext } from '@/context/HomeContext';

interface Props {
  onXClick?: () => void;
}

export default function FanSeating({ onXClick }: Props) {
  const numRows = 5; // Must be an odd number
  const heightIncrement = 3;
  const depthIncrement = 5;
  const rowWidth = 80; // Length of row
  const rowHeight = 25; // Width of row
  const rowDepth = depthIncrement; // Height of row
  const glassOpacity = 0.75;
  const zAngle = 18; // in degrees
  let dynamicHeight = rowHeight;
  const pullOutDistance = 75;
  const font = useLoader(FontLoader, FONT_PATH);

  const context = useContext(HomeContext);
  const { animateRowIndex, setSectionTitle } = context!;

  const handleTireClick = (title: string) => {
    setSectionTitle(title);
  };

  const handleXClick = () => {
    setSectionTitle(undefined);
    if (onXClick) onXClick();
  };

  return (
    <>
      <group
        position={[0, -rowHeight - 10, 20]}
        rotation={[0, 0, convertToRadians(zAngle)]}
      >
        {Array.from({ length: numRows }).map((_, index) => {
          const rowPositionY = index * heightIncrement;
          const rowPositionZ = index * depthIncrement;
          const position: Vector3 = [0, rowPositionY, -rowPositionZ];
          const rotation: Rotation3 = [0, 0, 0];
          const config = { friction: 30, tension: 60 };

          if (index > 0) {
            dynamicHeight += heightIncrement * 2;
          }

          const isAnimatedRow = animateRowIndex === index;

          const { animatedPosition, animatedRotation } = useSpring({
            animatedPosition: isAnimatedRow
              ? ([
                  0,
                  animateRowIndex * heightIncrement - pullOutDistance,
                  -(animateRowIndex * depthIncrement),
                ] as Vector3)
              : (position as Vector3),
            animatedRotation: isAnimatedRow
              ? ([0, 0, convertToRadians(-zAngle - 5)] as Rotation3)
              : (rotation as Rotation3),
            config: { ...config },
          });

          return (
            <animated.mesh
              key={`fan_seating-row-${index}`}
              position={animatedPosition}
              rotation={animatedRotation as never as Rotation3}
            >
              <boxGeometry args={[rowWidth, dynamicHeight, rowDepth]} />
              <meshPhongMaterial
                color={
                  index % 2 === 0 ? COLORS.SEATING_WALL : COLORS.SEATING_GLASS
                }
                transparent={index % 2 !== 0}
                opacity={index % 2 === 0 ? 1 : glassOpacity}
              />
              {
                /* Create the tire buttons to show content + the actual HTML content + title of the button clicked */
                animateRowIndex !== undefined && isAnimatedRow && (
                  <>
                    <Tires
                      data={getContent(index).keys}
                      onTireClick={handleTireClick}
                      onXClick={handleXClick}
                    />
                    <Text
                      text={`(of) ${index === 1 ? 'Career' : index === 2 ? 'Projects' : 'Me'}`}
                      font={font}
                      size={7}
                      width={-30}
                      length={5}
                      height={2}
                      color={
                        index % 2 === 1 ? 'slategrey' : COLORS.BUILDING_TEXT
                      }
                      rotation={[0, 0, 0]}
                    />
                  </>
                )
              }
            </animated.mesh>
          );
        })}
        <Text
          text="Track (Record)"
          size={9}
          font={font}
          width={-34}
          length={-10}
          height={numRows}
          color={COLORS.SEATING_TEXT}
          rotation={[convertToRadians(40), 0, 0]}
        />
      </group>
    </>
  );
}
