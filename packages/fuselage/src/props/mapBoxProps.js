import warning from 'warning';

export const mapBoxProps = ({ className, invisible, richText, textColor, textStyle, ...props }) => {
  warning(!textColor, `\`textColor\` is deprecated; prefer \`color='${ textColor }'`);

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
    ...props,
  };
};
