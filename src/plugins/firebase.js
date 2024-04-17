import {
	initializeApp
} from 'firebase/app'
import {
	getAuth, onAuthStateChanged
} from 'firebase/auth'
import {
	collection, doc, getDocs, getFirestore, onSnapshot, query, where
} from 'firebase/firestore'
import {
	isNotNull
} from 'ramda-adjunct'
import {
	filter, from, map, Observable, of, pluck, switchMap
} from 'rxjs'
import useTopics from './useTopics'

const {
	Message,
	Topic
} = useTopics

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
}

initializeApp(firebaseConfig)

onAuthStateChanged(getAuth(), user => Message('firebase', 'auth:changed', user))

//Declare topics
Topic('firebase', 'auth:changed')
Topic('firebase', 'user')
Topic('firebase', 'user:uid')
Topic('firestore', 'profile:latest')
Topic('firestore', 'notifications:latest')
Topic('firestore', 'notifications:live')
Topic('firestore', 'auctions:live')
Topic('firestore', 'auctions:latest')
Topic('firestore', 'flights:latest')
Topic('firestore', 'payments:latest')

Topic('firebase', 'auth:changed')
	.pipe(filter(isNotNull))
	.subscribe(Message('firebase', 'user'))

Topic('firebase', 'user')
	.pipe(pluck('uid'))
	.subscribe(Message('firebase', 'user:uid'))

of(query(collection(getFirestore(), 'flights')))
	.pipe(switchMap(q => from(getDocs(q))))
	.pipe(map(qs => {
		let docs = []
		qs.forEach(e => {
			let doc = ({
				uid: e.id,
				...e.data()
			})
			docs.push(doc)
		})
		return docs
	}))
	.subscribe(Message('firestore', 'flights:latest'))

of(query(collection(getFirestore(), 'auctions')))
	.pipe(switchMap(q => from(getDocs(q))))
	.pipe(map(qs => {
		let docs = []
		qs.forEach(e => {
			let doc = ({
				uid: e.id,
				...e.data()
			})
			docs.push(doc)
		})
		return docs
	}))
	.subscribe(Message('firestore', 'auctions:latest'))

of(query(collection(getFirestore(), 'auctions')))
	.pipe(switchMap(q => new Observable(observer =>
		onSnapshot(q, querySnapshot => querySnapshot.forEach((_doc) => observer.next(({
			uid: _doc.id,
			..._doc.data()
		}))))
	)))
	.subscribe(Message('firestore', 'auctions:live'))

Topic('firebase', 'user:uid')
	.pipe(map(uid => doc(getFirestore(), 'users', uid, 'profiles', 'latest')))
	.pipe(switchMap(q => new Observable(observer =>
		onSnapshot(q, e => observer.next(({
			uid: e.id,
			...e.data()
		})))
	)))
	.subscribe(Message('firestore', 'profile:latest'))

Topic('firebase', 'user:uid')
	.pipe(map(uid => query(collection(getFirestore(), 'users', uid, 'notifications'))))
	.pipe(switchMap(q => from(getDocs(q))))
	.pipe(map(qs => {
		let docs = []
		qs.forEach(e => {
			let doc = ({
				uid: e.id,
				...e.data()
			})
			docs.push(doc)
		})
		return docs
	}))
	.subscribe(Message('firestore', 'notifications:latest'))

Topic('firebase', 'user:uid')
	.pipe(map(uid => query(collection(getFirestore(), 'users', uid, 'notifications'))))
	.pipe(switchMap(q => new Observable(observer =>
		onSnapshot(q, querySnapshot => querySnapshot.forEach((_doc) => observer.next(({
			uid: _doc.id,
			..._doc.data()
		}))))
	)))
	.subscribe(Message('firestore', 'notifications:live'))

Topic('firebase', 'user:uid')
	.pipe(map(uid => query(
		collection(getFirestore(), 'users', uid, 'coinbase_charges'),
		where('event_type', '==', 'charge:confirmed')
	)))
	.pipe(switchMap(q => from(getDocs(q))))
	.pipe(map(qs => {
		let docs = []
		qs.forEach(e => {
			let doc = ({
				uid: e.id,
				...e.data()
			})
			docs.push(doc)
		})
		return docs
	}))
	.subscribe(Message('firestore', 'payments:latest'))
