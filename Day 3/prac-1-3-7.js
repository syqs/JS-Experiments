var i = 0, j, n = 5;

while ( i < n ) {
  j = 0; // What happens if we remove this line?
  while ( j < n ) {
    console.log("i is", i, "and j is", j);
    j++;
  }
  i++;
}