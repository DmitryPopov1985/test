import showUserHealth from '../health';

test('show userHealth', () => {
  expect(showUserHealth({ name: 'Маг', health: 100 })).toBe('healthy');
  expect(showUserHealth({ name: 'Воин', health: 50 })).toBe('wounded');
  expect(showUserHealth({ name: 'Лучник', health: 14 })).toBe('critical');
  expect(showUserHealth({ name: 'Маг', health: 70 })).toBe('healthy');
});
