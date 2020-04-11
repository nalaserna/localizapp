package com.localizapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan
(basePackages="com.localizapp")
@EntityScan(basePackages= {"entities"})
@EnableJpaRepositories("repositories")
public class LocalizappApplication {

	public static void main(String[] args) {
		SpringApplication.run(LocalizappApplication.class, args);
	}

}
