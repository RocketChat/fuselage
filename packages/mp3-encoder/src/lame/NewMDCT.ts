/*
 *      MP3 window subband -> subband filtering -> mdct routine
 *
 *      Copyright (c) 1999-2000 Takehiro Tominaga
 *
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Library General Public
 * License along with this library; if not, write to the
 * Free Software Foundation, Inc., 59 Temple Place - Suite 330,
 * Boston, MA 02111-1307, USA.
 */
/*
 *         Special Thanks to Patrick De Smet for your advices.
 */

import type { ArrayOf } from './ArrayOf';
import { copyArray, fillArray } from './Arrays';
import type { LameInternalFlags } from './LameInternalFlags';
import { Util } from './Util';
import { SHORT_TYPE } from './constants';

export class NewMDCT {
  private readonly enwindow = [
    (-4.77e-7 * 0.740951125354959) / 2.384e-6,
    (1.03951e-4 * 0.740951125354959) / 2.384e-6,
    (9.53674e-4 * 0.740951125354959) / 2.384e-6,
    (2.841473e-3 * 0.740951125354959) / 2.384e-6,
    (3.5758972e-2 * 0.740951125354959) / 2.384e-6,
    (3.401756e-3 * 0.740951125354959) / 2.384e-6,
    (9.83715e-4 * 0.740951125354959) / 2.384e-6,
    (9.9182e-5 * 0.740951125354959) / 2.384e-6 /* 15 */,
    (1.2398e-5 * 0.740951125354959) / 2.384e-6,
    (1.91212e-4 * 0.740951125354959) / 2.384e-6,
    (2.283096e-3 * 0.740951125354959) / 2.384e-6,
    (1.6994476e-2 * 0.740951125354959) / 2.384e-6,
    (-1.8756866e-2 * 0.740951125354959) / 2.384e-6,
    (-2.630711e-3 * 0.740951125354959) / 2.384e-6,
    (-2.47478e-4 * 0.740951125354959) / 2.384e-6,
    (-1.4782e-5 * 0.740951125354959) / 2.384e-6,
    9.063471690191471e-1,
    1.960342806591213e-1,

    (-4.77e-7 * 0.773010453362737) / 2.384e-6,
    (1.05858e-4 * 0.773010453362737) / 2.384e-6,
    (9.30786e-4 * 0.773010453362737) / 2.384e-6,
    (2.521515e-3 * 0.773010453362737) / 2.384e-6,
    (3.5694122e-2 * 0.773010453362737) / 2.384e-6,
    (3.643036e-3 * 0.773010453362737) / 2.384e-6,
    (9.91821e-4 * 0.773010453362737) / 2.384e-6,
    (9.6321e-5 * 0.773010453362737) / 2.384e-6 /* 14 */,
    (1.1444e-5 * 0.773010453362737) / 2.384e-6,
    (1.65462e-4 * 0.773010453362737) / 2.384e-6,
    (2.110004e-3 * 0.773010453362737) / 2.384e-6,
    (1.6112804e-2 * 0.773010453362737) / 2.384e-6,
    (-1.9634247e-2 * 0.773010453362737) / 2.384e-6,
    (-2.803326e-3 * 0.773010453362737) / 2.384e-6,
    (-2.77042e-4 * 0.773010453362737) / 2.384e-6,
    (-1.6689e-5 * 0.773010453362737) / 2.384e-6,
    8.206787908286602e-1,
    3.901806440322567e-1,

    (-4.77e-7 * 0.803207531480645) / 2.384e-6,
    (1.07288e-4 * 0.803207531480645) / 2.384e-6,
    (9.02653e-4 * 0.803207531480645) / 2.384e-6,
    (2.174854e-3 * 0.803207531480645) / 2.384e-6,
    (3.5586357e-2 * 0.803207531480645) / 2.384e-6,
    (3.858566e-3 * 0.803207531480645) / 2.384e-6,
    (9.95159e-4 * 0.803207531480645) / 2.384e-6,
    (9.346e-5 * 0.803207531480645) / 2.384e-6 /* 13 */,
    (1.0014e-5 * 0.803207531480645) / 2.384e-6,
    (1.4019e-4 * 0.803207531480645) / 2.384e-6,
    (1.937389e-3 * 0.803207531480645) / 2.384e-6,
    (1.5233517e-2 * 0.803207531480645) / 2.384e-6,
    (-2.0506859e-2 * 0.803207531480645) / 2.384e-6,
    (-2.974033e-3 * 0.803207531480645) / 2.384e-6,
    (-3.0756e-4 * 0.803207531480645) / 2.384e-6,
    (-1.812e-5 * 0.803207531480645) / 2.384e-6,
    7.416505462720353e-1,
    5.805693545089249e-1,

    (-4.77e-7 * 0.831469612302545) / 2.384e-6,
    (1.08242e-4 * 0.831469612302545) / 2.384e-6,
    (8.68797e-4 * 0.831469612302545) / 2.384e-6,
    (1.800537e-3 * 0.831469612302545) / 2.384e-6,
    (3.54352e-2 * 0.831469612302545) / 2.384e-6,
    (4.049301e-3 * 0.831469612302545) / 2.384e-6,
    (9.94205e-4 * 0.831469612302545) / 2.384e-6,
    (9.0599e-5 * 0.831469612302545) / 2.384e-6 /* 12 */,
    (9.06e-6 * 0.831469612302545) / 2.384e-6,
    (1.16348e-4 * 0.831469612302545) / 2.384e-6,
    (1.766682e-3 * 0.831469612302545) / 2.384e-6,
    (1.4358521e-2 * 0.831469612302545) / 2.384e-6,
    (-2.1372318e-2 * 0.831469612302545) / 2.384e-6,
    (-3.14188e-3 * 0.831469612302545) / 2.384e-6,
    (-3.39031e-4 * 0.831469612302545) / 2.384e-6,
    (-1.955e-5 * 0.831469612302545) / 2.384e-6,
    6.681786379192989e-1,
    7.653668647301797e-1,

    (-4.77e-7 * 0.857728610000272) / 2.384e-6,
    (1.08719e-4 * 0.857728610000272) / 2.384e-6,
    (8.2922e-4 * 0.857728610000272) / 2.384e-6,
    (1.399517e-3 * 0.857728610000272) / 2.384e-6,
    (3.5242081e-2 * 0.857728610000272) / 2.384e-6,
    (4.21524e-3 * 0.857728610000272) / 2.384e-6,
    (9.89437e-4 * 0.857728610000272) / 2.384e-6,
    (8.7261e-5 * 0.857728610000272) / 2.384e-6 /* 11 */,
    (8.106e-6 * 0.857728610000272) / 2.384e-6,
    (9.3937e-5 * 0.857728610000272) / 2.384e-6,
    (1.597881e-3 * 0.857728610000272) / 2.384e-6,
    (1.3489246e-2 * 0.857728610000272) / 2.384e-6,
    (-2.2228718e-2 * 0.857728610000272) / 2.384e-6,
    (-3.306866e-3 * 0.857728610000272) / 2.384e-6,
    (-3.71456e-4 * 0.857728610000272) / 2.384e-6,
    (-2.1458e-5 * 0.857728610000272) / 2.384e-6,
    5.993769336819237e-1,
    9.427934736519954e-1,

    (-4.77e-7 * 0.881921264348355) / 2.384e-6,
    (1.08719e-4 * 0.881921264348355) / 2.384e-6,
    (7.8392e-4 * 0.881921264348355) / 2.384e-6,
    (9.71317e-4 * 0.881921264348355) / 2.384e-6,
    (3.5007e-2 * 0.881921264348355) / 2.384e-6,
    (4.357815e-3 * 0.881921264348355) / 2.384e-6,
    (9.80854e-4 * 0.881921264348355) / 2.384e-6,
    (8.3923e-5 * 0.881921264348355) / 2.384e-6 /* 10 */,
    (7.629e-6 * 0.881921264348355) / 2.384e-6,
    (7.2956e-5 * 0.881921264348355) / 2.384e-6,
    (1.432419e-3 * 0.881921264348355) / 2.384e-6,
    (1.2627602e-2 * 0.881921264348355) / 2.384e-6,
    (-2.307415e-2 * 0.881921264348355) / 2.384e-6,
    (-3.467083e-3 * 0.881921264348355) / 2.384e-6,
    (-4.04358e-4 * 0.881921264348355) / 2.384e-6,
    (-2.3365e-5 * 0.881921264348355) / 2.384e-6,
    5.345111359507916e-1,
    1.111140466039205,

    (-9.54e-7 * 0.903989293123443) / 2.384e-6,
    (1.08242e-4 * 0.903989293123443) / 2.384e-6,
    (7.31945e-4 * 0.903989293123443) / 2.384e-6,
    (5.15938e-4 * 0.903989293123443) / 2.384e-6,
    (3.4730434e-2 * 0.903989293123443) / 2.384e-6,
    (4.477024e-3 * 0.903989293123443) / 2.384e-6,
    (9.68933e-4 * 0.903989293123443) / 2.384e-6,
    (8.0585e-5 * 0.903989293123443) / 2.384e-6 /* 9 */,
    (6.676e-6 * 0.903989293123443) / 2.384e-6,
    (5.2929e-5 * 0.903989293123443) / 2.384e-6,
    (1.269817e-3 * 0.903989293123443) / 2.384e-6,
    (1.1775017e-2 * 0.903989293123443) / 2.384e-6,
    (-2.3907185e-2 * 0.903989293123443) / 2.384e-6,
    (-3.622532e-3 * 0.903989293123443) / 2.384e-6,
    (-4.38213e-4 * 0.903989293123443) / 2.384e-6,
    (-2.5272e-5 * 0.903989293123443) / 2.384e-6,
    4.729647758913199e-1,
    1.268786568327291,

    (-9.54e-7 * 0.9238795325112867) / 2.384e-6,
    (1.06812e-4 * 0.9238795325112867) / 2.384e-6,
    (6.74248e-4 * 0.9238795325112867) / 2.384e-6,
    (3.3379e-5 * 0.9238795325112867) / 2.384e-6,
    (3.4412861e-2 * 0.9238795325112867) / 2.384e-6,
    (4.573822e-3 * 0.9238795325112867) / 2.384e-6,
    (9.54151e-4 * 0.9238795325112867) / 2.384e-6,
    (7.6771e-5 * 0.9238795325112867) / 2.384e-6,
    (6.199e-6 * 0.9238795325112867) / 2.384e-6,
    (3.4332e-5 * 0.9238795325112867) / 2.384e-6,
    (1.111031e-3 * 0.9238795325112867) / 2.384e-6,
    (1.0933399e-2 * 0.9238795325112867) / 2.384e-6,
    (-2.4725437e-2 * 0.9238795325112867) / 2.384e-6,
    (-3.771782e-3 * 0.9238795325112867) / 2.384e-6,
    (-4.72546e-4 * 0.9238795325112867) / 2.384e-6,
    (-2.7657e-5 * 0.9238795325112867) / 2.384e-6,
    0.41421356237309503 /* tan(PI/8) */,
    1.414213562373095,

    (-9.54e-7 * 0.941544065183021) / 2.384e-6,
    (1.05381e-4 * 0.941544065183021) / 2.384e-6,
    (6.10352e-4 * 0.941544065183021) / 2.384e-6,
    (-4.75883e-4 * 0.941544065183021) / 2.384e-6,
    (3.405571e-2 * 0.941544065183021) / 2.384e-6,
    (4.649162e-3 * 0.941544065183021) / 2.384e-6,
    (9.35555e-4 * 0.941544065183021) / 2.384e-6,
    (7.3433e-5 * 0.941544065183021) / 2.384e-6 /* 7 */,
    (5.245e-6 * 0.941544065183021) / 2.384e-6,
    (1.7166e-5 * 0.941544065183021) / 2.384e-6,
    (9.56535e-4 * 0.941544065183021) / 2.384e-6,
    (1.0103703e-2 * 0.941544065183021) / 2.384e-6,
    (-2.5527e-2 * 0.941544065183021) / 2.384e-6,
    (-3.914356e-3 * 0.941544065183021) / 2.384e-6,
    (-5.07355e-4 * 0.941544065183021) / 2.384e-6,
    (-3.0041e-5 * 0.941544065183021) / 2.384e-6,
    3.578057213145241e-1,
    1.546020906725474,

    (-9.54e-7 * 0.956940335732209) / 2.384e-6,
    (1.0252e-4 * 0.956940335732209) / 2.384e-6,
    (5.39303e-4 * 0.956940335732209) / 2.384e-6,
    (-1.011848e-3 * 0.956940335732209) / 2.384e-6,
    (3.3659935e-2 * 0.956940335732209) / 2.384e-6,
    (4.703045e-3 * 0.956940335732209) / 2.384e-6,
    (9.15051e-4 * 0.956940335732209) / 2.384e-6,
    (7.0095e-5 * 0.956940335732209) / 2.384e-6 /* 6 */,
    (4.768e-6 * 0.956940335732209) / 2.384e-6,
    (9.54e-7 * 0.956940335732209) / 2.384e-6,
    (8.06808e-4 * 0.956940335732209) / 2.384e-6,
    (9.287834e-3 * 0.956940335732209) / 2.384e-6,
    (-2.6310921e-2 * 0.956940335732209) / 2.384e-6,
    (-4.048824e-3 * 0.956940335732209) / 2.384e-6,
    (-5.42164e-4 * 0.956940335732209) / 2.384e-6,
    (-3.2425e-5 * 0.956940335732209) / 2.384e-6,
    3.033466836073424e-1,
    1.66293922460509,

    (-1.431e-6 * 0.970031253194544) / 2.384e-6,
    (9.9182e-5 * 0.970031253194544) / 2.384e-6,
    (4.62532e-4 * 0.970031253194544) / 2.384e-6,
    (-1.573563e-3 * 0.970031253194544) / 2.384e-6,
    (3.3225536e-2 * 0.970031253194544) / 2.384e-6,
    (4.737377e-3 * 0.970031253194544) / 2.384e-6,
    (8.91685e-4 * 0.970031253194544) / 2.384e-6,
    (6.628e-5 * 0.970031253194544) / 2.384e-6 /* 5 */,
    (4.292e-6 * 0.970031253194544) / 2.384e-6,
    (-1.3828e-5 * 0.970031253194544) / 2.384e-6,
    (6.6185e-4 * 0.970031253194544) / 2.384e-6,
    (8.487225e-3 * 0.970031253194544) / 2.384e-6,
    (-2.707386e-2 * 0.970031253194544) / 2.384e-6,
    (-4.174709e-3 * 0.970031253194544) / 2.384e-6,
    (-5.76973e-4 * 0.970031253194544) / 2.384e-6,
    (-3.4809e-5 * 0.970031253194544) / 2.384e-6,
    2.504869601913055e-1,
    1.76384252869671,

    (-1.431e-6 * 0.98078528040323) / 2.384e-6,
    (9.5367e-5 * 0.98078528040323) / 2.384e-6,
    (3.78609e-4 * 0.98078528040323) / 2.384e-6,
    (-2.161503e-3 * 0.98078528040323) / 2.384e-6,
    (3.2754898e-2 * 0.98078528040323) / 2.384e-6,
    (4.752159e-3 * 0.98078528040323) / 2.384e-6,
    (8.66413e-4 * 0.98078528040323) / 2.384e-6,
    (6.2943e-5 * 0.98078528040323) / 2.384e-6 /* 4 */,
    (3.815e-6 * 0.98078528040323) / 2.384e-6,
    (-2.718e-5 * 0.98078528040323) / 2.384e-6,
    (5.22137e-4 * 0.98078528040323) / 2.384e-6,
    (7.703304e-3 * 0.98078528040323) / 2.384e-6,
    (-2.7815342e-2 * 0.98078528040323) / 2.384e-6,
    (-4.290581e-3 * 0.98078528040323) / 2.384e-6,
    (-6.11782e-4 * 0.98078528040323) / 2.384e-6,
    (-3.767e-5 * 0.98078528040323) / 2.384e-6,
    1.98912367379658e-1,
    1.847759065022573,

    (-1.907e-6 * 0.989176509964781) / 2.384e-6,
    (9.0122e-5 * 0.989176509964781) / 2.384e-6,
    (2.88486e-4 * 0.989176509964781) / 2.384e-6,
    (-2.774239e-3 * 0.989176509964781) / 2.384e-6,
    (3.224802e-2 * 0.989176509964781) / 2.384e-6,
    (4.748821e-3 * 0.989176509964781) / 2.384e-6,
    (8.38757e-4 * 0.989176509964781) / 2.384e-6,
    (5.9605e-5 * 0.989176509964781) / 2.384e-6 /* 3 */,
    (3.338e-6 * 0.989176509964781) / 2.384e-6,
    (-3.9577e-5 * 0.989176509964781) / 2.384e-6,
    (3.88145e-4 * 0.989176509964781) / 2.384e-6,
    (6.937027e-3 * 0.989176509964781) / 2.384e-6,
    (-2.8532982e-2 * 0.989176509964781) / 2.384e-6,
    (-4.395962e-3 * 0.989176509964781) / 2.384e-6,
    (-6.46591e-4 * 0.989176509964781) / 2.384e-6,
    (-4.0531e-5 * 0.989176509964781) / 2.384e-6,
    1.483359875383474e-1,
    1.913880671464418,

    (-1.907e-6 * 0.995184726672197) / 2.384e-6,
    (8.44e-5 * 0.995184726672197) / 2.384e-6,
    (1.91689e-4 * 0.995184726672197) / 2.384e-6,
    (-3.411293e-3 * 0.995184726672197) / 2.384e-6,
    (3.170681e-2 * 0.995184726672197) / 2.384e-6,
    (4.728317e-3 * 0.995184726672197) / 2.384e-6,
    (8.09669e-4 * 0.995184726672197) / 2.384e-6,
    (5.579e-5 * 0.995184726672197) / 2.384e-6,
    (3.338e-6 * 0.995184726672197) / 2.384e-6,
    (-5.0545e-5 * 0.995184726672197) / 2.384e-6,
    (2.59876e-4 * 0.995184726672197) / 2.384e-6,
    (6.189346e-3 * 0.995184726672197) / 2.384e-6,
    (-2.9224873e-2 * 0.995184726672197) / 2.384e-6,
    (-4.489899e-3 * 0.995184726672197) / 2.384e-6,
    (-6.80923e-4 * 0.995184726672197) / 2.384e-6,
    (-4.3392e-5 * 0.995184726672197) / 2.384e-6,
    9.849140335716425e-2,
    1.961570560806461,

    (-2.384e-6 * 0.998795456205172) / 2.384e-6,
    (7.7724e-5 * 0.998795456205172) / 2.384e-6,
    (8.8215e-5 * 0.998795456205172) / 2.384e-6,
    (-4.072189e-3 * 0.998795456205172) / 2.384e-6,
    (3.1132698e-2 * 0.998795456205172) / 2.384e-6,
    (4.691124e-3 * 0.998795456205172) / 2.384e-6,
    (7.79152e-4 * 0.998795456205172) / 2.384e-6,
    (5.2929e-5 * 0.998795456205172) / 2.384e-6,
    (2.861e-6 * 0.998795456205172) / 2.384e-6,
    (-6.0558e-5 * 0.998795456205172) / 2.384e-6,
    (1.37329e-4 * 0.998795456205172) / 2.384e-6,
    (5.46217e-3 * 0.998795456205172) / 2.384e-6,
    (-2.989006e-2 * 0.998795456205172) / 2.384e-6,
    (-4.570484e-3 * 0.998795456205172) / 2.384e-6,
    (-7.14302e-4 * 0.998795456205172) / 2.384e-6,
    (-4.6253e-5 * 0.998795456205172) / 2.384e-6,
    4.912684976946725e-2,
    1.990369453344394,

    (3.5780907e-2 * Util.SQRT2 * 0.5) / 2.384e-6,
    (1.7876148e-2 * Util.SQRT2 * 0.5) / 2.384e-6,
    (3.134727e-3 * Util.SQRT2 * 0.5) / 2.384e-6,
    (2.457142e-3 * Util.SQRT2 * 0.5) / 2.384e-6,
    (9.71317e-4 * Util.SQRT2 * 0.5) / 2.384e-6,
    (2.18868e-4 * Util.SQRT2 * 0.5) / 2.384e-6,
    (1.01566e-4 * Util.SQRT2 * 0.5) / 2.384e-6,
    (1.3828e-5 * Util.SQRT2 * 0.5) / 2.384e-6,

    3.0526638e-2 / 2.384e-6,
    4.638195e-3 / 2.384e-6,
    7.47204e-4 / 2.384e-6,
    4.9591e-5 / 2.384e-6,
    4.756451e-3 / 2.384e-6,
    2.1458e-5 / 2.384e-6,
    -6.9618e-5 / 2.384e-6 /* 2.384e-06/2.384e-06 */,
  ] as const;

