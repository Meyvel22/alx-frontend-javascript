export default function createInt8TypedArray(length, position, value) {
  const line = new ArrayBuffer(length);
  const gain = new DataView(line);

  try {
    gain.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return gain;
}
