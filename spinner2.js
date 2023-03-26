let i = 100;
let spin = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  ', '\r/  ', '\r-  ', '\r\\  '];

for (let index of spin) {
  setTimeout(() => {
    process.stdout.write(index);
  }, i)
  i += 200
}
  