const isProduction: boolean = process.env.NODE_ENV === 'production';
const prefix = 'Warning';

export function warning(
  condition: unknown,
  message?: string | (() => string)
): void {
  if (condition) {
    return;
  }

  if (isProduction) {
    return;
  }

  const provided: string | undefined =
    typeof message === 'function' ? message() : message;

  const value: string = provided ? `${prefix}: ${provided}` : prefix;
  console.warn(value);
}

warning.always = warning.bind(null, false);
