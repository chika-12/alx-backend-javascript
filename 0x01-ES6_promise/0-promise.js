export default function getResponseFromAPI() {
  return new Promise((resolve) => setTimeout(() => resolve('data'), 2000));
}
