import { HslColor } from "../../typings";

export const calculateHue = (e: any, hsl: HslColor, container: HTMLElement) => {
  const x = e.touches ? e.touches[0].pageX : e.pageX;

  const containerWidth = container.clientWidth;
  const left =
    x - (container.getBoundingClientRect().left + window.pageXOffset);

  let h;
  if (left < 0) {
    h = 0;
  } else if (left > containerWidth) {
    h = 359;
  } else {
    const percent = (left * 100) / containerWidth;
    h = (360 * percent) / 100;
  }

  if (hsl.h !== h) {
    return {
      h,
      s: hsl.s,
      l: hsl.l,
      a: hsl.a
    };
  }

  return null;
};
