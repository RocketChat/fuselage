import type { HTMLAttributes } from 'react';

type MessageEmojiBaseProps = {
  name: string;
  image?: string;
} & HTMLAttributes<HTMLSpanElement>;

export const MessageEmojiBase = ({
  name,
  image,
  className,
  ...props
}: MessageEmojiBaseProps) => {
  // Detect if the name prop is a ZWJ sequence added this
  const isZWJSequence = name.includes('\u200D'); // '\u200D' is the Unicode for ZWJ

  return (
    <span
      className={`${className || ''} ${name}`}
      style={
        image && image.length
          ? { backgroundImage: `url(${image})` } // Use `url()` to ensure the image is properly applied
          : undefined
      }
      {...props}
    >
      {/* Render the name directly if it's a ZWJ sequence to let the browser handle rendering */}
      {isZWJSequence ? name : null}
    </span>
  );
};
