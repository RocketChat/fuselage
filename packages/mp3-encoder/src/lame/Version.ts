class Version {
  /**
   * URL for the LAME website.
   */
  static readonly LAME_URL = 'http://www.mp3dev.org/';

  /**
   * Major version number.
   */
  static readonly LAME_MAJOR_VERSION = 3;

  /**
   * Minor version number.
   */
  static readonly LAME_MINOR_VERSION = 98;

  /**
   * Patch level.
   */
  static readonly LAME_PATCH_VERSION = 4;

  /**
   * Major version number.
   */
  static readonly PSY_MAJOR_VERSION = 0;

  /**
   * Minor version number.
   */
  static readonly PSY_MINOR_VERSION = 93;

  /**
   * A string which describes the version of LAME.
   *
   * @return string which describes the version of LAME
   */
  getLameVersion() {
    // primary to write screen reports
    return `${Version.LAME_MAJOR_VERSION}.${Version.LAME_MINOR_VERSION}.${Version.LAME_PATCH_VERSION}` as const;
  }

  /**
   * The short version of the LAME version string.
   *
   * @return short version of the LAME version string
   */
  getLameShortVersion() {
    // Adding date and time to version string makes it harder for output
    // validation
    return `${Version.LAME_MAJOR_VERSION}.${Version.LAME_MINOR_VERSION}.${Version.LAME_PATCH_VERSION}` as const;
  }

  /**
   * The shortest version of the LAME version string.
   *
   * @return shortest version of the LAME version string
   */
  getLameVeryShortVersion() {
    // Adding date and time to version string makes it harder for output
    return `LAME${Version.LAME_MAJOR_VERSION}.${Version.LAME_MINOR_VERSION}r` as const;
  }

  /**
   * String which describes the version of GPSYCHO
   *
   * @return string which describes the version of GPSYCHO
   */
  getPsyVersion() {
    return `${Version.PSY_MAJOR_VERSION}.${Version.PSY_MINOR_VERSION}` as const;
  }

  /**
   * String which is a URL for the LAME website.
   *
   * @return string which is a URL for the LAME website
   */
  getLameUrl() {
    return Version.LAME_URL;
  }

  /**
   * Quite useless for a java version, however we are compatible ;-)
   *
   * @return "32bits"
   */
  getLameOsBitness() {
    return '32bits' as const;
  }
}

export default Version;
