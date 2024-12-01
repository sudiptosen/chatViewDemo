import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ListView } from '@nativescript/core';
import { registerSoftKeyboardCallback } from "nativescript-soft-keyboard";
import * as helper from "@nativescript/core/utils/layout-helper";

interface Message {
    message: string;
    isFromMe: boolean;
    timestamp: Date;
}

@Component({
    selector: 'chat-view',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css']
})
export class ChatComponent implements AfterViewInit {
    @ViewChild('lvMain') lvMainElement: ElementRef;
    
    _isLoading: boolean = false;
    _filteredViewMessages: Message[] = [];
    messageText: string = '';

    constructor() {
        // Initialize with test messages 1.0 to 10.0
        this._filteredViewMessages = [
            {
                message: 'Test 1.0',
                isFromMe: true,
                timestamp: new Date(Date.now() - 3600000)
            },
            {
                message: 'Test 2.0',
                isFromMe: false,
                timestamp: new Date(Date.now() - 3300000)
            },
            {
                message: 'Test 3.0',
                isFromMe: true,
                timestamp: new Date(Date.now() - 3000000)
            },
            {
                message: 'Test 4.0',
                isFromMe: false,
                timestamp: new Date(Date.now() - 2700000)
            },
            {
                message: 'Test 5.0',
                isFromMe: true,
                timestamp: new Date(Date.now() - 2400000)
            },
            {
                message: 'Test 6.0',
                isFromMe: false,
                timestamp: new Date(Date.now() - 2100000)
            },
            {
                message: 'Test 7.0',
                isFromMe: true,
                timestamp: new Date(Date.now() - 1800000)
            },
            {
                message: 'Test 8.0',
                isFromMe: false,
                timestamp: new Date(Date.now() - 1500000)
            },
            {
                message: 'Test 9.0',
                isFromMe: true,
                timestamp: new Date(Date.now() - 1200000)
            },
            {
                message: 'Test 10.0',
                isFromMe: false,
                timestamp: new Date(Date.now() - 900000)
            }
        ];
    }

    ngAfterViewInit() {
        registerSoftKeyboardCallback((height) => {
            const lv = <ListView>this.lvMainElement.nativeElement;        
            if(height > 0) {
                lv.height = helper.layout.toDeviceIndependentPixels(lv.height as number);
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
