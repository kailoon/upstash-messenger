import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
	appId: process.env.PUSHER_APPID!,
	key: process.env.PUSHER_KEY!,
	secret: process.env.PUSHER_SECRET!,
	cluster: 'ap1',
	useTLS: true
})

export const clientPusher = new ClientPusher('5d146a66f667bb155ba5', {
	cluster: 'ap1'
})
