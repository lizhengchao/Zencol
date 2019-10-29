const pad = (nn: number, width: number, z: string = "0"): string => {
  let n = nn.toString();
  while (width !== Infinity && n.length < width) {
    n = z + n;
  }
  return n;
};

export { pad };
