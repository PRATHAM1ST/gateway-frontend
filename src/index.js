import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewTeams from "./components/NewTeams";
import OnboardTeamMember from "./components/OnboardTeamMember";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
	},
  {
    path: "/new-teams",
    element: <NewTeams />,
  },
  {
    path: "/onboard-team-member",
    element: <OnboardTeamMember />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);