/**
 * Format date consistently for server and client rendering
 * Prevents hydration mismatches
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
}
