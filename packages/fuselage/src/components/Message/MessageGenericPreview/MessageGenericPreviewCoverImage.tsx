export type MessageGenericPreviewCoverImageProps = {
  url: string;
  width: number;
  height: number;
  className?: string;
};

const MessageGenericPreviewCoverImage = ({
  url,
  width,
  height,
  className: _className,
  ...props
}: MessageGenericPreviewCoverImageProps) => (
  <div
    className='rcx-box'
    style={{
      display: 'inline-block',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      whiteSpace: 'nowrap',
      textIndent: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      backgroundSize: 'cover',
      backgroundImage: `url(${url})`,
      maxWidth: '100%',
    }}
    data-testid='preview-image'
    {...props}
  >
    <div style={{ paddingTop: `${(height / width) * 100}%` }} />
  </div>
);

export default MessageGenericPreviewCoverImage;
