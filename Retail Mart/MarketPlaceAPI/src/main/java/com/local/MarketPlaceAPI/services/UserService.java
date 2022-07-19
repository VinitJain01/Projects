package com.local.MarketPlaceAPI.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.local.MarketPlaceAPI.entities.UserData;
import com.local.MarketPlaceAPI.repositories.UserRepository;




@Service
public class UserService {
	
	@Autowired
	private UserRepository userrepo;
	
	public List<UserData> findUserbyId(String userid){
		List<UserData> users = new ArrayList<>();
		
		List<UserData> userdata = userrepo.findByidusers(userid);
		
		for(UserData usersdata : userdata) {
			UserData user = new UserData();
			user.setIdusers(usersdata.getIdusers());
			user.setPassword(usersdata.getPassword());
			user.setFname(usersdata.getFname());
			user.setLname(usersdata.getLname());
			
			users.add(user);
		}
		
		return users;
		
	}
	
	public UserData saveuserdata(UserData userdata ) {
		
		UserData newuser = new UserData();
		newuser.setIdusers(userdata.getIdusers());
		newuser.setFname(userdata.getFname());
		newuser.setLname(userdata.getLname());
	
		newuser.setPassword(userdata.getPassword());
		return userrepo.save(newuser);
		
	}

}
