import React from "react";
import { DivPagePublic } from "../components/common/style";
import SignUp from "../components/sign_up";
import Header from "../components/header";

const PageSignUp = () => {
	return (
		<DivPagePublic>
			<Header />
			<SignUp />
		</DivPagePublic>
	);
};

export default PageSignUp;
