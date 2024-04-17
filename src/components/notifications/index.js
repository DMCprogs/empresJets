import React, { useEffect, useState,useContext } from "react";
import {from, switchMap, tap} from 'rxjs'
import Logger from '../../plugins/Logger$'
import useTopics from '../../plugins/useTopics'
import NotificationItem from "./components/NotificationItem";
import { DivBoxNotiSC } from "./styles";
import moment from "moment";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
	collection,
	query,
	getDocs,
	getFirestore,
	orderBy,
	setDoc,
	doc, addDoc, serverTimestamp,
	updateDoc,


} from 'firebase/firestore'
import GlobalDispatchContext from '../../global_dispatch_context';
// import admin from 'firebase-admin'

const Notification = () => {
	const {
		state, dispatch
	} = useContext(GlobalDispatchContext)
	const [notifications, setNotifications] = useState([]);
	const [isNew, setIsNew] = useState(false);
	const auth = getAuth();
	const { Topic, Message } = useTopics;
	const db = getFirestore();

	const getNotifications = async (user) => {
		try {
			let _dataNotifications = [];
			const _notificationsDocs = query(
				collection(getFirestore(), `users/${user.uid}/notifications`),
				orderBy("timestamp")
			);

			const _notifications = await getDocs(_notificationsDocs);
			let temp = false
			if (_notifications) {


				_notifications.forEach((_notif) => {

					let {
						message,
						timestamp,
						subject,
						topic,
						title,
						uid,
						meta,
						type
					} = _notif.data();

					let auction_id = '/'
					if (meta && meta.auction_id) {
						auction_id = meta.auction_id
					}

					console.log('ewwasdf', type)
					if (type === 'new') {
						temp = true
					}

					// console.log("data-not", _notif.data());

					const meta_data = {
						to:
							subject
							? subject === "won"
								? `/notifications/won/${auction_id}`
								: `/notifications/lost/${auction_id}`
							: "/",
						button: subject,
						timestamp,
						subject,
						topic,
					};

					_dataNotifications.unshift(
						<NotificationItem
							subject={subject}
							title={title}
							message={message}
							meta={meta_data}
							key={uid}
							time={moment(timestamp.toDate()).calendar()}
						/>
					);
					// console.log("data-not",_dataNotifications);
				});
				if (temp) {
					saveNoti(_notifications, user)
				}

				dispatch({
					type: 'SET_IS_NEW_NOTIFICATION',
					status: false
				})

				setNotifications(_dataNotifications);
			}
		} catch (error) {
			console.log("Error: ", error.message);
		}
	};

	const saveNoti = async (list, user) => {
		const docRef = collection(db, `users/${user.uid}/notifications`);
		const q = query(docRef);
		const querySnap = await getDocs(q);
		// console.log('ewwasdf33')
		try {
			querySnap.forEach((d) => {
				updateDoc(d.ref, {
					type: 'old'
				})
			});

			onAuthStateChanged(auth, (user) => {
				if (user) {
					getNotifications(user);
					setIsNew(false)
				} else {
				}
			});

		} catch (e) {
			console.log('><>>>><>', e)
		}


	}



	useEffect(() => {

		onAuthStateChanged(auth, (user) => {
			if (user) {
				getNotifications(user);
			} else {
			}
		});

	}, []);
	return <DivBoxNotiSC>{notifications}</DivBoxNotiSC>;
};

export default Notification;
