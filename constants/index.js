export const YESTERDAY_EXCUSES = [
  'refactored',
  'worked on my ticket',
  'was troubleshooting this thing',
  "had a huge headache, which i'm sure i mentioned",
  'was researching into something that might help my task',
  'hit a brick wall, but then it came to me',
  'i was writing documentation because nobody else is doing it',
];

export const TODAY_EXCUSES = [
  'i will continue on that',
  "i'll hopefully finish that up",
  "i'm gonna talk to the others and see what they say about it",
  "i'll have it in a workable state",
  "it'll be done, hopefully",
  "i'll have to speak to devops for some permissions before carrying on",
  "i'll get to the bottom of this mystery, even if it kills me",
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
