import { describe, it } from 'vitest';
import { expect } from 'chai';
import { moveRobot } from './Game';

describe('Game with a smart Robot', () => {
  it('robot moves and walks around the tree', () => {
    const result = moveRobot(
      `
      .R.
      .T.
      ...
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
      'D',
    );

    expect(result).to.equal(
      `
      ...
      .T.
      .R.
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });

  it('robot moves and walks around multiple trees', () => {
    const result = moveRobot(
      `
      ..R
      .TT
      ...
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
      'D',
    );

    expect(result).to.equal(
      `
      ...
      .TT
      ..R
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });

  it('robot moves and walks around forest of trees', () => {
    const result = moveRobot(
      `
      ..R.
      .TT.
      ..TT
      .T..
      ....
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
      'D',
    );

    expect(result).to.equal(
      `
      ....
      .TT.
      ..TT
      .T..
      ..R.
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });

  it('robot does not move if there are no free spaces', () => {
    const result = moveRobot(
      `
      RT
      TT
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
      'D',
    );

    expect(result).to.equal(
      `
      RT
      TT
      `
        .trim()
        .replace(/\n\s+/g, '\n'),
    );
  });
});
