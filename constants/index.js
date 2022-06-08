export const YESTERDAY_EXCUSES = [
  'Refactored',
  'Worked on my ticket',
  'Was troubleshooting this thing',
  "Had a huge headache, which i'm sure i mentioned",
  'Was researching into something that might help my task',
  'Hit a brick wall, but then it came to me',
  'I was writing documentation because nobody else is doing it',
];

export const TODAY_EXCUSES = [
  'I will continue on that',
  "I'll hopefully finish that up",
  "I'm gonna talk to the others and see what they say about it",
  "I'll have it in a workable state",
  "It'll be done, hopefully",
  "I'll have to speak to devops for some permissions before carrying on",
  "I'll get to the bottom of this mystery, even if it kills me",
];

export const randomNumber = () =>
  Math.floor(Math.random() * TODAY_EXCUSES.length);

export const setDate = (day) => {
  let date = null;

  const today = new Date();
  const yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - 1);

  if (day === 'today') {
    date = today.toDateString();
  }

  if (day === 'yesterday') {
    date = yesterday.toDateString();
  }

  return date;
};

export const GITHUB = 'https://github.com/jaarnie/standup-excuse-generator';
