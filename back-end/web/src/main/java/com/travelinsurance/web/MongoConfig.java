package com.travelinsurance.web;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class MongoConfig {
    public @Bean MongoClient mongoClient() {
        return MongoClients.create(
                "mongodb+srv://aim:qwertyasdf@cluster0.iocsi.mongodb.net/status-200?retryWrites=true&w=majority");
    }

    public @Bean MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoClient(), "status-200");
    }
}
