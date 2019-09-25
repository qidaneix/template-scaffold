class ArrayBi extends Array {
  noSame() {
    const set = new Set(this);
    return [...set];
  }
}

export { ArrayBi };
