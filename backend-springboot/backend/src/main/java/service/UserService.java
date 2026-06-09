package com.ai.platform.backend.service;

import com.ai.platform.backend.entity.User;
import com.ai.platform.backend.repository.UserRepository;
import com.ai.platform.backend.security.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public User register(User user) {

        user.setPassword(
                passwordEncoder.encode(
                        user.getPassword()
                )
        );

        return userRepository.save(user);
    }

    public String login(
            String email,
            String password
    ) {

        User user =
                userRepository.findByEmail(email).orElse(null);

        if(user == null) {

            return "User not found";
        }

        boolean matches =
                passwordEncoder.matches(
                        password,
                        user.getPassword()
                );

        if(matches) {

            return jwtUtil.generateToken(email);
        }

        return "Invalid credentials";
    }
}