  private static readonly NS = 12;

  private static readonly NL = 36;

  private readonly win = [
    [
      2.382191739347913e-13, 6.423305872147834e-13, 9.400849094049688e-13,
      1.122435026096556e-12, 1.183840321267481e-12, 1.122435026096556e-12,
      9.40084909404969e-13, 6.423305872147839e-13, 2.382191739347918e-13,

      5.456116108943412e-12, 4.878985199565852e-12, 4.240448995017367e-12,
      3.559909094758252e-12, 2.858043359288075e-12, 2.156177623817898e-12,
      1.475637723558783e-12, 8.371015190102974e-13, 2.599706096327376e-13,

      -5.456116108943412e-12, -4.878985199565852e-12, -4.240448995017367e-12,
      -3.559909094758252e-12, -2.858043359288076e-12, -2.156177623817898e-12,
      -1.475637723558783e-12, -8.371015190102975e-13, -2.599706096327376e-13,

      -2.382191739347923e-13, -6.423305872147843e-13, -9.400849094049696e-13,
      -1.122435026096556e-12, -1.183840321267481e-12, -1.122435026096556e-12,
      -9.400849094049694e-13, -6.42330587214784e-13, -2.382191739347918e-13,
    ],
    [
      2.382191739347913e-13, 6.423305872147834e-13, 9.400849094049688e-13,
      1.122435026096556e-12, 1.183840321267481e-12, 1.122435026096556e-12,
      9.400849094049688e-13, 6.423305872147841e-13, 2.382191739347918e-13,

      5.456116108943413e-12, 4.878985199565852e-12, 4.240448995017367e-12,
      3.559909094758253e-12, 2.858043359288075e-12, 2.156177623817898e-12,
      1.475637723558782e-12, 8.371015190102975e-13, 2.599706096327376e-13,

      -5.461314069809755e-12, -4.921085770524055e-12, -4.343405037091838e-12,
      -3.732668368707687e-12, -3.093523840190885e-12, -2.430835727329465e-12,
      -1.734679010007751e-12, -9.748253656609281e-13, -2.797435120168326e-13,

      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -2.283748241799531e-13,
      -4.037858874020686e-13, -2.146547464825323e-13,
    ],
    [
      1.316524975873958e-1 /* win[SHORT_TYPE] */, 4.14213562373095e-1,
      7.673269879789602e-1,

      1.091308501069271 /* tantab_l */, 1.303225372841206, 1.56968557711749,
      1.920982126971166, 2.414213562373094, 3.171594802363212,
      4.510708503662055, 7.595754112725146, 2.290376554843115e1,

      0.98480775301220802032 /* cx */, 0.64278760968653936292,
      0.34202014332566882393, 0.93969262078590842791, -0.17364817766693030343,
      -0.76604444311897790243, 0.86602540378443870761, 0.5,

      -5.144957554275265e-1 /* ca */, -4.717319685649723e-1,
      -3.133774542039019e-1, -1.819131996109812e-1, -9.457419252642064e-2,
      -4.096558288530405e-2, -1.419856857247115e-2, -3.699974673760037e-3,

      8.574929257125442e-1 /* cs */, 8.817419973177052e-1, 9.496286491027329e-1,
      9.833145924917901e-1, 9.955178160675857e-1, 9.991605581781475e-1,
      9.99899195244447e-1, 9.999931550702802e-1,
    ],
    [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.283748241799531e-13,
      4.037858874020686e-13, 2.146547464825323e-13,

      5.461314069809755e-12, 4.921085770524055e-12, 4.343405037091838e-12,
      3.732668368707687e-12, 3.093523840190885e-12, 2.430835727329466e-12,
      1.734679010007751e-12, 9.748253656609281e-13, 2.797435120168326e-13,

      -5.456116108943413e-12, -4.878985199565852e-12, -4.240448995017367e-12,
      -3.559909094758253e-12, -2.858043359288075e-12, -2.156177623817898e-12,
      -1.475637723558782e-12, -8.371015190102975e-13, -2.599706096327376e-13,

      -2.382191739347913e-13, -6.423305872147834e-13, -9.400849094049688e-13,
      -1.122435026096556e-12, -1.183840321267481e-12, -1.122435026096556e-12,
      -9.400849094049688e-13, -6.423305872147841e-13, -2.382191739347918e-13,
    ],
  ] as const;

