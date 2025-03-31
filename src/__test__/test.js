import Team from '../js/Team';
import Character from '../js/Character';

const cases = [
  new Character('мечник', 10),
  new Character('маг', 100),
  new Character('лучник', 80),
];

test('adding not unique member', () => {
  const myTeam = new Team();
  myTeam.add(cases[0]);
  expect(() => myTeam.add(cases[0])).toThrow('Member already exists!');
});

test('adding unique member', () => {
  const myTeam = new Team();
  myTeam.add(cases[0]);
  myTeam.add(cases[1]);
  expect(myTeam.members.size).toBe(2);
});

test('adding members', () => {
  const myTeam = new Team();
  myTeam.addAll(...cases);
  expect(myTeam.members.size).toBe(3);
});

test('converting to array', () => {
  const myTeam = new Team();
  myTeam.addAll(...cases);
  expect(myTeam.toArray()).toEqual(cases);
});
