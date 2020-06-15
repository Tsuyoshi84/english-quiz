export function fetchPhrases() {
  return phrases;
}

export function fetchRandomPhrase() {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

const phrases = [
  {
    body: 'sink into oblivion',
    meaning: 'To become lost to obscurity; to not be known or remembered by anyone.',
    example: 'He held a rather cynical view of parenthood, believing that people only had children to avoid sinking into oblivion.',
  },
  {
    body: 'keep an ear to the ground',
    meaning: 'To listen for any indication of what is happening or will happen.',
    example:
      'A: "I\'m not sure what\'s going to happen with this merger, so I\'m keeping an ear to the ground." B: "Please let me know if you hear anything."',
  },
];
