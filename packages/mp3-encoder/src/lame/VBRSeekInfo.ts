export interface VBRSeekInfo {
  /**
   * What we have seen so far.
   */
  sum: number;

  /**
   * How many frames we have seen in this chunk.
   */
  seen: number;

  /**
   * How many frames we want to collect into one chunk.
   */
  want: number;

  /**
   * Actual position in our bag.
   */
  pos: number;

  /**
   * Size of our bag.
   */
  size: number;

  /**
   * Pointer to our bag.
   */
  bag: number[];

  nVbrNumFrames: number;

  nBytesWritten: number;

  /* VBR tag data */
  totalFrameSize: number;
}
