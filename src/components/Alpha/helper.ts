import { AlphaType } from '../../types';

export const calculateAlpha = (
  e: any,
  initialA: AlphaType,
  container: HTMLElement
) => {
  const containerWidth = container.clientWidth;
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  const left =
    x - (container.getBoundingClientRect().left + window.pageXOffset);

  let a;
  if (left < 0) {
    a = 0;
  } else if (left > containerWidth) {
    a = 1;
  } else {
    a = Math.round((left * 100) / containerWidth) / 100;
  }

  if (initialA !== a) {
    return a;
  }

  return initialA;
};
