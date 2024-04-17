import React from "react";
import { DivPageNotifications } from "../components/common/style";
import Footer from "../components/footer";
import Header from "../components/header";
import Notifications from "../components/notifications";

const PageNotifications = () => {
	return (
		<DivPageNotifications>
			<Header />
			<Notifications />
			<Footer />
		</DivPageNotifications>
	);
};

export default PageNotifications;
