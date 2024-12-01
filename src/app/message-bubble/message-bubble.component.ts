import { Component, Input } from '@angular/core';

interface Message {
    id: string;
    message: string;
    fromMemberId: string;
    avatarLetter: string;
    timestamp: Date;
}

@Component({
    selector: 'message-bubble',
    templateUrl: './message-bubble.component.html',
    styleUrls: ['./message-bubble.component.css']
})
export class MessageBubbleComponent {
    @Input() message: Message;
    @Input() currentMemberId: string;

    timePassed(timestamp: Date): string {
        const now = new Date();
        const diff = now.getTime() - timestamp.getTime();
        const minutes = Math.floor(diff / 60000);
        
        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes}m ago`;
        
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        
        return timestamp.toLocaleDateString();
    }
}
