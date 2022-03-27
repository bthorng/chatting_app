import './chat.css'
import { Stack } from "@mui/material";
import ChatInput from "../components/chatinput"
import { ChatMessage } from "../components/chatmessage"

export default function Chat() {
	return (
		<main>
			<div id="message-history">
				<ChatMessage messageObject={ { "profilePicture": "https://i.pinimg.com/originals/46/d7/28/46d728a7174bda1bcbbdbc8023629c77.jpg", "username": "Example Username", "timestamp": "Today at 12:08 AM", "message": "Yooooo example message lmaooo" } } />
			</div>
			<div id="chat-inputs">
				<ChatInput />
			</div>
		</main>
	);
}
