export default function showUserHealth({ health }) {
  if (health > 50) {
    return 'healthy';
  } if (health > 15) {
    return 'wounded';
  }
  return 'critical';
}

export function sortByHealth(heroes) {
  return heroes.sort((a, b) => (a.health < b.health ? 1 : -1));
}
