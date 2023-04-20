/**
 * Major version number.
 */
const LAME_MAJOR_VERSION = 3;

/**
 * Minor version number.
 */
const LAME_MINOR_VERSION = 98;

/**
 * Patch level.
 */
const LAME_PATCH_VERSION = 4;

/**
 * The short version of the LAME version string.
 *
 * @return short version of the LAME version string
 */
export function getLameShortVersion() {
  // Adding date and time to version string makes it harder for output
  // validation
  return `${LAME_MAJOR_VERSION}.${LAME_MINOR_VERSION}.${LAME_PATCH_VERSION}` as const;
}
