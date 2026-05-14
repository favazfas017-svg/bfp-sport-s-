export const pages = [
  'Home', 'About Tournament', 'Team Registration', 'Teams', 'Players', 'Fixtures', 'Live Scores',
  'League Fixtures', 'Points Table', 'Knockout Brackets', 'Sponsors', 'Prize Pool', 'Notifications', 'Gallery', 'Contact', 'Admin Panel'
];

export const fixtures = [
  { match: 'Falcons vs Warriors', date: '2026-06-20', time: '18:00', venue: 'City Arena', status: 'Live', score: '2 - 1' },
  { match: 'Titans vs Legends', date: '2026-06-21', time: '20:00', venue: 'North Stadium', status: 'Upcoming', score: '-' }
];

export const points = [
  { team: 'Falcons', w: 3, l: 0, d: 1, gd: 8, pts: 10 },
  { team: 'Warriors', w: 2, l: 1, d: 1, gd: 3, pts: 7 }
];

export const notifications = [
  { title: 'Semi-final ticket window open', message: 'Book seats before Friday 6 PM.', type: 'Announcement' },
  { title: 'Match 6 kickoff changed', message: 'Kickoff moved to 7:30 PM due to rain.', type: 'Schedule' }
];

export const prizes = [
  { title: 'Champions', reward: '₹1,50,000 + Trophy' },
  { title: 'Runners-up', reward: '₹75,000 + Medals' },
  { title: 'Best Player', reward: '₹15,000 + Sponsor Gift' }
];
