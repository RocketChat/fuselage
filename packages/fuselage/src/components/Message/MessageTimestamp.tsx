import type { HTMLAttributes } from 'react';

export type MessageTimestampProps = HTMLAttributes<HTMLSpanElement> & {
  /** ISO 8601 timestamp for screen readers */
  dateTime?: string;
};

const MessageTimestamp = ({ dateTime, ...props }: MessageTimestampProps) => (
  <time 
    className='rcx-box rcx-box--full rcx-message-header__time' 
    dateTime={dateTime}
    {...props} 
  />
);

export default MessageTimestamp;
