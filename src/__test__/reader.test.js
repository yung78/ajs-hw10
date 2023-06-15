import read from '../js/reader.js';

const data = new Uint16Array([
  123, 34, 105, 100, 34, 58, 57, 44, 34, 99, 114, 101,
  97, 116, 101, 100, 34, 58, 49, 53, 52, 54, 51, 48,
  48, 56, 48, 48, 44, 34, 117, 115, 101, 114, 73, 110,
  102, 111, 34, 58, 123, 34, 105, 100, 34, 58, 49, 44,
  34, 110, 97, 109, 101, 34, 58, 34, 72, 105, 116, 109,
  97, 110, 34, 44, 34, 108, 101, 118, 101, 108, 34, 58,
  49, 48, 44, 34, 112, 111, 105, 110, 116, 115, 34, 58,
  50, 48, 48, 48, 125, 125,
]);

test('function read() resolve', async () => {
  expect.assertions(1);
  expect(new Uint16Array(await read())).toEqual(data);
});

// test('test function read() reject', async () => {
//   jest.mock('../js/reader.js');
//   expect.assertions(1);
//   // buffer.mockReturnValue(new Error('Error'));
//   // bufferView.mockReturnValue(6 / 0);
//   try {
//     new Uint16Array(await read());
//   } catch (err) {
//     expect(err.massage).rejects.toEqual('ReadError');
//   }
// });
