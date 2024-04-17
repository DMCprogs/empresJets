// Async - Last value sent after completion
// Behavior - Latest value sent to new subscribers
// Subject - Multicasted value to all subscribers similar to addEventListener
// Replay - Send N old values to new subscribers

export default () => [
	{
		topic: 'react',
		subject: 'mounted',
		type: 'ReplaySubject'
	},
	{
		topic: 'firebase',
		subject: 'auth:changed',
		type: 'ReplaySubject'
	},
	{
		topic: 'firebase',
		subject: 'user',
		type: 'ReplaySubject'
	},
	{
		topic: 'firebase',
		subject: 'user:uid',
		type: 'ReplaySubject'
	},
	{
		topic: 'firestore',
		subject: 'notifications:live',
		type: 'Subject'
	},
	{
		topic: 'firestore',
		subject: 'notifications:latest',
		type: 'ReplaySubject'
	},
	{
		topic: 'firestore',
		subject: 'auctions:live',
		type: 'Subject'
	},
	{
		topic: 'firestore',
		subject: 'auctions:latest',
		type: 'ReplaySubject'
	},
	{
		topic: 'firestore',
		subject: 'flights:latest',
		type: 'ReplaySubject'
	},
	{
		topic: 'firestore',
		subject: 'bids:latest',
		type: 'ReplaySubject'
	},
	{
		topic: 'firestore',
		subject: 'profile:latest',
		type: 'ReplaySubject'
	},
	{
		topic: 'firestore',
		subject: 'payments:latest',
		type: 'ReplaySubject'
	},
	{
		topic: 'firestore',
		subject: 'aircraft:latest',
		type: 'ReplaySubject'
	},
	{
		topic: 'toast',
		subject: 'show',
		type: 'Subject'
	}
]

