import warning from 'warning';

export const mapBoxProps = ({ className, invisible, richText, textColor, textStyle, ...props }) => {
  warning(!textColor, `\`textColor\` is deprecated; prefer \`color='${ textColor }'`);
  warning(!textStyle, `\`textStyle\` is deprecated; prefer \`fontFamily='sans' fontScale='${ textStyle }'`);

  return {
    className: [
      'rcx-box',
      !!invisible && 'rcx-box--invisible',
      richText === 'inline' && 'rcx-box--inline',
      richText === 'block' && 'rcx-box--block',
      textStyle && `rcx-box--text-style-${ textStyle }`,
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
