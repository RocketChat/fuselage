import type { ArrayOf } from './ArrayOf';

class VBRSeekInfo {
  /**
   * What we have seen so far.
   */
  sum = 0;

  /**
   * How many frames we have seen in this chunk.
   */
  seen = 0;

  /**
   * How many frames we want to collect into one chunk.
   */
  want = 0;

  /**
   * Actual position in our bag.
   */
  pos = 0;

  /**
   * Size of our bag.
   */
  size = 0;

  /**
   * Pointer to our bag.
   */
  bag: ArrayOf<number> | null = null;

  nVbrNumFrames = 0;

  nBytesWritten = 0;

  /* VBR tag data */
  TotalFrameSize = 0;
}

export default VBRSeekInfo;
