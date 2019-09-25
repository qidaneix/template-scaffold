class ArrayNiu extends Array {
  noSame() {
    const set = new Set(this);
    return [...set];
  }
}

export { ArrayNiu };
