export interface Message {
    message: string;
    isFromMe: boolean;
    timestamp: Date;
}

export class MessageGenerator {
    private static readonly multiLineMessages = [
        'This is a\nmulti-line\nmessage',
        'Another test\nwith two lines',
        'Here are\nthree lines\nof text',
        'Just\ntwo lines',
        'One more\nmulti-line\nmessage here'
    ];

    static generateTestMessages(count: number): Message[] {
        const messages: Message[] = [];
        const now = Date.now();
        const timeInterval = 300000; // 5 minutes in milliseconds

        for (let i = 1; i <= count; i++) {
            const shouldBeMultiLine = Math.random() < 0.3; // 30% chance of being multi-line
            const messageText = shouldBeMultiLine 
                ? `Test ${i}.0\n${this.multiLineMessages[Math.floor(Math.random() * this.multiLineMessages.length)]}`
                : `Test ${i}.0`;

            messages.push({
                message: messageText,
                isFromMe: i % 2 === 1, // Odd numbers are from me
                timestamp: new Date(now - (count - i + 1) * timeInterval)
            });
        }

        return messages;
    }
}
