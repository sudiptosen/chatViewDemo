export interface Message {
    message: string;
    isFromMe: boolean;
    timestamp: Date;
}

export class MessageGenerator {
    static generateTestMessages(count: number): Message[] {
        const messages: Message[] = [];
        const now = Date.now();
        const timeInterval = 300000; // 5 minutes in milliseconds

        for (let i = 1; i <= count; i++) {
            messages.push({
                message: `Test ${i}.0`,
                isFromMe: i % 2 === 1, // Odd numbers are from me
                timestamp: new Date(now - (count - i + 1) * timeInterval)
            });
        }

        return messages;
    }
}
