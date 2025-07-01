import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  username = '';
  messageContent = '';
  messages: ChatMessage[] = [];
  connected = false;
  showUsernameForm = true;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.messages$.subscribe(messages => {
      this.messages = messages;
    });

    this.chatService.connected$.subscribe(connected => {
      this.connected = connected;
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy() {
    this.chatService.disconnect();
  }

  async joinChat() {
    if (this.username?.trim()) {
      try {
        await this.chatService.connect(this.username.trim());
        this.showUsernameForm = false;
      } catch (error) {
        console.error('Failed to connect:', error);
      }
    }
  }

  sendMessage() {
    if (this.messageContent?.trim() && this.connected) {
      this.chatService.sendMessage(this.messageContent.trim(), this.username);
      this.messageContent = '';
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch(err) {}
  }

  getMessageClass(message: ChatMessage): string {
    if (message.type === 'JOIN') return 'join-message';
    if (message.type === 'LEAVE') return 'leave-message';
    return message.sender === this.username ? 'own-message' : 'other-message';
  }
}
