package com.ai.platform.backend.repository;

import com.ai.platform.backend.model.AIHistory;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AIHistoryRepository
        extends JpaRepository<AIHistory, Long> {

}