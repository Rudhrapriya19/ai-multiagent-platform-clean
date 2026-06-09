package com.ai.platform.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AIService {

    @Value("${groq.api.key}")
    private String apiKey;

    @Value("${groq.model}")
    private String model;

    private final WebClient webClient =
            WebClient.create("https://api.groq.com/openai/v1");

    public String chat(String message) {

        Map<String, Object> body = new HashMap<>();

        body.put("model", model);

        body.put(
                "messages",
                List.of(
                        Map.of(
                                "role", "user",
                                "content", message
                        )
                )
        );

        try {

            Map response = webClient.post()
                    .uri("/chat/completions")
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();

            List choices = (List) response.get("choices");

            Map choice = (Map) choices.get(0);

            Map messageMap = (Map) choice.get("message");

            return messageMap.get("content").toString();

        } catch (Exception e) {

            e.printStackTrace();

            return "AI Error: " + e.getMessage();
        }
    }

}