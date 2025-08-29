const express = require('express');
const app = express();
app.use(express.json());

// User details (replace with your own)
const FULL_NAME = 'john doe'; // lowercase
const DOB = '17091999'; // ddmmyyyy
const EMAIL = 'john@xyz.com';
const ROLL_NUMBER = 'ABCD123';

function isNumber(str) {
  return /^\d+$/.test(str);
}
function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}
function isSpecial(str) {
  return !isNumber(str) && !isAlphabet(str);
}
function alternatingCaps(str) {
  let res = '';
  let upper = true;
  for (let ch of str) {
    if (/[a-zA-Z]/.test(ch)) {
      res += upper ? ch.toUpperCase() : ch.toLowerCase();
      upper = !upper;
    }
  }
  return res;
}

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }
    let even = [], odd = [], alpha = [], special = [], sum = 0, concatAlpha = '';
    for (let item of data) {
      if (isNumber(item)) {
        let num = parseInt(item);
        if (num % 2 === 0) even.push(item);
        else odd.push(item);
        sum += num;
      } else if (isAlphabet(item)) {
        alpha.push(item.toUpperCase());
        concatAlpha += item;
      } else if (isSpecial(item)) {
        special.push(item);
      }
    }
    // Reverse concatAlpha and apply alternating caps
    let reversed = concatAlpha.split('').reverse().join('');
    let concatString = alternatingCaps(reversed);
    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME.replace(/\s+/g, '_')}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: odd,
      even_numbers: even,
      alphabets: alpha,
      special_characters: special,
      sum: sum.toString(),
      concat_string: concatString
    });
  } catch (err) {
    res.status(500).json({ is_success: false, message: 'Server error' });
  }
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
