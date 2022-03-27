import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Chat from "./routes/chat";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="" element={<Chat />} />
			</Route>

			{/* 404 Route */}
			<Route
				path="*"
				element={
					<main>
						<p>There&apos;s nothing here!</p>
					</main>
				}
			/>
		</Routes>
	</BrowserRouter>,
	rootElement
);
