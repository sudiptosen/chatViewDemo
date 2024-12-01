import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChatComponent } from './chat/chat.component'
import { MessageBubbleComponent } from './message-bubble/message-bubble.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule, 
    NativeScriptFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    ChatComponent,
    MessageBubbleComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