  private readonly tantab_l = this.win[SHORT_TYPE];

  private readonly cx = this.win[SHORT_TYPE];

  private readonly ca = this.win[SHORT_TYPE];

  private readonly cs = this.win[SHORT_TYPE];

  /**
   * new IDCT routine written by Takehiro TOMINAGA
   *
   * PURPOSE: Overlapping window on PCM samples<BR>
   *
   * SEMANTICS:<BR>
   * 32 16-bit pcm samples are scaled to fractional 2's complement and
   * concatenated to the end of the window buffer #x#. The updated window
   * buffer #x# is then windowed by the analysis window #c# to produce the
   * windowed sample #z#
   */
  private readonly order = [
    0, 1, 16, 17, 8, 9, 24, 25, 4, 5, 20, 21, 12, 13, 28, 29, 2, 3, 18, 19, 10,
    11, 26, 27, 6, 7, 22, 23, 14, 15, 30, 31,
  ] as const;

  /**
   * returns sum_j=0^31 a[j]*cos(PI*j*(k+1/2)/32), 0<=k<32
   */
  private window_subband(
    x1: ArrayOf<number>,
    x1Pos: number,
    a: ArrayOf<number>
  ) {
    let wp = 10;

    let x2 = x1Pos + 238 - 14 - 286;

    for (let i = -15; i < 0; i++) {
      let w;
      let s;
      let t;

      w = this.enwindow[wp + -10];
      s = x1[x2 + -224] * w;
      t = x1[x1Pos + 224] * w;
      w = this.enwindow[wp + -9];
      s += x1[x2 + -160] * w;
      t += x1[x1Pos + 160] * w;
      w = this.enwindow[wp + -8];
      s += x1[x2 + -96] * w;
      t += x1[x1Pos + 96] * w;
      w = this.enwindow[wp + -7];
      s += x1[x2 + -32] * w;
      t += x1[x1Pos + 32] * w;
      w = this.enwindow[wp + -6];
      s += x1[x2 + 32] * w;
      t += x1[x1Pos + -32] * w;
      w = this.enwindow[wp + -5];
      s += x1[x2 + 96] * w;
      t += x1[x1Pos + -96] * w;
      w = this.enwindow[wp + -4];
      s += x1[x2 + 160] * w;
      t += x1[x1Pos + -160] * w;
      w = this.enwindow[wp + -3];
      s += x1[x2 + 224] * w;
      t += x1[x1Pos + -224] * w;

      w = this.enwindow[wp + -2];
      s += x1[x1Pos + -256] * w;
      t -= x1[x2 + 256] * w;
      w = this.enwindow[wp + -1];
      s += x1[x1Pos + -192] * w;
      t -= x1[x2 + 192] * w;
      w = this.enwindow[wp + 0];
      s += x1[x1Pos + -128] * w;
      t -= x1[x2 + 128] * w;
      w = this.enwindow[wp + 1];
      s += x1[x1Pos + -64] * w;
      t -= x1[x2 + 64] * w;
      w = this.enwindow[wp + 2];
      s += x1[x1Pos + 0] * w;
      t -= x1[x2 + 0] * w;
      w = this.enwindow[wp + 3];
      s += x1[x1Pos + 64] * w;
      t -= x1[x2 + -64] * w;
      w = this.enwindow[wp + 4];
      s += x1[x1Pos + 128] * w;
      t -= x1[x2 + -128] * w;
      w = this.enwindow[wp + 5];
      s += x1[x1Pos + 192] * w;
      t -= x1[x2 + -192] * w;

      /*
       * this multiplyer could be removed, but it needs more 256 FLOAT
       * data. thinking about the data cache performance, I think we
       * should not use such a huge table. tt 2000/Oct/25
       */
      s *= this.enwindow[wp + 6];
      w = t - s;
      a[30 + i * 2] = t + s;
      a[31 + i * 2] = this.enwindow[wp + 7] * w;
      wp += 18;
      x1Pos--;
      x2++;
    }
    {
      let s;
      let t;
      t = x1[x1Pos + -16] * this.enwindow[wp + -10];
      s = x1[x1Pos + -32] * this.enwindow[wp + -2];
      t += (x1[x1Pos + -48] - x1[x1Pos + 16]) * this.enwindow[wp + -9];
      s += x1[x1Pos + -96] * this.enwindow[wp + -1];
      t += (x1[x1Pos + -80] + x1[x1Pos + 48]) * this.enwindow[wp + -8];
      s += x1[x1Pos + -160] * this.enwindow[wp + 0];
      t += (x1[x1Pos + -112] - x1[x1Pos + 80]) * this.enwindow[wp + -7];
      s += x1[x1Pos + -224] * this.enwindow[wp + 1];
      t += (x1[x1Pos + -144] + x1[x1Pos + 112]) * this.enwindow[wp + -6];
      s -= x1[x1Pos + 32] * this.enwindow[wp + 2];
      t += (x1[x1Pos + -176] - x1[x1Pos + 144]) * this.enwindow[wp + -5];
      s -= x1[x1Pos + 96] * this.enwindow[wp + 3];
      t += (x1[x1Pos + -208] + x1[x1Pos + 176]) * this.enwindow[wp + -4];
      s -= x1[x1Pos + 160] * this.enwindow[wp + 4];
      t += (x1[x1Pos + -240] - x1[x1Pos + 208]) * this.enwindow[wp + -3];
      s -= x1[x1Pos + 224];

      const u = s - t;
      const v = s + t;

      t = a[14];
      s = a[15] - t;

      a[31] = v + t; /* A0 */
      a[30] = u + s; /* A1 */
      a[15] = u - s; /* A2 */
      a[14] = v - t; /* A3 */
    }
    {
      let xr;
      xr = a[28] - a[0];
      a[0] += a[28];
      a[28] = xr * this.enwindow[wp + -2 * 18 + 7];
      xr = a[29] - a[1];
      a[1] += a[29];
      a[29] = xr * this.enwindow[wp + -2 * 18 + 7];

      xr = a[26] - a[2];
      a[2] += a[26];
      a[26] = xr * this.enwindow[wp + -4 * 18 + 7];
      xr = a[27] - a[3];
      a[3] += a[27];
      a[27] = xr * this.enwindow[wp + -4 * 18 + 7];

      xr = a[24] - a[4];
      a[4] += a[24];
      a[24] = xr * this.enwindow[wp + -6 * 18 + 7];
      xr = a[25] - a[5];
      a[5] += a[25];
      a[25] = xr * this.enwindow[wp + -6 * 18 + 7];

      xr = a[22] - a[6];
      a[6] += a[22];
      a[22] = xr * Util.SQRT2;
      xr = a[23] - a[7];
      a[7] += a[23];
      a[23] = xr * Util.SQRT2 - a[7];
      a[7] -= a[6];
      a[22] -= a[7];
      a[23] -= a[22];

      xr = a[6];
      a[6] = a[31] - xr;
      a[31] += xr;
      xr = a[7];
      a[7] = a[30] - xr;
      a[30] += xr;
      xr = a[22];
      a[22] = a[15] - xr;
      a[15] += xr;
      xr = a[23];
      a[23] = a[14] - xr;
      a[14] += xr;

      xr = a[20] - a[8];
      a[8] += a[20];
      a[20] = xr * this.enwindow[wp + -10 * 18 + 7];
      xr = a[21] - a[9];
      a[9] += a[21];
      a[21] = xr * this.enwindow[wp + -10 * 18 + 7];

      xr = a[18] - a[10];
      a[10] += a[18];
      a[18] = xr * this.enwindow[wp + -12 * 18 + 7];
      xr = a[19] - a[11];
      a[11] += a[19];
      a[19] = xr * this.enwindow[wp + -12 * 18 + 7];

      xr = a[16] - a[12];
      a[12] += a[16];
      a[16] = xr * this.enwindow[wp + -14 * 18 + 7];
      xr = a[17] - a[13];
      a[13] += a[17];
      a[17] = xr * this.enwindow[wp + -14 * 18 + 7];

      xr = -a[20] + a[24];
      a[20] += a[24];
      a[24] = xr * this.enwindow[wp + -12 * 18 + 7];
      xr = -a[21] + a[25];
      a[21] += a[25];
      a[25] = xr * this.enwindow[wp + -12 * 18 + 7];

      xr = a[4] - a[8];
      a[4] += a[8];
      a[8] = xr * this.enwindow[wp + -12 * 18 + 7];
      xr = a[5] - a[9];
      a[5] += a[9];
      a[9] = xr * this.enwindow[wp + -12 * 18 + 7];

      xr = a[0] - a[12];
      a[0] += a[12];
      a[12] = xr * this.enwindow[wp + -4 * 18 + 7];
      xr = a[1] - a[13];
      a[1] += a[13];
      a[13] = xr * this.enwindow[wp + -4 * 18 + 7];
      xr = a[16] - a[28];
      a[16] += a[28];
      a[28] = xr * this.enwindow[wp + -4 * 18 + 7];
      xr = -a[17] + a[29];
      a[17] += a[29];
      a[29] = xr * this.enwindow[wp + -4 * 18 + 7];

      xr = Util.SQRT2 * (a[2] - a[10]);
      a[2] += a[10];
      a[10] = xr;
      xr = Util.SQRT2 * (a[3] - a[11]);
      a[3] += a[11];
      a[11] = xr;
      xr = Util.SQRT2 * (-a[18] + a[26]);
      a[18] += a[26];
      a[26] = xr - a[18];
      xr = Util.SQRT2 * (-a[19] + a[27]);
      a[19] += a[27];
      a[27] = xr - a[19];

      xr = a[2];
      a[19] -= a[3];
      a[3] -= xr;
      a[2] = a[31] - xr;
      a[31] += xr;
      xr = a[3];
      a[11] -= a[19];
      a[18] -= xr;
      a[3] = a[30] - xr;
      a[30] += xr;
      xr = a[18];
      a[27] -= a[11];
      a[19] -= xr;
      a[18] = a[15] - xr;
      a[15] += xr;

      xr = a[19];
      a[10] -= xr;
      a[19] = a[14] - xr;
      a[14] += xr;
      xr = a[10];
      a[11] -= xr;
      a[10] = a[23] - xr;
      a[23] += xr;
      xr = a[11];
      a[26] -= xr;
      a[11] = a[22] - xr;
      a[22] += xr;
      xr = a[26];
      a[27] -= xr;
      a[26] = a[7] - xr;
      a[7] += xr;

      xr = a[27];
      a[27] = a[6] - xr;
      a[6] += xr;

      xr = Util.SQRT2 * (a[0] - a[4]);
      a[0] += a[4];
      a[4] = xr;
      xr = Util.SQRT2 * (a[1] - a[5]);
      a[1] += a[5];
      a[5] = xr;
      xr = Util.SQRT2 * (a[16] - a[20]);
      a[16] += a[20];
      a[20] = xr;
      xr = Util.SQRT2 * (a[17] - a[21]);
      a[17] += a[21];
      a[21] = xr;

      xr = -Util.SQRT2 * (a[8] - a[12]);
      a[8] += a[12];
      a[12] = xr - a[8];
      xr = -Util.SQRT2 * (a[9] - a[13]);
      a[9] += a[13];
      a[13] = xr - a[9];
      xr = -Util.SQRT2 * (a[25] - a[29]);
      a[25] += a[29];
      a[29] = xr - a[25];
      xr = -Util.SQRT2 * (a[24] + a[28]);
      a[24] -= a[28];
      a[28] = xr - a[24];

      xr = a[24] - a[16];
      a[24] = xr;
      xr = a[20] - xr;
      a[20] = xr;
      xr = a[28] - xr;
      a[28] = xr;

      xr = a[25] - a[17];
      a[25] = xr;
      xr = a[21] - xr;
      a[21] = xr;
      xr = a[29] - xr;
      a[29] = xr;

      xr = a[17] - a[1];
      a[17] = xr;
      xr = a[9] - xr;
      a[9] = xr;
      xr = a[25] - xr;
      a[25] = xr;
      xr = a[5] - xr;
      a[5] = xr;
      xr = a[21] - xr;
      a[21] = xr;
      xr = a[13] - xr;
      a[13] = xr;
      xr = a[29] - xr;
      a[29] = xr;

      xr = a[1] - a[0];
      a[1] = xr;
      xr = a[16] - xr;
      a[16] = xr;
      xr = a[17] - xr;
      a[17] = xr;
      xr = a[8] - xr;
      a[8] = xr;
      xr = a[9] - xr;
      a[9] = xr;
      xr = a[24] - xr;
      a[24] = xr;
      xr = a[25] - xr;
      a[25] = xr;
      xr = a[4] - xr;
      a[4] = xr;
      xr = a[5] - xr;
      a[5] = xr;
      xr = a[20] - xr;
      a[20] = xr;
      xr = a[21] - xr;
      a[21] = xr;
      xr = a[12] - xr;
      a[12] = xr;
      xr = a[13] - xr;
      a[13] = xr;
      xr = a[28] - xr;
      a[28] = xr;
      xr = a[29] - xr;
      a[29] = xr;

      xr = a[0];
      a[0] += a[31];
      a[31] -= xr;
      xr = a[1];
      a[1] += a[30];
      a[30] -= xr;
      xr = a[16];
      a[16] += a[15];
      a[15] -= xr;
      xr = a[17];
      a[17] += a[14];
      a[14] -= xr;
      xr = a[8];
      a[8] += a[23];
      a[23] -= xr;
      xr = a[9];
      a[9] += a[22];
      a[22] -= xr;
      xr = a[24];
      a[24] += a[7];
      a[7] -= xr;
      xr = a[25];
      a[25] += a[6];
      a[6] -= xr;
      xr = a[4];
      a[4] += a[27];
      a[27] -= xr;
      xr = a[5];
      a[5] += a[26];
      a[26] -= xr;
      xr = a[20];
      a[20] += a[11];
      a[11] -= xr;
      xr = a[21];
      a[21] += a[10];
      a[10] -= xr;
      xr = a[12];
      a[12] += a[19];
      a[19] -= xr;
      xr = a[13];
      a[13] += a[18];
      a[18] -= xr;
      xr = a[28];
      a[28] += a[3];
      a[3] -= xr;
      xr = a[29];
      a[29] += a[2];
      a[2] -= xr;
    }
  }

