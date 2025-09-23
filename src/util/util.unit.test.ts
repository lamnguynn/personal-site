import * as THREE from 'three';
import { describe, expect, test } from 'vitest';

import {
  meData,
  projectsData,
  workData,
} from '@/constants/RaceCircuitConstants';

import {
  convertToDegrees,
  convertToRadians,
  getContent,
  getDistanceVector3,
} from './util';

describe('the racetrack utils', () => {
  const PI = Math.PI;
  describe('convertToRadians', () => {
    test('happy path (positive values)', () => {
      expect(convertToRadians(0)).toEqual(0);
      expect(convertToRadians(45)).toEqual(PI / 4);
      expect(convertToRadians(90)).toEqual(PI / 2);
      expect(convertToRadians(135)).toEqual((3 * PI) / 4);
      expect(convertToRadians(180)).toEqual(PI);
      expect(convertToRadians(270)).toEqual((3 * PI) / 2);
      expect(convertToRadians(360)).toEqual(2 * PI);
    });

    test('happy path (negative values)', () => {
      expect(convertToRadians(0)).toEqual(0);
      expect(convertToRadians(-45)).toEqual(-PI / 4);
      expect(convertToRadians(-90)).toEqual(-PI / 2);
      expect(convertToRadians(-135)).toEqual((-3 * PI) / 4);
      expect(convertToRadians(-180)).toEqual(-PI);
      expect(convertToRadians(-270)).toEqual((-3 * PI) / 2);
      expect(convertToRadians(-360)).toEqual(-2 * PI);
    });
  });

  describe('convertToDegrees', () => {
    test('happy path (positive values)', () => {
      expect(convertToDegrees(0)).toEqual(0);
      expect(convertToDegrees(PI / 4)).toEqual(45);
      expect(convertToDegrees(PI / 2)).toEqual(90);
      expect(convertToDegrees((3 * PI) / 4)).toEqual(135);
      expect(convertToDegrees(PI)).toEqual(180);
      expect(convertToDegrees((3 * PI) / 2)).toEqual(270);
      expect(convertToDegrees(2 * PI)).toEqual(360);
    });

    test('happy path (negative values)', () => {
      expect(convertToDegrees(0)).toEqual(0);
      expect(convertToDegrees(-PI / 4)).toEqual(-45);
      expect(convertToDegrees(-PI / 2)).toEqual(-90);
      expect(convertToDegrees((-3 * PI) / 4)).toEqual(-135);
      expect(convertToDegrees(-PI)).toEqual(-180);
      expect(convertToDegrees((-3 * PI) / 2)).toEqual(-270);
      expect(convertToDegrees(-2 * PI)).toEqual(-360);
    });
  });

  describe('getDistanceVector3', () => {
    test('happy path (between two array points)', () => {
      const v1: [number, number, number] = [0, 0, 0];
      const v2: [number, number, number] = [3, 4, 4];

      const expected = Math.sqrt(
        (v2[0] - v1[0]) ** 2 + (v2[1] - v1[1]) ** 2 + (v2[2] - v1[2]) ** 2,
      );
      expect(getDistanceVector3(v1, v2)).toEqual(expected);
    });

    test('happy path (between two Vector3 instances)', () => {
      const v1: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
      const v2: THREE.Vector3 = new THREE.Vector3(5, 9, 2);

      const expected = Math.sqrt(
        (v2.x - v1.x) ** 2 + (v2.y - v1.y) ** 2 + (v2.z - v1.z) ** 2,
      );
      expect(getDistanceVector3(v1, v2)).toEqual(expected);
    });
  });

  describe('getContent', () => {
    test('happy path (valid input values(', () => {
      expect(getContent(1)).toEqual({
        data: workData,
        keys: Object.keys(workData),
      });
      expect(getContent(2)).toEqual({
        data: projectsData,
        keys: Object.keys(projectsData),
      });
      expect(getContent(3)).toEqual({
        data: meData,
        keys: Object.keys(meData),
      });
    });

    test('unhappy path (invalid index values)', () => {
      const min = 4;
      const max = 100;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + max; //inclusive
      expect(getContent(0)).toEqual({
        data: {},
        keys: [],
      });
      expect(getContent(4)).toEqual({
        data: {},
        keys: [],
      });
      expect(getContent(randomNumber)).toEqual({
        data: {},
        keys: [],
      });
    });
  });
});
