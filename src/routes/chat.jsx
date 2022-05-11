import './chat.css'
import { ChatInput } from "../components/chatinput"
import { ChatMessage } from "../components/chatmessage"
import { v4 as uuid } from 'uuid'
import { useState } from 'react';

export default function Chat() {
	const [messages, setMessages] = useState([])
	const currentDate = new Date()
	const addMessage = function(e) {
		if (e.key === "Enter") {
			const messageDate = new Date();
			var timeMessage = "";
			const tempDate = new Date(currentDate.getTime() - 1000*60*60*24);
			if (messageDate.getDate() === tempDate.getDate() && messageDate.getMonth() === tempDate.getMonth() && messageDate.getFullYear() === tempDate.getFullYear()) {
				timeMessage = "Yesterday at " + messageDate.toLocaleTimeString();
			} 
			else if (messageDate.getDate() === currentDate.getDate() && messageDate.getMonth() === currentDate.getMonth() && messageDate.getFullYear() === currentDate.getFullYear()) {
				timeMessage = "Today at " + messageDate.toLocaleTimeString();
			}	
			else {
				timeMessage = messageDate.toLocaleDateString();
			} 
			var newMsg = { "id": uuid(), "profilePicture": "https://i.pinimg.com/originals/46/d7/28/46d728a7174bda1bcbbdbc8023629c77.jpg", "username": "Example Username", "timestamp": timeMessage, "message": e.target.value }
			setMessages(oldState => [...oldState, newMsg]);
			e.target.value = "";	
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
