package com.ai.platform.backend.controller;

import com.ai.platform.backend.model.AIHistory;
import com.ai.platform.backend.service.AIService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ai")
@CrossOrigin(origins = "*")
public class AiController {

    @Autowired
    private AIService aiService;

    // CHAT

    @PostMapping("/chat")

    public String chat(
            @RequestParam String message
    ) {

        return aiService.generateChat(message);
    }

    // RESUME

    @PostMapping("/resume")

    public String resume(
            @RequestParam String details
    ) {

        return aiService.generateResume(details);
    }

    // EMAIL

    @PostMapping("/email")

    public String email(
            @RequestParam String prompt
    ) {

        return aiService.generateEmail(prompt);
    }

    // HISTORY

    @GetMapping("/history")

    public List<AIHistory> history() {

        return aiService.getHistory();
    }
}