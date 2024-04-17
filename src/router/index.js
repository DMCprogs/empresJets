import {
	useRoutes
} from 'react-router-dom'
import AddCard from '../components/card'
import Lost from '../components/notifications/lost'
import Win from '../components/notifications/win'
import PageActionHandler from '../pages/PageActionHandler'
import PageAddCard from '../pages/PageAddCard'
import PageAddProfile from '../pages/PageAddProfile'
import PageAuction from '../pages/PageAuction'
import PageChangeEmail from '../pages/PageChangeEmail'
import PageChangePassword from '../pages/PageChangePassword'
import PageCheckoutConfirmation from '../pages/PageCheckoutConfirmation'
import PageHome from '../pages/PageHome'
import PageIndex from '../pages/PageIndex'
import PageLiveAgent from '../pages/PageLiveAgent'
import PageMenu from '../pages/PageMenu'
import PageNotifications from '../pages/PageNotifications'
import PagePayments from '../pages/PagePayments'
import PageProfile from '../pages/PageProfile'
import PageResetPassword from '../pages/PageResetPassword'
import PageSignIn from '../pages/PageSignIn'
import PageSignUp from '../pages/PageSignUp'
import PageSMSMFA from '../pages/PageSMSMFA'
import PageTrip from '../pages/PageTrip'
import PageVerifyEmail from '../pages/PageVerifyEmail'
import ConfirmATrip from '../components/request_trip/components/ConfirmATrip'
import PagePlaneInfo from '../pages/PagePlaneInfo'
import PageTourInfo from '../pages/PageTourInfo'
import TripConfirm from '../pages/TripConfirm'
import PageNotCompletedPayment from '../pages/PageNotCompletedPayment'
import PageSuccessfullyPayment from '../pages/PageSuccessfullyPayment'
import PageVerifPleaseEmail from '../pages/PageVerifPleaseEmail'

const Router = () => useRoutes([
	{
		path: '/',
		element: <PageIndex/>
	},
	{
		path: '/sign-in',
		element: <PageSignIn/>
	},
	{
		path: '/verif-please',
		element: <PageVerifPleaseEmail/>
	},
	{
		path: '/sign-up',
		element: <PageSignUp/>
	},
	{
		path: '/verify-email',
		element: <PageVerifyEmail/>
	},
	{
		path: '/verified-email',
		element: <PageActionHandler/>
	},
	{
		path: '/sms-mfa',
		element: <PageSMSMFA/>
	},
	{
		path: '/add-profile',
		element: <PageAddProfile/>
	},
	{
		path: '/add-card',
		element: <PageAddCard/>
	},
	{
		path: '/menu',
		element: <PageMenu/>
	},
	{
		path: '/plane-info/:auction_id',
		element: <PagePlaneInfo/>
	},
	{
		path: '/tour-info/:flight_id',
		element: <PageTourInfo/>
	},
	{
		path: '/home',
		element: <PageHome/>
	},
	{
		path: '/profile',
		element: <PageProfile/>
	},
	{
		path: '/notifications',
		element: <PageNotifications/>
	},
	{
		path: '/live-agent',
		element: <PageLiveAgent/>
	},
	{
		path: '/payments/:auction_id',
		element: <PagePayments/>
	},
	{
		path: '/trip-request',
		element: <PageTrip/>
	},
	{
		path: '/auctions/:auction_id/bid',
		element: <PageAuction/>
	},
	{
		path: '/payment-confirmation/:confirmation_id',
		element: <PageCheckoutConfirmation/>
	},
	{
		path: '/reset-password',
		element: <PageResetPassword />
	},
	{
		path: '/change-password',
		element: <PageChangePassword/>
	},
	{
		path: '/change-email',
		element: <PageChangeEmail/>
	},
	{
		path: '/notifications/won/:auction_id',
		element: <Win/>
	},
	{
		path: '/notifications/lost/:auction_id',
		element: <Lost/>
	},
	{
		path: '/confirm-trip',
		element: <TripConfirm/>
	},
	{
		path: '/successfully-payment',
		element: <PageSuccessfullyPayment/>
	},
	{
		path: '/not-completed-payment',
		element: <PageNotCompletedPayment/>
	},

])

export default Router
