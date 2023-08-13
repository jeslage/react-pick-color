import { useRef, useCallback, useState, useLayoutEffect } from 'react';

const limit = (number: number) => (number > 1 ? 1 : number < 0 ? 0 : number);

export type Position = {
  left: number;
  top: number;
};

export type usePositionProps = {
  onMove: (value: Position) => void;
};

const usePosition = ({ onMove }: usePositionProps) => {
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getPosition = useCallback(
    (e: MouseEvent | TouchEvent | React.MouseEvent | React.TouchEvent) => {
      if (!ref.current) return { left: 0, top: 0 };

      const { width, left, top, height } = ref.current.getBoundingClientRect();
      const { pageX, pageY } =
        (e as MouseEvent).pageX && typeof (e as MouseEvent).pageX === 'number'
          ? (e as MouseEvent)
          : (e as TouchEvent).touches[0];

      return {
        left: limit((pageX - (left + window.pageXOffset)) / width),
        top: limit((pageY - (top + window.pageYOffset)) / height)
      };
    },
    []
  );

  const handleMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      if (ref.current) onMove(getPosition(e));
    },
    [onMove, getPosition]
  );

  const handleStart = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      onMove(getPosition(e));
      setDragging(true);
    },
    [onMove, getPosition]
  );

  const handleEnd = useCallback(() => setDragging(false), []);

  const initEvents = useCallback(
    (dragged: boolean) => {
      const event = dragged ? document.addEventListener : document.removeEventListener;
      event('mousemove', handleMove);
      event('touchmove', handleMove);
      event('mouseup', handleEnd);
      event('touchend', handleEnd);
    },
    [handleMove, handleEnd]
  );

  useLayoutEffect(() => {
    initEvents(dragging);

    return () => {
      dragging && initEvents(false);
    };
  }, [dragging, initEvents]);

  return { ref, handleStart };
};

export default usePosition;
