export function convertDateFormatToDatabase(date: string): string {
  // received string must look like: "dd/mm/yyyy"
  const [day, month, year] = date.split("/");
  const newDate: string = `${year}-${month}-${day}`;
  return newDate;
}

export function convertDateFormatToUser(stringDate: string): string {
  const date = new Date(stringDate);
  const day = "" + date.getDate();
  const month = "" + (date.getMonth() + 1);
  const year = date.getFullYear();
  const newDate = `${day}/${month}/${year}`;
  return newDate;
}
