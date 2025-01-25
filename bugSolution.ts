function printName(name: string | null | undefined): void {
  if (name !== undefined) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is undefined or null');
  }
}

printName(null); // Works
printName(undefined); // Works