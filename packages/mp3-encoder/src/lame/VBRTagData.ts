import { NUMTOCENTRIES } from './constants';

export class VBRTagData {
  /**
   * From MPEG header 0=MPEG2, 1=MPEG1.
   */
  public hId = 0;

  /**
   * Sample rate determined from MPEG header.
   */
  public samprate = 0;

  /**
   * From Vbr header data.
   */
  public flags = 0;

  /**
   * Total bit stream frames from Vbr header data.
   */
  public frames = 0;

  /**
   * Total bit stream bytes from Vbr header data.
   */
  public bytes = 0;

  /**
   * Encoded vbr scale from Vbr header data.
   */
  public vbrScale = 0;

  /**
   * May be null if toc not desired.
   */
  public toc = new Int8Array(NUMTOCENTRIES);

  /**
   * Size of VBR header, in bytes.
   */
  public headersize = 0;

  /**
   * Encoder delay.
   */
  public encDelay = 0;

  /**
   * Encoder padding added at end of stream.
   */
  public encPadding = 0;
}
