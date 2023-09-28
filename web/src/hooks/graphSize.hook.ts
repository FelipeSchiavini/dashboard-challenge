import { getGraphHeight, getGraphWidth } from "../utils/graph";
import useWindowSize from "./windowSize.hook";

export const useGraphSize = () => {
  const { width: screenWidth } = useWindowSize();

  return {
    graphWidth: getGraphWidth(screenWidth),
    graphHeight: getGraphHeight(screenWidth)
  }
}
