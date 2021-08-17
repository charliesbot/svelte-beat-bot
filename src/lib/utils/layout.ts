export type Point = {
  x: number;
  y: number;
};

export const getCenter = (node: HTMLElement) => {
  const x = node.offsetLeft + node.offsetWidth / 2;
  const y = node.offsetTop + node.offsetHeight / 2;
  return { x, y };
};

export const distanceBetweenPoints = (point1: Point, point2: Point) => {
  const x = Math.pow(point1.x - point2.x, 2);
  const y = Math.pow(point1.y - point2.y, 2);
  return Math.sqrt(x + y);
};

export const isMobile = () => {
  const sizes = {
    mobile: 500,
    tablet: 1024,
  };

  const query = `(max-width: ${sizes.mobile}px)`;

  const media = window.matchMedia(query);
  return media.matches;
};
