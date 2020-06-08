import dayjs from 'dayjs';

export default function partOfDay() {
  const hour = dayjs().hour();

  if (hour > 17) {
    return 'evening';
  }
  if (hour > 12) {
    return 'afternoon';
  }

  return 'morning';
}
