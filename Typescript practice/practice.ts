export function getDifficulty(stars: number) {
  if (stars < 100) return "Beginner";
  if (stars < 1000) return "Intermediate";
  return "Advanced";
}