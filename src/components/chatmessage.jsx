import { Stack } from '@mui/material';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fontSize } from '@mui/system';

export class ChatMessage extends Component {
	static get propTypes() {
		return { 
			messageObject: PropTypes.object
		}; 
	}
	render() {
        const messageObject = this.props.messageObject;
        
		return(
			<Stack spacing={3}>
				<Stack direction="row" spacing={2.5}>
					<div
                        style={{
                            height: "48px", width: "48px", backgroundImage: "url('"+messageObject.profilePicture+"')", backgroundPosition: "center",
                            marginTop: "4px", borderRadius: "24px", backgroundSize: "cover", backgroundRepeat: "no-repeat"
                        }}
                    ></div>
					<Stack width={"96%"}>
						<div style={{ wordWrap: "break-word" }}>
							{messageObject.username}&nbsp;&nbsp;<span className="text-muted" style={{fontSize: "0.80em"}}>{messageObject.timestamp}</span>
						</div>
						<div style={{ wordWrap: "break-word" }}>
							{messageObject.message}
						</div>
					</Stack>
				</Stack>
			</Stack>
		)
	}
}