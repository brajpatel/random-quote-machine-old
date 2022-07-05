const container = document.getElementById('container')
const quoteMark = document.getElementById('quote-mark')
const quote = document.getElementById('text')
const authorText = document.getElementById('author-text')
const quoteAuthor = document.getElementById('author')
const twitter = document.getElementById('twitter-btn')
const instagram = document.getElementById('instagram-btn')
const newQuoteBtn = document.getElementById('new-quote')

twitter.addEventListener('mouseenter', twitterHoverOn)
twitter.addEventListener('mouseleave', twitterHoverOff)
instagram.addEventListener('mouseenter', instagramHoverOn)
instagram.addEventListener('mouseleave', instagramHoverOff)
newQuoteBtn.addEventListener('click', changeColor)
newQuoteBtn.addEventListener('click', newQuote)

let colors = [
    '#2a2a2a',
    '#361db5',
    '#006464',
    '#32a852',
    '#1dab72',
    '#960c23',
    '#180480',
    '#581eb0',
    '#b01e51',
    '#b0811c',
    '#4b5c80',
    '#b4c425',
    '#0c0c7a',
    '#8c3434',
    '#8c3434',
    '#319ea8',
    '#31a892',
    '#8f3c00',
    '#a8340d',
    '#7d7d7d',
    '#5c5c5c',
    '#4f3c3c',
    '#3c3f4f',
    '#3c4f44',
    '#4f3c4b'
]

let randomColor = colors[Math.floor(Math.random() * colors.length)]

container.style.backgroundColor = randomColor
quoteMark.style.color = randomColor
quote.style.color = randomColor
authorText.style.color = randomColor
twitter.style.backgroundColor = randomColor
instagram.style.backgroundColor = randomColor
newQuoteBtn.style.backgroundColor = randomColor

function changeColor() {
    randomColor = colors[Math.floor(Math.random() * colors.length)]

    container.style.backgroundColor = randomColor
    quoteMark.style.color = randomColor
    quote.style.color = randomColor
    authorText.style.color = randomColor
    twitter.style.backgroundColor = randomColor
    instagram.style.backgroundColor = randomColor
    newQuoteBtn.style.backgroundColor = randomColor
}

function twitterHoverOn() {
    twitter.style.backgroundColor = '#1da1f2'
}

function twitterHoverOff() {
    twitter.style.backgroundColor = randomColor
}

function instagramHoverOn() {
    instagram.style.backgroundColor = '#d11749'
}

function instagramHoverOff() {
    instagram.style.backgroundColor = randomColor
}

let quotes = [
    "There are no shortcuts to any place worth going.",
    "People who say it cannot be done, should not interrupt those who are doing it.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
    "It is during our darkest moments that we must focus to see the light.",
    "Believe you can and you\'re halfway there.",
    "All you need is the plan, the road map, and the courage to press on to your destination.",
    "You don\'t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.",
    "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "The big lesson in life, baby, is never be scared of anyone or anything.",
    "Stand back up and never be defeated.",
    "A lot of people are afraid to say what they want. That\'s why they don\'t get what they want.",
    "It ain\'t about how hard you hit. It\'s about how hard you can get hit and keep moving forward.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "The people cry out for strength that is already theirs!",
    "If my mind can conceive it, if my heart can believe it, then I can achieve it.",
    "We all have problems. But it\'s not what happens to us, it\'s the choices we make after.",
    "I\'m realizing how much I\'ve diminished my own power. I\'m not doing that no more."
]

let authors = [
    "Beverly Sills",
    "Bernard Shaw",
    "Winston Churchill",
    "Malala Yousafzai",
    "Aristotle",
    "Theodore Roosevelt",
    "Earl Nightingale",
    "Mandy Hale",
    "Ralph Waldo Emerson",
    "Albert Einstein",
    "Zig Ziglar",
    "Frank Sinatra",
    "Pantheon",
    "Madonna",
    "Sylvester Stallone",
    "Helen Keller",
    "Pantheon",
    "Muhammad Ali",
    "Elizabeth Smart",
    "Alicia Keys"
]

let randomQuote = Math.floor(Math.random() * quotes.length)

quote.innerHTML = quotes[randomQuote]
quoteAuthor.innerHTML = authors[randomQuote]

function newQuote() {
    randomQuote = Math.floor(Math.random() * quotes.length)

    quote.innerHTML = quotes[randomQuote]
    quoteAuthor.innerHTML = authors[randomQuote]
}

