package com.codecool.ElProyecteGrande.controller;


import com.codecool.ElProyecteGrande.model.products.Product;
import com.codecool.ElProyecteGrande.model.User;
import com.codecool.ElProyecteGrande.payload.ProductRequest;
import com.codecool.ElProyecteGrande.payload.UserRequest;
import com.codecool.ElProyecteGrande.repository.UsersDao;
import com.codecool.ElProyecteGrande.repository.UsersDaoMem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    UsersDao usersDao;

    public UserController() {
    }

    @Autowired
    public UserController(UsersDao usersDao) {
        this.usersDao = usersDao;
    }

//    @GetMapping("/history/{userId}")
//    public String getUserHistory(@PathVariable(name="userId") int id){
//        return "History of user with id = "+id;
//    }
//
//    @PostMapping("/addToHistory/{userId}")
//    public String addToHistory(@RequestBody ProductRequest product, @PathVariable(name = "userId") int id){
//        return product.getName()+" "+product.getPrice()+" "+"Added to userHistory with userId = "+ id;
//    }

    @PostMapping("/add")
    public String addUser(@RequestBody UserRequest user){
        User newUser = new User(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail());
        usersDao.add(newUser);
        return "user added successfully";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return usersDao.getAll();
    }
//
//    @PostMapping("/addToUserHistory")
//    public String addToUserHistory(@RequestBody ProductRequest product){
//        Product newProduct = new Product(product.getId(), product.getName(), product.getDescription(), product.getPrice());
//        long userId = product.getUserId();
//        List<User> userList = UsersDaoMem.getInstance().getAll();
//        for (User user : userList) {
//            if (user.getId()==userId){
//                user.addToHistory(newProduct);
//            }
//        }
//        return "product added to user history successfully";
//    }

//    @GetMapping("/getHistory")
//    public List<Product> getHistoryOfUser(@RequestBody UserRequest userRequest){
//        System.out.println("get UserHistory");
//        System.out.println(userRequest.getId());
//        for (User user : UsersDaoMem.getInstance().getAll()) {
//            if (user.getId()== userRequest.getId()){
//                return user.getHistory();
//            }
//        }
//
//        return null;
//    }


}
