export const convertDateToYear = (date: string): string => {
  if (date) {
    const Newdate = date.split('-');

    return Newdate[0];
  }
  return ' ';
};
