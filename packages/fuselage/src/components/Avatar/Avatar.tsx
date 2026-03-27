import type { AllHTMLAttributes, CSSProperties } from 'react';
import { useMemo } from 'react';

import AvatarContainer, { type AvatarContainerProps } from './AvatarContainer';

export type AvatarProps = AvatarContainerProps & {
  rounded?: boolean;
  objectFit?: boolean;
  url: string;
} & Omit<AllHTMLAttributes<HTMLImageElement>, 'size'>;

const borderRadiusMap: Record<string, string> = {
  x16: '2px', // small
  x18: '2px', // small
  x20: '4px', // medium
  x24: '4px',
  x28: '4px',
  x32: '4px',
  x36: '4px',
  x40: '4px',
  x48: '4px',
  x124: '4px',
  x200: '4px',
  x332: '8px', // large
};

const Avatar = ({
  size = 'x36',
  rounded = false,
  objectFit = false,
  url,
  className,
  alt,
  style: styleProp,
  ...props
}: AvatarProps) => {
  const imgStyle = useMemo<CSSProperties>(() => {
    const base: CSSProperties = {
      position: 'relative',
      width: '100%',
      height: '100%',
      borderRadius: rounded ? '9999px' : borderRadiusMap[size] || '4px',
    };

    if (objectFit) {
      base.objectFit = 'contain';
    }

    return { ...base, ...styleProp };
  }, [size, rounded, objectFit, styleProp]);

  return (
    <AvatarContainer size={size} className={className}>
      <img
        src={url}
        className='rcx-box rcx-box--full'
        style={imgStyle}
        alt={alt || ''}
        {...props}
      />
    </AvatarContainer>
  );
};

export default Avatar;
