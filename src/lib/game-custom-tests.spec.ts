/* eslint-disable prettier/prettier */
import { describe, it } from 'vitest';
import { expect } from 'chai';
import { moveRobotX } from './Game';
import { Direction } from './Data';
import { Map } from './Data';

describe('Custom tests', () => {
  it('can move the robot to the right', () => {
    const map: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 0,
        y: 0,
      },
    };
    const output = moveRobotX(map, Direction.RIGHT);
    const expected: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 1,
        y: 0,
      },
    };
    expect(output).to.eql(expected);
  });
  it('can move the robot to the left', () => {
    const map: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 1,
        y: 0,
      },
    };
    const output = moveRobotX(map, Direction.LEFT);
    const expected: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 0,
        y: 0,
      },
    };
    expect(output).to.eql(expected);
  });
  it('can move the robot to the down', () => {
    const map: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 0,
        y: 0,
      },
    };
    const output = moveRobotX(map, Direction.DOWN);
    const expected: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 0,
        y: 1,
      },
    };
    expect(output).to.eql(expected);
  });
  it('can move the robot to the up', () => {
    const map: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 0,
        y: 1,
      },
    };
    const output = moveRobotX(map, Direction.UP);
    const expected: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 0,
        y: 0,
      },
    };
    expect(output).to.eql(expected);
  });
  it('cant move the robot to the right when its on the edge', () => {
    const map: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 2,
        y: 0,
      },
    };
    const expected: Map = {
      width: 3,
      height: 3,
      obstacles: [],
      robot: {
        x: 2,
        y: 0,
      },
    };
    const output = moveRobotX(map, Direction.RIGHT);
    expect(output).to.eql(expected);
  });
  it('cant mave robot through tree', () => {
    const map: Map = {
      width: 3,
      height: 3,
      obstacles: [{
        x: 1,
        y: 0,
      }],
      robot: {
        x: 0,
        y: 0,
      },
    };
    const expected: Map = {
      width: 3,
      height: 3,
      obstacles: [{
        x: 1,
        y: 0,
      }],
      robot: {
        x: 0,
        y: 0,
      },
    };
    const output = moveRobotX(map, Direction.RIGHT);
    expect(output).to.eql(expected);
  });
});
