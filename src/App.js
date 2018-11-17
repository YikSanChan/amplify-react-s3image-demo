import React from "react";
import { withAuthenticator } from "aws-amplify-react";
import MyForm from "./MyForm";

const App = () => <MyForm />;

export default withAuthenticator(App, true);
