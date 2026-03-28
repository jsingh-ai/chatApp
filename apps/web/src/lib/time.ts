export const formatRelativeTime = (date: string | number | Date) => {
  const target = new Date(date);
  const now = new Date();
  const diffMs = now.getTime() - target.getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  if (diffMs < oneDay) {
    return target.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  return target.toLocaleDateString([], {
    month: 'short',
    day: 'numeric',
  });
};
