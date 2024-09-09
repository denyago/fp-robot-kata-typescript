import { describe, it } from 'vitest';
import { expect } from 'chai';
import { moveRobot } from './Game';

describe('Input Validations', () => {
  it('rideRobot should return errors when the inputs are empty', () => {
    expect(moveRobot('', '')).to.equal('Errors: Empty map, No move commands');
  });

  it('rideRobot should return an error when no robot is present in the map', () => {
    expect(moveRobot('.', 'R')).to.equal('Errors: No robot found');
  });

  it('rideRobot should return errors when no move commands are present', () => {
    expect(moveRobot('R', 'NSEW')).to.equal(
      'Errors: N is not a valid command, S is not a valid command, E is not a valid command, W is not a valid command',
    );
  });
});
