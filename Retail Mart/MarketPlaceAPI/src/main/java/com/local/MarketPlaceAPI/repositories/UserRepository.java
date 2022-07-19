package com.local.MarketPlaceAPI.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.local.MarketPlaceAPI.entities.UserData;



@Repository
public interface UserRepository extends JpaRepository<UserData,String> {
	
	public  List<UserData> findByidusers(String idusers);
	
	

}
