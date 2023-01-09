package com.codecool.ElProyecteGrande;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import javax.mail.Session;
import java.util.Properties;

@SpringBootApplication
public class ElProyecteGrandeApplication {
//	@Value("${spring.mail.username}")
//	private String username;

    public static void main(String[] args) {
        SpringApplication.run(ElProyecteGrandeApplication.class, args);
    }

	@Bean
	public JavaMailSender getJavaMailSender() {




		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost("smtp.gmail.com");
		mailSender.setPort(587);

		mailSender.setUsername("luca.decicco3500@gmail.com");
		mailSender.setPassword("mdjwfxrpgtuzwcsy");

		Properties props = mailSender.getJavaMailProperties();
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.debug", "true");

		return mailSender;
	}

}
