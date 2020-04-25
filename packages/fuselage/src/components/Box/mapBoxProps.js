export const mapBoxProps = ({ className, invisible, richText, textColor, textStyle, ...props }) => {
  if (textColor) {
    console.warn(`\`textColor\` is deprecated; prefer \`color='${ textColor }'`);
  }

  if (textStyle) {
    console.warn(`\`textStyle\` is deprecated; prefer \`fontFamily='sans' fontScale='${ textStyle }'`);
  }

  return {
    className: [
      'rcx-box',
      !!invisible && 'rcx-box--invisible',
      richText === 'inline' && 'rcx-box--inline',
      richText === 'block' && 'rcx-box--block',
      ...className,
    ],
    ...textColor && { color: textColor },
    ...textStyle && {
      fontFamily: 'sans',
      fontScale: textStyle,
    },
    ...props,
  };
};
