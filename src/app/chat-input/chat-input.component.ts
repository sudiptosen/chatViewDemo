import { Component, Input } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';

@Component({
    selector: 'chat-input',
    template: `
        <GridLayout columns="*, auto" padding="8" backgroundColor="white">
            <TextField #messageInput col="0" [(ngModel)]="messageText" hint="Type a message..." 
                      returnKeyType="send" (returnPress)="onSend()"></TextField>
            <Button col="1" text="Send" (tap)="onSend()"></Button>
        </GridLayout>
    `
})
export class ChatInputComponent {
    @Input() toMemberId: string;
    @Input() toFamilyId: string;
    @Input() toAccountId: string;
    @Input() fromMemberId: string;

    messageText: string = '';

    constructor(private chatComponent: ChatComponent) {}

    onSend() {
        if (this.messageText.trim()) {
            this.chatComponent.addMessage(this.messageText);
            this.messageText = '';
        }
    }
}
