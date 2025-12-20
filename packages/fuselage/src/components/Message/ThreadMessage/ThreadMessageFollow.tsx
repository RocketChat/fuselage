import { ThreadMessageIcon } from './ThreadMessageIcon';

const ThreadMessageFollow = () => (
  <ThreadMessageIcon
    className='rcx-box rcx-box--full rcx-message-thread__icon rcx-message-thread__icon--follow'
    {...({ name: 'bell' } as any)}
  />
);

export default ThreadMessageFollow;
