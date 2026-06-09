package com.ai.platform.backend.repository;

import com.ai.platform.backend.model.ChatHistory;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatHistoryRepository
        extends JpaRepository<ChatHistory, Long> {

    List<ChatHistory> findByUserEmail(String userEmail);
}