// @ts-nocheck
import admin from 'firebase-admin'
import 'firebase-functions'
import AddUser from './triggers/AddUser'
import AddProfile from './triggers/AddProfile'
import CleanupUser from './triggers/CleanupUser'
import RunAuction from './triggers/RunAuction'
import AddBidUser from './triggers/AddBidUser'
import AddBidAdmin from './triggers/AddBidAdmin'
import CoinbaseWebhook from './triggers/CoinbaseWebhook'
import AddCheckoutUser from './triggers/AddCheckoutUser'
import AddCheckoutAdmin from './triggers/AddCheckoutAdmin'
import AddCoinbaseCharge from './triggers/AddCoinbaseCharge'
import AddTripRequest from './triggers/AddTripRequest'
import AddProducts from './triggers/AddProducts'
import Headers from './triggers/Headers'
import StripeCreateCheckout from './triggers/StripeCreateCheckout'
admin.initializeApp()

export {
	AddUser,
	AddProfile,
	CleanupUser,
	AddBidUser,
	AddBidAdmin,
	RunAuction,
	CoinbaseWebhook,
	AddCheckoutUser,
	AddCheckoutAdmin,
	AddCoinbaseCharge,
	AddTripRequest,
	AddProducts,
	Headers,
	StripeCreateCheckout
}
