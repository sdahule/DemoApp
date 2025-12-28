package com.example.login;

import com.example.login.entity.User;
import com.example.login.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseLoader {

    @Bean
    CommandLineRunner initDatabase(UserRepository repository) {
        return args -> {
            if (repository.findByUsername("swapnil").isEmpty()) {
                repository.save(new User("swapnil", "pass"));
                System.out.println("Seeded user: swapnil");
            }
        };
    }
}
