export default function formattedNumber(value) {
  return (value < 10 ? "0" : "") + value;
}
