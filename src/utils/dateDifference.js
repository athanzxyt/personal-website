// src/utils/dateDifference.js

export function timeAgo(dateString) {
  const cleanDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");
  const date = new Date(cleanDateString);
  const now = new Date();

  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 30) {
    return `${diffInDays}d ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}mo ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
}
