function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }
//   Rewrite it, to perform the same, but without if, in a single line.
  
//   Make two variants of checkAge:
  
//   Using a question mark operator ?
//   Using OR ||
//   solution
//   Using a question mark operator '?':
  
  function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  }
//   Using OR || (the shortest variant):
  
  function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }


  min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
//   A solution with a question mark operator '?':
  
  function min(a, b) {
    return a < b ? a : b;
  }