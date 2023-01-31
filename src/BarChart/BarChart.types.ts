import { ReactNode } from "react";

export interface BarChartProps {
  Ydataset: number[];
  Xlabels: string[];
  title: string;
  stepSize?: number;
  min?: number;
  max?: number;
  aspectRatio?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}
