export default function(value, maxLength = 3) {
    if (value.length <= maxLength) return value;
    return value.slice(0, maxLength) + '...';
}