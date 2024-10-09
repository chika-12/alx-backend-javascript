export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a view using Int8Array to manipulate the buffer
  const int8View = new Int8Array(buffer);

  // Check if the position is within bounds of the buffer
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Set the Int8 value at the specified position
  int8View[position] = value;
  return buffer;
}
