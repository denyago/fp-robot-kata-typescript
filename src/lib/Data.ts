export interface Position {
  x: number;
  y: number;
}

export interface Map {
  width: number;
  height: number;
  obstacles: Position[];
  robot: Position;
}

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

/**
 * Parse a string to a map
 *
 * Example:
 *   R..T.
 *   .....
 *   ..T..
 *   .....
 *   .T...
 *
 *   T = Tree
 *   R = Robot
 *   . = Empty
 */
export function parseMap(input: string): Map {
  const lines = input.split('\n');
  const height = lines.length;
  const width = lines[0].length;
  let robotPosition: Position | null = null;
  const obstacles: Position[] = [];

  lines.forEach((line, y) => {
    line.split('').forEach((c, x) => {
      if (c === 'T') {
        obstacles.push({ x, y });
      } else if (c === 'R') {
        robotPosition = { x, y };
      }
    });
  });

  if (!robotPosition) {
    throw new Error('Robot position not found');
  }

  return { width, height, obstacles, robot: robotPosition };
}

/**
 * Parse a string to a list of commands
 *
 * Example:
 *   UDLR
 */
export function parseCommands(input: string): Direction[] {
  return input.split('').map((c) => {
    switch (c) {
      case 'U':
        return Direction.UP;
      case 'D':
        return Direction.DOWN;
      case 'L':
        return Direction.LEFT;
      case 'R':
        return Direction.RIGHT;
      default:
        throw new Error(`Unknown command: ${c}`);
    }
  });
}

/**
 * Serialise a map to a string
 */
export function serialiseMap(map: Map): string {
  const lines: string[] = [];
  for (let y = 0; y < map.height; y++) {
    let line = '';
    for (let x = 0; x < map.width; x++) {
      const position = { x, y };
      if (map.robot.x === x && map.robot.y === y) {
        line += 'R';
      } else if (
        map.obstacles.some((obstacle) => obstacle.x === x && obstacle.y === y)
      ) {
        line += 'T';
      } else {
        line += '.';
      }
    }
    lines.push(line);
  }
  return lines.join('\n');
}
