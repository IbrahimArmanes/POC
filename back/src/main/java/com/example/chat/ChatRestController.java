package com.example.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatRestController {

    @Autowired
    private ChatService chatService;

    @GetMapping("/messages")
    public List<ChatMessage> getMessages() {
        return chatService.getAllMessages();
    }

    @PostMapping("/messages")
    public ChatMessage createMessage(@RequestBody ChatMessage message) {
        return chatService.addMessage(message);
    }
}
