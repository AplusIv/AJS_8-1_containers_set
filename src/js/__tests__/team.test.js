import Team from '../team';

test('should add some character on a list', () => {
  const someTeam = new Team();
  const character = { name: 'Bowman', health: 100, damage: 150 };
  someTeam.add(character);
  expect(someTeam.members).toContainEqual({ name: 'Bowman', health: 100, damage: 150 });
});

test('should throw Error while trying add the same character on a list twice', () => {
  const someTeam = new Team();
  const character = { name: 'Bowman', health: 100, damage: 150 };
  someTeam.add(character);
  expect(() => someTeam.add(character)).toThrowError(new Error('Нельзя повторно добавить в команду одного и того же персонажа'));
});

test('should add all no repeatable characters on a list', () => {
  const someTeam = new Team();
  const bowman = { name: 'Bowman', health: 100, damage: 150 };
  const magician = { name: 'Magician', health: 90, damage: 170 };
  const swordman = { name: 'Swordman', health: 150, damage: 100 };
  someTeam.addAll(bowman, magician, swordman, magician, swordman, swordman, bowman);
  // Добавляю характеров с повторами
  expect(someTeam.members).toEqual(new Set([
    { name: 'Bowman', health: 100, damage: 150 },
    { name: 'Magician', health: 90, damage: 170 },
    { name: 'Swordman', health: 150, damage: 100 },
  ]));
});

test('method toArray() of class Team should return array from prop "members"', () => {
  const someTeam = new Team();
  someTeam.addAll(
    { name: 'Bowman', health: 100, damage: 150 },
    { name: 'Magician', health: 90, damage: 170 },
    { name: 'Swordman', health: 150, damage: 100 },
  );
  const result = Array.isArray(someTeam.toArray());
  expect(result).toBe(true);
});
