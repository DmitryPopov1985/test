export default function showUserHealth(user) {
  if (user.health > 50) {
    return 'healthy';
  } if (user.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
