export const mapBoxProps = ({ className, invisible, richText, textColor, textStyle, ...props }) => ({
  className: [
    'rcx-box',
    !!invisible && 'rcx-box--invisible',
    richText === 'inline' && 'rcx-box--inline',
    richText === 'block' && 'rcx-box--block',
    textColor && `rcx-box--text-color-${ textColor }`,
    textStyle && `rcx-box--text-style-${ textStyle }`,
    ...className,
  ],
  ...props,
});
