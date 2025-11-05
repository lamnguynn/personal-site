import type { ReactElement, ReactNode } from 'react';
import type { EulerOrder } from 'three';

export type Vector3 = [x: number, y: number, z: number];
export type Rotation3 = [
  x: number,
  y: number,
  z: number,
  order?: EulerOrder | undefined,
];
export type ContentType = { [key: string]: ReactNode };
export type PointDataType = {
  label: string;
  coordinate: Vector3;
  icon: ReactElement;
}[];
