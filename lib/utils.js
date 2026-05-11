import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn — Tailwind class merger utility
 *
 * Combines clsx (conditional class logic) with tailwind-merge
 * (conflict resolution). Use everywhere you need dynamic classes.
 *
 * @example
 *   cn("px-4 py-2", isActive && "bg-burgundy", className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
