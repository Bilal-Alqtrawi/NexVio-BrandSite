export interface StackTransform {
  zIndex: number;
  x: number;
  y: number;
  rotate: number;
  scale: number;
  opacity: number;
}

const STACK_CONFIG: StackTransform[] = [
  { zIndex: 30, x: 28, y: 6, rotate: 8, scale: 1, opacity: 1 },
  { zIndex: 20, x: -16, y: -4, rotate: 4, scale: 0.96, opacity: 0.9 },
  { zIndex: 10, x: -55, y: -10, rotate: 0, scale: 0.92, opacity: 0.5 }
];

const HIDDEN_TRANSFORM: StackTransform = {
  zIndex: 0,
  x: -90,
  y: -14,
  rotate: -4,
  scale: 0.88,
  opacity: 0
};

export function getStackTransform(relativeIndex: number): StackTransform {
  return STACK_CONFIG[relativeIndex] ?? HIDDEN_TRANSFORM;
}