  /**
   * Function: Calculation of the MDCT In the case of long blocks (type 0,1,3)
   * there are 36 coefficents in the time domain and 18 in the frequency
   * domain.<BR>
   * In the case of short blocks (type 2) there are 3 transformations with
   * short length. This leads to 12 coefficents in the time and 6 in the
   * frequency domain. In this case the results are stored side by side in the
   * vector out[].
   *
   * New layer3
   */
  private mdct_short(inout: ArrayOf<number>, inoutPos: number) {
    for (let l = 0; l < 3; l++) {
      let tc0;
      let tc1;
      let tc2;
      let ts0;
      let ts1;
      let ts2;

      ts0 =
        inout[inoutPos + 2 * 3] * this.win[SHORT_TYPE][0] -
        inout[inoutPos + 5 * 3];
      tc0 =
        inout[inoutPos + 0 * 3] * this.win[SHORT_TYPE][2] -
        inout[inoutPos + 3 * 3];
      tc1 = ts0 + tc0;
      tc2 = ts0 - tc0;

      ts0 =
        inout[inoutPos + 5 * 3] * this.win[SHORT_TYPE][0] +
        inout[inoutPos + 2 * 3];
      tc0 =
        inout[inoutPos + 3 * 3] * this.win[SHORT_TYPE][2] +
        inout[inoutPos + 0 * 3];
      ts1 = ts0 + tc0;
      ts2 = -ts0 + tc0;

      tc0 =
        (inout[inoutPos + 1 * 3] * this.win[SHORT_TYPE][1] -
          inout[inoutPos + 4 * 3]) *
        2.069978111953089e-11;
      /*
       * tritab_s [ 1 ]
       */
      ts0 =
        (inout[inoutPos + 4 * 3] * this.win[SHORT_TYPE][1] +
          inout[inoutPos + 1 * 3]) *
        2.069978111953089e-11;
      /*
       * tritab_s [ 1 ]
       */
      inout[inoutPos + 3 * 0] = tc1 * 1.90752519173728e-11 + tc0;
      /*
       * tritab_s[ 2 ]
       */
      inout[inoutPos + 3 * 5] = -ts1 * 1.90752519173728e-11 + ts0;
      /*
       * tritab_s[0 ]
       */
      tc2 = tc2 * 0.86602540378443870761 * 1.907525191737281e-11;
      /*
       * tritab_s[ 2]
       */
      ts1 = ts1 * 0.5 * 1.907525191737281e-11 + ts0;
      inout[inoutPos + 3 * 1] = tc2 - ts1;
      inout[inoutPos + 3 * 2] = tc2 + ts1;

      tc1 = tc1 * 0.5 * 1.907525191737281e-11 - tc0;
      ts2 = ts2 * 0.86602540378443870761 * 1.907525191737281e-11;
      /*
       * tritab_s[ 0]
       */
      inout[inoutPos + 3 * 3] = tc1 + ts2;
      inout[inoutPos + 3 * 4] = tc1 - ts2;

      inoutPos++;
    }
  }

