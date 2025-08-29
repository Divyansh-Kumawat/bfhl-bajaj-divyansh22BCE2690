# BFHL REST API

This project implements a REST API for the VIT Full Stack Question Paper. The API exposes a POST endpoint `/bfhl` that processes an array and returns structured information as specified in the requirements.

## Tech Stack
- Node.js
- Express.js

## Features
- POST `/bfhl` route
- Returns status, user_id, email, roll_number, arrays for even/odd numbers, uppercase alphabets, special characters, sum of numbers (as string), and concatenated reversed alternating caps string
- Error handling and best practices

## Deployment
You can deploy this API to Vercel, Railway, Render, or any other provider that supports Node.js REST APIs.

## Example Request
```
POST /bfhl
{
  "data": ["a","1","334","4","R", "$"]
}
```

## Example Response
```
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334","4"],
  "alphabets": ["A","R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Setup
1. Clone the repository
2. Run `npm install`
3. Start the server with `npm start`

## Author
- Full Name: john doe
- Email: john@xyz.com
- Roll Number: ABCD123
- Date of Birth: 17/09/1999
