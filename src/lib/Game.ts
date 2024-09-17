/* eslint-disable prettier/prettier */
import { Direction, Map, parseCommands, parseMap, Position, serialiseMap } from './Data';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function moveRobot(textMap: string, moveCommands: string): string {
  return serialiseMap(parseCommands(moveCommands).reduce(
    (acc: Map, current: Direction) => {
      return moveRobotX(acc, current);
    },
    parseMap(textMap),
  ));
}

export function moveRobotX(map: Map, direction: Direction) {
  return {
    ...map,
    robot:
      takeIf(
        movePosition(map, direction),
      (pos) => notStuckIntoTree(pos, map.obstacles),
      ) ?? map.robot,
  };
}

export function movePosition(map: Map, direction: Direction): Position {
  switch(direction) {
    case Direction.UP: 
      return {
        x: map.robot.x,
        y: Math.max(map.robot.y - 1, 0),
      }
    case Direction.DOWN: 
      return {
        x: map.robot.x,
        y: Math.min(map.robot.y + 1, map.height - 1),
      }
    case Direction.LEFT:
      return {
        x: Math.max(map.robot.x - 1, 0),
        y: map.robot.y,
      }
    case Direction.RIGHT:         
      return {
        x: Math.min(map.robot.x + 1, map.width - 1),
        y: map.robot.y,
      }
  }
}

export function takeIf<T>(
  position: T,
  func: (position: T) => boolean,
): T | null {
  if (func(position)) {
    return position;
  } else {
    return null;
  }
}

export function notStuckIntoTree(
  targetPosition: Position,
  obstacles: Position[],
): boolean {
  return (
    obstacles.find(
      (obstacle) =>
        obstacle.x === targetPosition.x && obstacle.y === targetPosition.y,
    ) === undefined
  );
}