  private mdct_long(
    out: ArrayOf<number>,
    outPos: number,
    _in: ArrayOf<number>
  ) {
    let ct;
    let st;
    {
      /* 1,2, 5,6, 9,10, 13,14, 17 */
      const tc1 = _in[17] - _in[9];
      const tc3 = _in[15] - _in[11];
      const tc4 = _in[14] - _in[12];
      const ts5 = _in[0] + _in[8];
      let ts6 = _in[1] + _in[7];
      const ts7 = _in[2] + _in[6];
      const ts8 = _in[3] + _in[5];

      out[outPos + 17] = ts5 + ts7 - ts8 - (ts6 - _in[4]);
      st = (ts5 + ts7 - ts8) * this.cx[12 + 7] + (ts6 - _in[4]);
      ct = (tc1 - tc3 - tc4) * this.cx[12 + 6];
      out[outPos + 5] = ct + st;
      out[outPos + 6] = ct - st;

      const tc2 = (_in[16] - _in[10]) * this.cx[12 + 6];
      ts6 = ts6 * this.cx[12 + 7] + _in[4];
      ct =
        tc1 * this.cx[12 + 0] +
        tc2 +
        tc3 * this.cx[12 + 1] +
        tc4 * this.cx[12 + 2];
      st =
        -ts5 * this.cx[12 + 4] +
        ts6 -
        ts7 * this.cx[12 + 5] +
        ts8 * this.cx[12 + 3];
      out[outPos + 1] = ct + st;
      out[outPos + 2] = ct - st;

      ct =
        tc1 * this.cx[12 + 1] -
        tc2 -
        tc3 * this.cx[12 + 2] +
        tc4 * this.cx[12 + 0];
      st =
        -ts5 * this.cx[12 + 5] +
        ts6 -
        ts7 * this.cx[12 + 3] +
        ts8 * this.cx[12 + 4];
      out[outPos + 9] = ct + st;
      out[outPos + 10] = ct - st;

      ct =
        tc1 * this.cx[12 + 2] -
        tc2 +
        tc3 * this.cx[12 + 0] -
        tc4 * this.cx[12 + 1];
      st =
        ts5 * this.cx[12 + 3] -
        ts6 +
        ts7 * this.cx[12 + 4] -
        ts8 * this.cx[12 + 5];
      out[outPos + 13] = ct + st;
      out[outPos + 14] = ct - st;
    }
    {
      const ts1 = _in[8] - _in[0];
      const ts3 = _in[6] - _in[2];
      const ts4 = _in[5] - _in[3];
      const tc5 = _in[17] + _in[9];
      let tc6 = _in[16] + _in[10];
      const tc7 = _in[15] + _in[11];
      const tc8 = _in[14] + _in[12];

      out[outPos + 0] = tc5 + tc7 + tc8 + (tc6 + _in[13]);
      ct = (tc5 + tc7 + tc8) * this.cx[12 + 7] - (tc6 + _in[13]);
      st = (ts1 - ts3 + ts4) * this.cx[12 + 6];
      out[outPos + 11] = ct + st;
      out[outPos + 12] = ct - st;

      const ts2 = (_in[7] - _in[1]) * this.cx[12 + 6];
      tc6 = _in[13] - tc6 * this.cx[12 + 7];
      ct =
        tc5 * this.cx[12 + 3] -
        tc6 +
        tc7 * this.cx[12 + 4] +
        tc8 * this.cx[12 + 5];
      st =
        ts1 * this.cx[12 + 2] +
        ts2 +
        ts3 * this.cx[12 + 0] +
        ts4 * this.cx[12 + 1];
      out[outPos + 3] = ct + st;
      out[outPos + 4] = ct - st;

      ct =
        -tc5 * this.cx[12 + 5] +
        tc6 -
        tc7 * this.cx[12 + 3] -
        tc8 * this.cx[12 + 4];
      st =
        ts1 * this.cx[12 + 1] +
        ts2 -
        ts3 * this.cx[12 + 2] -
        ts4 * this.cx[12 + 0];
      out[outPos + 7] = ct + st;
      out[outPos + 8] = ct - st;

      ct =
        -tc5 * this.cx[12 + 4] +
        tc6 -
        tc7 * this.cx[12 + 5] -
        tc8 * this.cx[12 + 3];
      st =
        ts1 * this.cx[12 + 0] -
        ts2 +
        ts3 * this.cx[12 + 1] -
        ts4 * this.cx[12 + 2];
      out[outPos + 15] = ct + st;
      out[outPos + 16] = ct - st;
    }
  }

