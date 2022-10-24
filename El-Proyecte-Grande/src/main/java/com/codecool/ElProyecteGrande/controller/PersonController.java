package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.model.Person;
import com.codecool.ElProyecteGrande.payload.PersonRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class PersonController {

    public PersonController() {
    }



//    @GetMapping("/history/{userId}")
//    public String getPersonHistory(@PathVariable(name="userId") int id){
//        return "History of user with id = "+id;
//    }
//
//    @PostMapping("/addToHistory/{userId}")
//    public String addToHistory(@RequestBody ProductRequest product, @PathVariable(name = "userId") int id){
//        return product.getName()+" "+product.getPrice()+" "+"Added to userHistory with userId = "+ id;
//    }

    @PostMapping("/add")
    public String addPerson(@RequestBody PersonRequest user){
        return "user added successfully"; //TODO
    }

    @GetMapping("/getAll")
    public List<Person> getAllPersons(){
        return null;
    } //TODO
//
//    @PostMapping("/addToPersonHistory")
//    public String addToPersonHistory(@RequestBody ProductRequest product){
//        Product newProduct = new Product(product.getId(), product.getName(), product.getDescription(), product.getPrice());
//        long userId = product.getPersonId();
//        List<Person> userList = PersonsDaoMem.getInstance().getAll();
//        for (Person user : userList) {
//            if (user.getId()==userId){
//                user.addToHistory(newProduct);
//            }
//        }
//        return "product added to user history successfully";
//    }

//    @GetMapping("/getHistory")
//    public List<Product> getHistoryOfPerson(@RequestBody PersonRequest userRequest){
//        System.out.println("get PersonHistory");
//        System.out.println(userRequest.getId());
//        for (Person user : PersonsDaoMem.getInstance().getAll()) {
//            if (user.getId()== userRequest.getId()){
//                return user.getHistory();
//            }
//        }
//
//        return null;
//    }


}
