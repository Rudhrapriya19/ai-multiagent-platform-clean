package com.ai.platform.backend.service;

import com.ai.platform.backend.entity.User;
import com.ai.platform.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

}