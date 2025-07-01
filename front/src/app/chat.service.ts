import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval } from 'rxjs';
import { Observable } from 'rxjs';

export interface ChatMessage {
  content: string;
  sender: string;
  type: 'CHAT' | 'JOIN' | 'LEAVE';
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly apiUrl = 'http://localhost:8080/api';
  private messageSubject = new BehaviorSubject<ChatMessage[]>([]);
  private connectedSubject = new BehaviorSubject<boolean>(false);
  private pollingInterval: any;
  
  public messages$ = this.messageSubject.asObservable();
  public connected$ = this.connectedSubject.asObservable();

  constructor(private http: HttpClient) {}

  connect(username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Join the chat
      this.joinChat(username).subscribe({
        next: () => {
          this.connectedSubject.next(true);
          this.startPolling();
          resolve();
        },
        error: (error) => {
          console.error('Failed to join chat:', error);
          this.connectedSubject.next(false);
          reject(error);
        }
      });
    });
  }

  private startPolling(): void {
    // Poll for new messages every 2 seconds
    this.pollingInterval = interval(2000).subscribe(() => {
      this.loadMessages();
    });
    
    // Load messages immediately
    this.loadMessages();
  }

  private loadMessages(): void {
    this.http.get<ChatMessage[]>(`${this.apiUrl}/messages`).subscribe({
      next: (messages) => {
        this.messageSubject.next(messages);
      },
      error: (error) => {
        console.error('Failed to load messages:', error);
      }
    });
  }

  sendMessage(messageContent: string, sender: string): void {
    const chatMessage: ChatMessage = {
      sender: sender,
      content: messageContent,
      type: 'CHAT'
    };

    this.http.post<ChatMessage>(`${this.apiUrl}/messages`, chatMessage).subscribe({
      next: () => {
        this.loadMessages(); // Refresh messages after sending
      },
      error: (error) => {
        console.error('Failed to send message:', error);
      }
    });
  }

  private joinChat(username: string): Observable<ChatMessage> {
    const chatMessage: ChatMessage = {
      sender: username,
      content: '',
      type: 'JOIN'
    };

    return this.http.post<ChatMessage>(`${this.apiUrl}/messages`, chatMessage);
  }

  disconnect(): void {
    if (this.pollingInterval) {
      this.pollingInterval.unsubscribe();
    }
    this.connectedSubject.next(false);
  }

  clearMessages(): void {
    this.messageSubject.next([]);
  }
}
