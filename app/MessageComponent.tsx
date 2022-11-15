import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import TimeAgo from 'react-timeago'
import { Message } from '../typings'

type Props = {
	message: Message
}

function MessageComponent({ message }: Props) {
	const { data: session } = useSession()
	const isUser = session?.user?.email === message.email

	return (
		<div className={`flex w-fit ${isUser && 'ml-auto'}`}>
			<div className={`lex-shrink-0 ${isUser && 'order-2'}`}>
				<Image
					src={message.profilePic}
					alt="Profile Picture"
					className="rounded-full mx-2"
					height={10}
					width={50}
				/>
			</div>
			<div>
				<p
					className={`text-xs pb-2 text-gray-500 ${
						isUser ? 'text-blue-400 text-right' : 'text-red-400 text-left'
					}`}
				>
					{message.username}
				</p>
				<div className="flex items-end">
					<div
						className={`px-3 py-2 rounded-lg w-fit text-white bg-red-400 ${
							isUser ? 'bg-blue-400 ml-auto order-2' : 'bg-red-400'
						}`}
					>
						<p>{message.message}</p>
					</div>
					<p
						className={`text-xs italic px-2 text-gray-300 ${
							isUser && 'text-right'
						}`}
					>
						<TimeAgo date={new Date(message.created_at)} />
					</p>
				</div>
			</div>
		</div>
	)
}

export default MessageComponent
