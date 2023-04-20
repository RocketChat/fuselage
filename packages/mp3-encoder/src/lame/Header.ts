export class Header {
  private static readonly MAX_HEADER_LEN = 40;

  write_timing = 0;

  ptr = 0;

  // public byte buf[] = new byte[MAX_HEADER_LEN];
  buf = new Int8Array(Header.MAX_HEADER_LEN);
}
