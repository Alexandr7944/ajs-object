import sortObject from '../sortObject';

const input1 = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};
const input2 = {
  health: 10, level: 2, attack: 80, name: 'мечник', defence: 40,
};
const output = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

test.each([
  ['sortObject1', input1, output],
  ['sortObject2', input2, output],
])('testing function with %s status', (__, value, result) => {
  expect(sortObject(value, ['name', 'level'])).toEqual(result);
});