  mdct_sub48(gfc: LameInternalFlags, w0: ArrayOf<number>, w1: ArrayOf<number>) {
    let wk = w0;
    let wkPos = 286;
    /* thinking cache performance, ch->gr loop is better than gr->ch loop */
    for (let ch = 0; ch < gfc.channels_out; ch++) {
      for (let gr = 0; gr < gfc.mode_gr; gr++) {
        let band;
        const gi = gfc.l3_side.tt[gr][ch];
        const mdct_enc = gi.xr;
        let mdct_encPos = 0;
        const samp = gfc.sb_sample[ch][1 - gr];
        let sampPos = 0;

        for (let k = 0; k < 18 / 2; k++) {
          this.window_subband(wk, wkPos, samp[sampPos]);
          this.window_subband(wk, wkPos + 32, samp[sampPos + 1]);
          sampPos += 2;
          wkPos += 64;
          /*
           * Compensate for inversion in the analysis filter
           */
          for (band = 1; band < 32; band += 2) {
            samp[sampPos - 1][band] *= -1;
          }
        }

        /*
         * Perform imdct of 18 previous subband samples + 18 current
         * subband samples
         */
        for (band = 0; band < 32; band++, mdct_encPos += 18) {
          let type = gi.block_type;
          const band0 = gfc.sb_sample[ch][gr];
          const band1 = gfc.sb_sample[ch][1 - gr];
          if (gi.mixed_block_flag !== 0 && band < 2) type = 0;
          if (gfc.amp_filter[band] < 1e-12) {
            fillArray(mdct_enc, mdct_encPos + 0, mdct_encPos + 18, 0);
          } else {
            if (gfc.amp_filter[band] < 1.0) {
              for (let k = 0; k < 18; k++)
                band1[k][this.order[band]] *= gfc.amp_filter[band];
            }
            if (type === SHORT_TYPE) {
              for (let k = -NewMDCT.NS / 4; k < 0; k++) {
                const w = this.win[SHORT_TYPE][k + 3];
                mdct_enc[mdct_encPos + k * 3 + 9] =
                  band0[9 + k][this.order[band]] * w -
                  band0[8 - k][this.order[band]];
                mdct_enc[mdct_encPos + k * 3 + 18] =
                  band0[14 - k][this.order[band]] * w +
                  band0[15 + k][this.order[band]];
                mdct_enc[mdct_encPos + k * 3 + 10] =
                  band0[15 + k][this.order[band]] * w -
                  band0[14 - k][this.order[band]];
                mdct_enc[mdct_encPos + k * 3 + 19] =
                  band1[2 - k][this.order[band]] * w +
                  band1[3 + k][this.order[band]];
                mdct_enc[mdct_encPos + k * 3 + 11] =
                  band1[3 + k][this.order[band]] * w -
                  band1[2 - k][this.order[band]];
                mdct_enc[mdct_encPos + k * 3 + 20] =
                  band1[8 - k][this.order[band]] * w +
                  band1[9 + k][this.order[band]];
              }
              this.mdct_short(mdct_enc, mdct_encPos);
            } else {
              const work = new Float32Array(18);
              for (let k = -NewMDCT.NL / 4; k < 0; k++) {
                const a =
                  this.win[type][k + 27] * band1[k + 9][this.order[band]] +
                  this.win[type][k + 36] * band1[8 - k][this.order[band]];
                const b =
                  this.win[type][k + 9] * band0[k + 9][this.order[band]] -
                  this.win[type][k + 18] * band0[8 - k][this.order[band]];
                work[k + 9] = a - b * this.tantab_l[3 + k + 9];
                work[k + 18] = a * this.tantab_l[3 + k + 9] + b;
              }

              this.mdct_long(mdct_enc, mdct_encPos, work);
            }
          }
          /*
           * Perform aliasing reduction butterfly
           */
          if (type !== SHORT_TYPE && band !== 0) {
            for (let k = 7; k >= 0; --k) {
              const bu =
                mdct_enc[mdct_encPos + k] * this.ca[20 + k] +
                mdct_enc[mdct_encPos + -1 - k] * this.cs[28 + k];
              const bd =
                mdct_enc[mdct_encPos + k] * this.cs[28 + k] -
                mdct_enc[mdct_encPos + -1 - k] * this.ca[20 + k];

              mdct_enc[mdct_encPos + -1 - k] = bu;
              mdct_enc[mdct_encPos + k] = bd;
            }
          }
        }
      }
      wk = w1;
      wkPos = 286;
      if (gfc.mode_gr === 1) {
        for (let i = 0; i < 18; i++) {
          copyArray(gfc.sb_sample[ch][1][i], 0, gfc.sb_sample[ch][0][i], 0, 32);
        }
      }
    }
  }
}
