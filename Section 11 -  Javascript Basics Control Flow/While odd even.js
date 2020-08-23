var num = 5 // "even" was a misleading name.
while (num <= 50) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log(num)
  }
  num += 1
}

num = 300 // num is already defined above once
while (num <= 333) {
  if (num % 2 !== 0) {
    console.log(num)
  }
  num += 1
}
