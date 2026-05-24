package com.ai.platform.backend.controller;

import com.ai.platform.backend.entity.User;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public String test() {
        return "User Controller Working";
    }
}