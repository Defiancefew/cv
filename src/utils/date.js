export const calculateAge = () => {
  const ageDiffMs = Date.now() - new Date(1991, 8, 10).getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
