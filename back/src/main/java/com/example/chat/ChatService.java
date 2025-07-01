package com.example.chat;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class ChatService {
    
    private final List<ChatMessage> messages = new CopyOnWriteArrayList<>();

    public List<ChatMessage> getAllMessages() {
        return new ArrayList<>(messages);
    }

    public ChatMessage addMessage(ChatMessage message) {
        messages.add(message);
        return message;
    }

    public void clearMessages() {
        messages.clear();
    }
}
