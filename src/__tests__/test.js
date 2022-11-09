import showUserHealth from '../health';

test('showUserHealth', () => {
  const user1 = { name: 'Маг', health: 90 };
  const result = showUserHealth(user1);
  expect(result).toBe('healthy');
});
test('showUserHealth', () => {
  const user2 = { name: 'Воин', health: 40 };
  const result = showUserHealth(user2);
  expect(result).toBe('wounded');
});
test('showUserHealth', () => {
  const user3 = { name: 'Лучник', health: 13 };
  const result = showUserHealth(user3);
  expect(result).toBe('critical');
});
