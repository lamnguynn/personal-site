import { useLoader } from '@react-three/fiber';
import { useContext, useMemo } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/Addons.js';

import Points from './Points';
import { COLORS, LABEL_Z_COORDINATE } from '@/constants/RaceCircuitConstants';
import Car from './Car';
import WorkBuilding from './WorkBuilding';
import ObservationDeck from './ObservationDeck';
import FanSeating from './FanSeating';
import type { Vector3 } from '@/types/RaceCircuitType';
import racetrack from '@/assets/racetrack.svg';
import { HomeContext } from '@/context/HomeContext';
import { getContent } from '@/util/util';

interface Props {
  svgPath?: string; // relative to the ROOT of the project
}

export default function Figure({ svgPath = racetrack }: Props) {
  const pointsData: { label: string; coordinate: Vector3 }[] = [
    {
      label: 'Career',
      coordinate: [190, -21, LABEL_Z_COORDINATE], // Career
    },
    {
      label: 'Projects',
      coordinate: [-149, 75, LABEL_Z_COORDINATE], // Projects
    },
    {
      label: 'Me',
      coordinate: [-150, -120, LABEL_Z_COORDINATE], // Me
    },
  ];

  const context = useContext(HomeContext);
  const svgData = useMemo(() => useLoader(SVGLoader, svgPath), [svgPath]);
  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  const {
    carTarget,
    setIsCarAtTarget,
    setAnimateRowIndex,
    setCarTarget,
    setSectionTitle,
  } = context!;

  const geometry = useMemo(() => {
    const geo = new THREE.ExtrudeGeometry(shapes, {
      depth: 5,
    });

    geo.center();
    return geo;
  }, [shapes]);

  const pathCurve = useMemo(() => {
    const points = shapes.flatMap((shape) =>
      shape.getPoints().map((point) => new THREE.Vector3(point.x, point.y, 0)),
    );

    // Center the points or they will be too shifted to the right
    const boundingBox = new THREE.Box3().setFromPoints(points);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    const centeredPoints = points.map((point) => point.sub(center));

    return new THREE.CatmullRomCurve3(centeredPoints, true);
  }, [shapes]);

  const edgesGeometry = useMemo(() => {
    return new THREE.EdgesGeometry(geometry); // Extract edges from geometry
  }, [geometry]);

  const handlePointClick = (label: string, coordinate: Vector3) => {
    setCarTarget({
      label,
      coordinate,
    });

    setIsCarAtTarget(false);
    const index = pointsData.findIndex((point) => point.label === label);
    setAnimateRowIndex(index + 1);
    setSectionTitle(Object.keys(getContent(index + 1).data)[0]);
  };

  const handleXClickToClose = () => {
    setCarTarget({ label: undefined, coordinate: undefined });
    setAnimateRowIndex(undefined);

    setIsCarAtTarget(false);
  };

  return (
    <>
      <lineSegments geometry={edgesGeometry} scale={[1, 1, 1]}>
        <lineBasicMaterial color={COLORS.TRACK} />
      </lineSegments>

      <Points pointsData={pointsData} onPointClick={handlePointClick} />
      <Car pathCurve={pathCurve} targetPosition={carTarget.coordinate} />
      <WorkBuilding />
      <ObservationDeck />
      <FanSeating onXClick={handleXClickToClose} />
    </>
  );
}
