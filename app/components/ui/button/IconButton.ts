import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

export const iconButtonVariants = cva('azhura icon-button', {
  variants: {
    variant: {
      default: 'default',
      secondary: 'secondary',
      destructive: 'destructive',
    },
    size: {
      xs: 'size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*=size-])]:size-3',
      sm: 'size-8 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
      md: 'size-10',
      lg: 'size-12',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type IconButtonVariants = VariantProps<typeof iconButtonVariants>;
