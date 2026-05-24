package com.ai.platform.backend.service;

import com.ai.platform.backend.model.AIHistory;
import com.ai.platform.backend.repository.AIHistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AIService {

    @Value("${groq.api.key}")
    private String groqApiKey;

    @Autowired
    private AIHistoryRepository historyRepository;

    private final WebClient webClient;

    // CONSTRUCTOR

    public AIService() {

        this.webClient = WebClient.builder()

                .baseUrl("https://api.groq.com/openai/v1")

                .defaultHeader(
                        HttpHeaders.CONTENT_TYPE,
                        MediaType.APPLICATION_JSON_VALUE
                )

                .build();
    }

    // =========================
    // CHAT
    // =========================

    public String generateChat(String message) {

        return callAI(message);
    }

    // =========================
    // RESUME
    // =========================

    public String generateResume(String details) {

        String prompt = """
                Create a professional ATS-friendly resume using:

                """ + details;

        return callAI(prompt);
    }

    // =========================
    // EMAIL
    // =========================

    public String generateEmail(String prompt) {

        String emailPrompt = """
                Write a professional email for:

                """ + prompt;

        return callAI(emailPrompt);
    }

    // =========================
    // MAIN AI METHOD
    // =========================

    private String callAI(String prompt) {

        try {

            // REQUEST BODY

            Map<String, Object> requestBody = new HashMap<>();

            requestBody.put(
                    "model",
                    "llama-3.1-8b-instant"
            );

            requestBody.put(
                    "messages",
                    List.of(
                            Map.of(
                                    "role",
                                    "user",
                                    "content",
                                    prompt
                            )
                    )
            );

            // API CALL

            Map response = webClient.post()

                    .uri("/chat/completions")

                    .header(
                            HttpHeaders.AUTHORIZATION,
                            "Bearer " + groqApiKey
                    )

                    .bodyValue(requestBody)

                    .retrieve()

                    .bodyToMono(Map.class)

                    .block();

            // DEBUG RESPONSE

            System.out.println(response);

            // EXTRACT RESPONSE

            List choices =
                    (List) response.get("choices");

            Map choice =
                    (Map) choices.get(0);

            Map message =
                    (Map) choice.get("message");

            String aiResponse =
                    message.get("content").toString();

            // SAVE HISTORY

            saveHistory(prompt, aiResponse);

            return aiResponse;

        } catch (Exception e) {

            e.printStackTrace();

            return "AI Error: " + e.getMessage();
        }
    }

    // =========================
    // SAVE HISTORY
    // =========================

    private void saveHistory(
            String prompt,
            String response
    ) {

        AIHistory history = new AIHistory();

        history.setPrompt(prompt);

        history.setResponse(response);

        history.setCreatedAt(LocalDateTime.now());

        historyRepository.save(history);
    }

    // =========================
    // GET HISTORY
    // =========================

    public List<AIHistory> getHistory() {

        return historyRepository.findAll();
    }
}