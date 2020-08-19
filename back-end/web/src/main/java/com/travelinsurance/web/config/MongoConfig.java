package com.travelinsurance.web.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;

@Configuration
public class MongoConfig {
    private final String USERNAME = "aim";
    private final String PASSWORD = "qwertyasdf";
    private final String CLUSTER_NAME = "cluster0";
    private final String DB_NAME = "status-200";

    public @Bean MongoClient mongoClient() {
        String uri =
                String.join(
                        "",
                        "mongodb+srv://",
                        USERNAME,
                        ":",
                        PASSWORD,
                        "@",
                        CLUSTER_NAME,
                        ".iocsi.mongodb.net/",
                        DB_NAME,
                        "?retryWrites=true&w=majority");
        return MongoClients.create(uri);
    }

    public @Bean MongoTemplate mongoTemplate() {
        return new MongoTemplate(mongoClient(), DB_NAME);
    }
}
