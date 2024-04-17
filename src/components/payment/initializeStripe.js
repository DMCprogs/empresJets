import { Stripe, loadStripe } from "@stripe/stripe-js";

const initializeStripe = async () => {
	let stripePromise = await loadStripe("pk_test_51MQtDjHBHFzDVIPpgDEIu22mO1kNOxBlQbrKAPXu7pZjqlPa7hJKHCpum6WuS49KsJcSiB4UeybWzfPO1EcXXWR9000QmDVFdx");
	return stripePromise;
};

export default initializeStripe;
