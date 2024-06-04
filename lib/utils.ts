import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Checks if a given string is numeric.
 *
 * @param value - The string to check.
 * @returns A boolean indicating whether the string is numeric.
 *
 * @remarks
 * This function uses a regular expression to match the input string against the pattern of numeric characters.
 * It returns `true` if the string matches the pattern, indicating that it is numeric. Otherwise, it returns `false`.
 *
 * @example
 * ```typescript
 * const numericString = "12345";
 * const nonNumericString = "abcde";
 *
 * console.log(isNumeric(numericString)); // Output: true
 * console.log(isNumeric(nonNumericString)); // Output: false
 * ```
 */
export function isNumeric(value: string): boolean {
  return /^\d+$/.test(value);
}