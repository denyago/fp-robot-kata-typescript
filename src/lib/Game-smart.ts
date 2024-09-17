import { text } from 'stream/consumers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

function swapStr(str, first, last) {
  return (
    str.substr(0, first) +
    str[last] +
    str.substring(first + 1, last) +
    str[first] +
    str.substr(last + 1)
  );
}
function canRobotMove(textMap: string, moveCommand: string): boolean {
  if (moveCommand === 'R') {
    return (
      textMap[textMap.indexOf('R') + 1] !== '\n' &&
      textMap[textMap.indexOf('R') + 1] !== 'T'
    );
  }
  if (moveCommand === 'L') {
    return (
      textMap[textMap.indexOf('R') - 1] !== '\n' &&
      textMap[textMap.indexOf('R') - 1] !== 'T'
    );
  }
  if (moveCommand === 'D') {
    return (
      textMap[textMap.indexOf('R') + textMap.indexOf('\n') + 1] !== '\n' &&
      textMap[textMap.indexOf('R') + textMap.indexOf('\n') + 1] !== 'T'
    );
  }
  if (moveCommand === 'U') {
    return (
      textMap[textMap.indexOf('R') - textMap.indexOf('\n') - 1] !== '\n' &&
      textMap[textMap.indexOf('R') - textMap.indexOf('\n') - 1] !== 'T'
    );
  }
}

function isValidCommand(command: string): boolean {
  return ['R', 'L', 'U', 'D'].includes(command);
}

function createError(command: string): string {
  return `${command} is not a valid command`;
}

export function moveRobot(textMap: string, moveCommands: string): string {
  console.log('textMap\n', textMap, '\nmoveCommands\n', moveCommands);
  if (moveCommands.length === 0) {
    return textMap;
  }
  if (!canRobotMove(textMap, moveCommands[0])) {
    return textMap;
  }
  if (moveCommands[0] === 'R') {
    return moveRobot(moveRight(textMap), moveCommands.slice(1));
  } else if (moveCommands[0] === 'D') {
    return moveRobot(moveDown(textMap), moveCommands.slice(1));
  } else if (moveCommands[0] === 'L') {
    return moveRobot(moveLeft(textMap), moveCommands.slice(1));
  } else if (moveCommands[0] === 'U') {
    return moveRobot(moveUp(textMap), moveCommands.slice(1));
  }
}

function moveRight(textMap: string) {
  return swapStr(textMap, textMap.indexOf('R'), textMap.indexOf('R') + 1);
}
function moveLeft(textMap: string) {
  return swapStr(textMap, textMap.indexOf('R') - 1, textMap.indexOf('R'));
}
function moveDown(textMap: string) {
  return swapStr(
    textMap,
    textMap.indexOf('R'),
    textMap.indexOf('R') + textMap.indexOf('\n') + 1,
  );
}
function moveUp(textMap: string) {
  return swapStr(
    textMap,
    textMap.indexOf('R') - textMap.indexOf('\n') - 1,
    textMap.indexOf('R'),
  );
}
