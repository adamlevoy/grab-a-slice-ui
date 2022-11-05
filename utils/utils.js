export function abbreviateAddress(address) {
  const arr = address.split("");
  const prefix = arr.splice(0, 5).join("");
  const suffix = arr.splice(arr.length - 4, 5).join("");
  const abbreviated = `${prefix}...${suffix}`;
  return abbreviated;
}
