const quotes = [
  {
    author: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Abraham Lincoln",
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
  },
  {
    author: "Lilly Pulitzer",
    quote: "Being happy never goes out of style.",
  },
  {
    author: "Barbara Bush",
    quote:
      "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
  },
  {
    author: "Maxime Lagacé",
    quote:
      "Life is a mountain. Your goal is to find your path, not to reach the top.",
  },
  {
    author: "Naval Ravikant",
    quote:
      "Three things in life – your health, your mission, and the people you love. That’s it.",
  },
  {
    author: "Jackie Robinson",
    quote:
      "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Steve Jobs",
    quote:
      "If you really look closely, most overnight successes took a long time.",
  },
];

//html 요소 가져오기
const author = document.querySelector("#quotes span:first-child");
const quote = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
author.innerText = todaysQuote.author;
quote.innerText = todaysQuote.quote;
