import { unstable_getServerSession } from 'next-auth'
import { Providers } from '../providers'
import { Message } from '../typings'
import ChatInput from './ChatInput'
import MessageList from './MessageList'

async function Homepage() {
	const data = await fetch(
		`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`
	).then((res) => res.json())

	const messages: Message[] = data.messages
	const session = await unstable_getServerSession()

	return (
		<Providers session={session}>
			<main>
				{/* Message List */}
				<MessageList initialMessages={messages} />
				{/* Chat Input */}
				<ChatInput session={session} />
			</main>
		</Providers>
	)
}

export default Homepage
