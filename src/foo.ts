class ArrayBi extends Array {
  public noSame(): any[] {
    const set = new Set(this);
    return [...set];
  }
}

export { ArrayBi };
