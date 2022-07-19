package com.local.MarketPlaceAPI.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.local.MarketPlaceAPI.entities.UserData;
import com.local.MarketPlaceAPI.services.UserService;


@RestController
@RequestMapping("/marketplaceapi/v1")
@CrossOrigin(origins="http://localhost:4200")
public class UserManagementController {
	
	@Autowired
	UserService userservice;
	
	@GetMapping("/users/{userid}")
	public  List<UserData> authenticateUsers(@PathVariable String userid ){
		
		List<UserData> users= userservice.findUserbyId(userid);
	    return users;
		
	}
	@PostMapping("/users")
	public UserData addinguser(@RequestBody UserData record ) {
		return userservice.saveuserdata(record);
	}

}
