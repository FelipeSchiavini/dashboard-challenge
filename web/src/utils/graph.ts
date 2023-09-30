import {
  GraphSizeEnum,
  ScreenSizeEnum,
  standardPaddingSize,
  GraphHeightEnum,
} from "../styles/constants";

export const getGraphWidth = (screenWidth: number) => {
  if (screenWidth >= ScreenSizeEnum.Xl) {
    return GraphSizeEnum.Lg;
  } else if (screenWidth >= ScreenSizeEnum.Lg) {
    return GraphSizeEnum.Sm;
  } else if (screenWidth >= ScreenSizeEnum.Md) {
    return GraphSizeEnum.Lg;
  } else {
    return screenWidth - standardPaddingSize * 4;
  }
};

export const getGraphHeight = (screenWidth: number) => {
  return screenWidth < ScreenSizeEnum.Sm
    ? GraphHeightEnum.Sm
    : GraphHeightEnum.Lg;
};
