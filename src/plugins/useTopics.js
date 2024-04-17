import {
	curry, filter, join, map, pipe, propEq, props
} from 'ramda'
import {
	AsyncSubject, BehaviorSubject, ReplaySubject, Subject
} from 'rxjs'

import TopicsConfig from './topics'

let useTopics

const createTopics = () => {
	if (useTopics) return useTopics

	const subjects = pipe(
		filter(propEq('type', 'Subject')),
		map(pipe(
			props(['topic', 'subject']),
			join(':')
		)),
		e => new Set(e)
	)(TopicsConfig())

	const async_subjects = pipe(
		filter(propEq('type', 'AsyncSubject')),
		map(pipe(
			props(['topic', 'subject']),
			join(':')
		)),
		e => new Set(e)
	)(TopicsConfig())

	const behavior_subjects = pipe(
		filter(propEq('type', 'BehaviorSubject')),
		map(pipe(
			props(['topic', 'subject']),
			join(':')
		)),
		e => new Set(e)
	)(TopicsConfig())

	const replay_subjects = pipe(
		filter(propEq('type', 'ReplaySubject')),
		map(pipe(
			props(['topic', 'subject']),
			join(':')
		)),
		e => new Set(e)
	)(TopicsConfig())

	const topics = new Map()

	const Topic = curry((topic, subject) => {
		const id = join(':', [topic, subject])

		if (topics.has(id)) return topics.get(id)

		if (async_subjects.has(id)) {
			topics.set(id, new AsyncSubject())
			return topics.get(id)
		}

		if (behavior_subjects.has(id)) {
			topics.set(id, new BehaviorSubject(null)) //TODO: pass in initial value
			return topics.get(id)
		}

		if (replay_subjects.has(id)) {
			topics.set(id, new ReplaySubject(1)) //TODO: pass in replay number
			return topics.get(id)
		}

		if (subjects.has(id)) {
			topics.set(id, new Subject())
			return topics.get(id)
		}
	})

	const Message = curry((topic, subject, value) => {
		const id = join(':', [topic, subject])

		if (!topics.get(id)) {
			console.log(`Topic ${id} is not defined. Add to config file.`)
			return
		}

		topics.get(id).next(value)

		if (async_subjects.has(id) && !topics.get(id).isStopped) topics.get(id).complete()

		return [topic, subject, value]
	})

	const Signal = (topic, subject) => Message(topic, subject, null)

	useTopics = {
		Topic,
		Message,
		Signal
	}

	return useTopics
}

export default createTopics()
