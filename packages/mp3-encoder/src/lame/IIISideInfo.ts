import { GrInfo } from './GrInfo';

export class IIISideInfo {
  tt: GrInfo[][] = [
    [new GrInfo(), new GrInfo()],
    [new GrInfo(), new GrInfo()],
  ];

  main_data_begin = 0;

  private_bits = 0;

  resvDrain_pre = 0;

  resvDrain_post = 0;

  scfsi = [new Int32Array(4), new Int32Array(4)];
}
