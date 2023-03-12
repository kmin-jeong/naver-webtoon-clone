//360 pixels width. 780 pixels height(glaxy 22s)
import { Dimensions } from 'react-native';

export const BASIC = {
  HEIGHT: 780,
  WIDTH: 360,
};

const WINDOW_HEIGHT = Dimensions.get('screen').height;
const WINDOW_WIDTH = Dimensions.get('screen').width;
// 오차 계산
const GUIDESCALE = Math.sqrt(BASIC.WIDTH * BASIC.HEIGHT);
const scale = (size: number) => Math.sqrt(WINDOW_WIDTH * WINDOW_HEIGHT) / GUIDESCALE;
const HORIZONTAL = WINDOW_WIDTH / BASIC.WIDTH;
const VERTICAL = WINDOW_HEIGHT / BASIC.HEIGHT;

const verticalScale = (size: number) => HORIZONTAL * size;
const moderateScale = (size: number) => VERTICAL * size;

const HEIGHTS = {
  WINDOW: WINDOW_HEIGHT,
  HEADER: verticalScale(70),
  MAIN_BANNER: verticalScale(120),
  BOTTOM_BANNER: verticalScale(60),
};

const WIDTHS = {
  WINDOW: WINDOW_WIDTH,
};

export { HEIGHTS, WIDTHS, scale, verticalScale, moderateScale };
