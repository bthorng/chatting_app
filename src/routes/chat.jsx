import './chat.css'
import { ChatInput } from "../components/chatinput"
import { ChatMessage } from "../components/chatmessage"
import { v4 as uuid } from 'uuid'
import { useState } from 'react';

export default function Chat() {
	const [messages, setMessages] = useState([])

	const addMessage = function(e) {
		if (e.key === "Enter") {
			var newMsg = { "id": uuid(), "profilePicture": "https://i.pinimg.com/originals/46/d7/28/46d728a7174bda1bcbbdbc8023629c77.jpg", "username": "Example Username", "timestamp": "Today at 12:08 AM", "message": e.target.value }
			setMessages(oldState => [...oldState, newMsg])
			e.target.value = ""
		}
	}
	
	return (
		<main>
			<div id="message-history">
			{
				messages.map(message => (
					<ChatMessage messageObject={message} key={message.id}/>
				))
			}
			</div>
			<div id="chat-inputs">
				<ChatInput onKeyDown={addMessage} />
			</div>
		</main>
	);
}
