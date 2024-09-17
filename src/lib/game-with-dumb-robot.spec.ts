/* eslint-disable prettier/prettier */
import { describe, it, expect } from 'vitest';
import { moveRobot } from './Game';

describe('GameWithDumbRobotTest', () => {
  it('robot moves', () => {
    const result = moveRobot(
`
R..
...
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
      'R',
    );

    expect(result).to.equal(
`
.R.
...
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });

  it('robot moves multiple times', () => {
    const result = moveRobot(
`
R..
...
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
      'RDRDLU',
    );

    expect(result).to.equal(
`
...
.R.
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });

  it('robot moves multiple times and hits the wall', () => {
    const result = moveRobot(
`
R..
...
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
      'RRRRRRRR',
    );

    expect(result).to.equal(
`
..R
...
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });

  it('robot moves and hits the tree', () => {
    const result = moveRobot(
`
R..
.T.
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
      'RD',
    );

    expect(result).to.equal(
`
.R.
.T.
...
`
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });
});
