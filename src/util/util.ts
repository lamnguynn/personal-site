import {
  workData,
  projectsData,
  meData,
} from '@/constants/RaceCircuitConstants';
import * as THREE from 'three';
import type { Vector3 } from 'three';

export const convertToRadians = (degrees: number) => degrees * (Math.PI / 180);

export const convertToDegrees = (radians: number) => radians * (180 / Math.PI);

/**
 * Get the distance between two given vectors in 3d space
 *
 * @param val1
 * @param val2
 * @returns
 */
export const getDistanceVector3 = (
  val1: Vector3 | [number, number, number],
  val2: Vector3 | [number, number, number],
) => {
  const vectorA: Vector3 = Array.isArray(val1)
    ? new THREE.Vector3(...val1)
    : val1;
  const vectorB: Vector3 = Array.isArray(val2)
    ? new THREE.Vector3(...val2)
    : val2;
  return vectorA.distanceTo(vectorB);
};

/**
 * Extract both key and values from a certain dataset given an index.
 *
 * @param index
 * @returns
 */
export const getContent = (index: number) => {
  return {
    data:
      index === 1
        ? workData
        : index === 2
          ? projectsData
          : index === 3
            ? meData
            : {},
    keys:
      index === 1
        ? Object.keys(workData)
        : index === 2
          ? Object.keys(projectsData)
          : index === 3
            ? Object.keys(meData)
            : [],
  };
};
