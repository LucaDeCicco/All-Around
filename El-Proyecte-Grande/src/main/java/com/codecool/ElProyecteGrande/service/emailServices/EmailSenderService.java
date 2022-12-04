package com.codecool.ElProyecteGrande.service.emailServices;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.naming.Context;

@Service
public class EmailSenderService {
//    @Autowired
    private final JavaMailSender mailSender;

    public EmailSenderService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEmail(String toEmail,
                          String subject,
                          String body) throws MessagingException {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom("luca.decicco3500@gmail.com");
//        message.setTo(toEmail);
//        message.setText(body);
//        message.setSubject(subject);

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String htmlMsg = "<h3>Hello World!</h3><button><a href=\"https://www.google.com/maps\">Click here!</a></button>";
//mimeMessage.setContent(htmlMsg, "text/html"); /** Use this or below line **/
        helper.setText(htmlMsg, true); // Use this or above line.
        helper.setTo(toEmail);
        helper.setSubject(subject);
        helper.setFrom("luca.decicco3500@gmail.com");
        mailSender.send(mimeMessage);

//        mailSender.send(message);

        System.out.println("Mail sent successfully...");
    }

    public void sendRegisterEmail(String toEmail,String name,
                          String subject) throws MessagingException {


        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        String htmlMsg = "<h1>Hello, "+name+"</h1><h3>You have successfully created your account !</h3><button><a href=\"http://localhost:3000/\">Click here!</a></button>";
        helper.setText(htmlMsg, true); // Use this or above line.
        helper.setTo(toEmail);
        helper.setSubject(subject);
        helper.setFrom("luca.decicco3500@gmail.com");
        mailSender.send(mimeMessage);
        System.out.println("Mail sent successfully...");
    }


    public void sendEmailForgotPassword(String toEmail, String newPassword) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
//        String htmlMsg = "<h1>Hello,</h1><a href=\"http://localhost:3000/changeForgotPassword\"><h3>click here</h3></a> <h2>to change your password.</h2>";
        String htmlMsg = "<h1>Hello,</h1><h5>Your new PASSWORD is : </h5>"+newPassword+" <a href=\"http://localhost:3000/changeForgotPassword\"><h3>click here</h3></a> <h2>to change your password.</h2>";
        helper.setText(htmlMsg, true);
        helper.setTo(toEmail);
        helper.setSubject("Forgot Password");
        helper.setFrom("luca.decicco3500@gmail.com");
        mailSender.send(mimeMessage);
        System.out.println("Mail sent successfully...");
    }

}
