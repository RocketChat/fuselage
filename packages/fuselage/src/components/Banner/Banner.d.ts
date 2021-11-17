import { AllHTMLAttributes, FC, ReactNode } from 'react';

type BannerProps = {
  inline?: boolean;
  actionable?: boolean;
  closeable?: boolean;
  icon?: ReactNode;
  title?: string;
  variant?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  onAction?: () => void;
  onClose?: () => void;
} & AllHTMLAttributes<HTMLElement>;
const Banner: FC<BannerProps>;

export = Banner;
