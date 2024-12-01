import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { GridLayout, ListView } from '@nativescript/core';
import { registerSoftKeyboardCallback } from "nativescript-soft-keyboard";
import * as helper from "@nativescript/core/utils/layout-helper";
import { Message, MessageGenerator } from '../models/message.model';

@Component({
    selector: 'chat-view',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})
export class ChatComponent implements AfterViewInit {
    @ViewChild('lvMain') lvMainElement: ElementRef;
    @ViewChild('gl') glElement: ElementRef;
    
    _isLoading: boolean = false;
    _filteredViewMessages: Message[] = [];
    messageText: string = '';

    constructor() {
        this._filteredViewMessages = MessageGenerator.generateTestMessages(15);
    }

    ngAfterViewInit() {
        registerSoftKeyboardCallback((height) => {
            const lv = <ListView>this.lvMainElement.nativeElement;       
            const gl = <GridLayout>this.glElement.nativeElement; 
            if(height > 0) {
                const glHeight = helper.layout.toDeviceIndependentPixels(gl.height as number);
                lv.height = glHeight - height;
            } 
            setTimeout(() => this.scrollToBottom(), 500);
        });
    }

    scrollToBottom() {
        const lv = <ListView>this.lvMainElement.nativeElement;
        if(lv) lv.scrollToIndex(this._filteredViewMessages.length - 1);
    }

    onSend() {
        console.log("Current messageText:", this.messageText);
        if (this.messageText.trim()) {
            this.addMessage(this.messageText);
            this.messageText = '';
        } else {
            console.log("Message is empty");
        }
    }

    addMessage(message: string) {
        const nextNumber = this._filteredViewMessages.length + 1;
        this._filteredViewMessages.push({
            message: `Test ${nextNumber}.0`,
            isFromMe: true,
            timestamp: new Date()
        });
        setTimeout(() => this.scrollToBottom(), 100);
    }
}
