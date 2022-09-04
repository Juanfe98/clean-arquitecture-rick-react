import clsx from 'clsx';
import React, { Ref, forwardRef } from 'react';

const Colors = {
  inherit: '',
  body: 'text-black',
  headline: 'text-gray-500',
  subtitle: 'text-gray-300',
  primary: 'text-primary',
  success: 'text-green-500',
  danger: 'text-red-500',
  warning: 'text-orange-500',
  draft: 'text-draft',
  expired: 'text-expired',
  gradient: 'text-gradient-bni',
} as const;

const Variants = {
  inherit: '',

  xs: 'text-xs',
  sm: 'text-sm',
  'sm-bold': 'text-sm font-extrabold',
  body: 'text-base',
  'body-bold': 'text-base font-extrabold',
  lg: 'text-lg',
  xl: 'text-xl',
  'display-sm': 'text-display-sm',
  'display-md': 'text-display-md',
  'display-lg': 'text-display-lg',
};

const Aligns = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

const Transforms = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

export interface TextStyleOptions {
  align?: 'left' | 'center' | 'right' | 'justify';

  /** Controls the text casing */
  transform?: 'uppercase' | 'lowercase' | 'capitalize';

  /** Truncate text and append an ellipsis where necessary */
  truncate?: boolean;

  color?:
    | 'inherit'
    | 'body'
    | 'headline'
    | 'subtitle'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'draft'
    | 'expired'
    | 'gradient';

  variant?:
    | 'inherit'
    | 'xs'
    | 'sm'
    | 'sm-bold'
    | 'body'
    | 'body-bold'
    | 'lg'
    | 'xl'
    | 'display-sm'
    | 'display-md'
    | 'display-lg'
    /** deprecated */
    | 'display-2'
    | 'display-1';
}

export interface TextProps extends TextStyleOptions {
  as?: React.ElementType;
  className?: string;
}

export function useTextStyle({
  align,
  truncate,
  transform,
  variant = 'inherit',
  color = 'inherit',
}: TextStyleOptions) {
  if (variant === 'display-1') variant = 'display-lg';
  if (variant === 'display-2') variant = 'display-md';

  return clsx(
    Variants[variant],
    Colors[color],
    truncate && 'truncate',
    align && Aligns[align],
    transform && Transforms[transform],
  );
}

export const useTextStyleProps = <
  T extends TextStyleOptions & { className?: string },
>({
  align,
  truncate,
  transform,
  variant,
  color,
  ...props
}: T): Omit<T, keyof TextStyleOptions | 'className'> & {
  className: string;
} => {
  // eslint-disable-next-line no-param-reassign
  props.className = clsx(
    props.className,
    useTextStyle({ align, truncate, transform, variant, color }),
  );
  // cast to any to avoid cloning the object again just for TS's sake
  return props as any;
};

// @ts-ignore
const Text: DynamicRefForwardingComponent<'span', TextProps> = forwardRef(
  (
    {
      variant = 'inherit',
      color = 'inherit',
      as: Tag = 'span',
      align,
      className,
      truncate,
      transform,
      ...props
    }: TextProps,
    ref: Ref<HTMLElement>,
  ) => {
    const textClasses = useTextStyle({
      align,
      variant,
      color,
      truncate,
      transform,
    });
    console.log("🚀 ~ file: Text.tsx ~ line 152 ~ textClasses", textClasses);

    return (
      <Tag ref={ref} className={clsx(className, textClasses)} {...props} />
    );
  },
);

Text.displayName = 'Text';

export default Text;
