import { COLORS } from '../../constants';

export const getBackgroundForNode = index => {
  switch (index) {
    case 0:
    case 4:
      return COLORS.pink.primary;
    case 1:
    case 3:
      return COLORS.purple.primary;
    case 2:
      return COLORS.blue.primary;
  }
};

export const getScaleValues = tick => {
  switch (tick % 4) {
    case 0: return { x: 1, y: 1 };
    case 1: return { x: 1, y: 0.25 };
    case 2: return { x: 1, y: 1 };
    case 3: return { x: 0.25, y: 1 };
  }
};

export const getSizeInPx = sizeString => {
  switch (sizeString) {
    case 'sm': return 10;
    case 'md': return 20;
    case 'lg': return 30;
    default:
      return getSizeInPx('md');
  }
};