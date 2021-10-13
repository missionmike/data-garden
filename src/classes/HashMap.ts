class HashMap {
  _storage: any[];

  constructor() {
    this._storage = [];
  }

  set(key: string, val: any) {
    const index: number = this.hashStr(key);

    if (!this._storage[index]) {
      this._storage[index] = [[key, val]];
    } else {
      this._storage[index].push([key, val]);
    }
  }

  get(key: string) {
    const index: number = this.hashStr(key);

    if (!this._storage[index]) {
      return undefined;
    }

    for (let keyVal of this._storage[index]) {
      if (keyVal[0] === key) {
        return keyVal[1];
      }
    }
  }

  hashStr(str: string): number {
    let finalHash = 0;
    for (let i = 0; i < str.length; i += 1) {
      finalHash += str.charCodeAt(i);
    }
    return finalHash;
  }

  raw() {
    return this._storage;
  }
}

export { HashMap };
