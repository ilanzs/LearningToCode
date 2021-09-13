function anagrams(word, words) {
  let output = [];
  for (let i = 0; i < words.length; i++) {
    if (word.split("").sort("").join("") == words[i].split("").sort("").join("")) {
      output.push(words[i]);
    }
  }
  return output;
}