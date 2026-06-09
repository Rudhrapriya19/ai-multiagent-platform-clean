package com.ai.platform.backend.controller;

import com.ai.platform.backend.dto.LoginRequest;
import com.ai.platform.backend.entity.User;
import com.ai.platform.backend.security.JwtUtil;
import com.ai.platform.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;



@RestController
@RequestMapping("/auth")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowCredentials = "true"
)

public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // REGISTER

    @PostMapping("/register")
    public String register(@RequestBody User user) {

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        user.setRole("USER");

        userRepository.save(user);

        return "User Registered Successfully";
    }

    // LOGIN

    @PostMapping("/login")
    public Map<String, String> login(
            @RequestBody LoginRequest request
    ) {

        System.out.println("===== LOGIN REQUEST RECEIVED =====");
        System.out.println("EMAIL = " + request.getEmail());

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElse(null);

        System.out.println("LOGIN EMAIL = " + request.getEmail());

        if (user == null) {

            System.out.println("USER NOT FOUND");

            throw new RuntimeException("User not found");
        }

        System.out.println("USER FOUND = " + user.getEmail());

        System.out.println("DB PASSWORD = " + user.getPassword());

        boolean matches = passwordEncoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        System.out.println("PASSWORD MATCH = " + matches);

        if (!matches) {

            throw new RuntimeException("Invalid Password");
        }

        String token = jwtUtil.generateToken(
                user.getEmail()

        );

        Map<String, String> response = new HashMap<>();

        response.put("token", token);

        return response;
    }
}