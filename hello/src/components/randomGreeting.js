const Greetings = [
  'Hello',
  'Hola',
  'Hi',
  'Greetz',
  'Gutentag',
  'Konichiwa'
]

const randomGreeting = () => {
  return Greetings[Math.floor(Math.random() * Greetings.length)]
}

export default randomGreeting;
