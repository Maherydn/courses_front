export const formatDate = (date: Date | null) => {
  if (!date) return null;

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // +1 car getMonth() retourne 0-11

  return `${year}-${month}`; // format YYYY-MM
};
