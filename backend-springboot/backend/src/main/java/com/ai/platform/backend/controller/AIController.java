package com.ai.platform.backend.controller;

import com.ai.platform.backend.service.AIService;

import java.util.List;
import com.ai.platform.backend.model.ChatHistory;
import com.ai.platform.backend.repository.ChatHistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")

@CrossOrigin(origins = "*")

public class AIController {

    @Autowired
    private AIService aiService;

    @Autowired
    private ChatHistoryRepository chatHistoryRepository;

    @PostMapping("/chat")
    public String chat(
            @RequestParam String message,
            @RequestParam String email
    )
    {

        String aiResponse =
                aiService.chat(message);

        ChatHistory history =
                new ChatHistory();

        history.setPrompt(message);

        history.setResponse(aiResponse);

        history.setUserEmail(email);

        chatHistoryRepository.save(history);

        return aiResponse;
    }

    @PostMapping("/resume")
    public String resume(
            @RequestParam String prompt,
            @RequestParam String email
    )
    {

        String aiResponse =
                aiService.chat(
                        """
                        Create a professional ATS-friendly resume.
    
                        Follow this exact structure:
    
                        FULL NAME
    
                        EMAIL
                        PHONE
                        LINKEDIN
    
                        PROFESSIONAL SUMMARY
    
                        EDUCATION
    
                        TECHNICAL SKILLS
    
                        PROJECTS
    
                        CERTIFICATIONS
    
                        ACHIEVEMENTS
    
                        DECLARATION
    
                        Candidate Details:
                        """ + prompt
                );

        ChatHistory history = new ChatHistory();

        history.setPrompt("Resume: " + prompt);

        history.setResponse(aiResponse);

        history.setUserEmail(email);

        chatHistoryRepository.save(history);

        return aiResponse;
    }

    @PostMapping("/email")
    public String email(
            @RequestParam String prompt,
            @RequestParam String email
    )
    {

        String aiResponse =
                aiService.chat(
                        "Write a professional email:\n" + prompt
                );

        ChatHistory history =
                new ChatHistory();

        history.setPrompt("Email: " + prompt);

        history.setResponse(aiResponse);

        history.setUserEmail(email);

        chatHistoryRepository.save(history);

        return aiResponse;
    }


@GetMapping("/history/{email}")
public List<ChatHistory> getHistory(
        @PathVariable String email
) {

    return chatHistoryRepository
            .findByUserEmail(email);
}
}