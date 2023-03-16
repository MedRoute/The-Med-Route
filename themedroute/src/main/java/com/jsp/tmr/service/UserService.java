package com.jsp.tmr.service;

import java.util.List;


import com.jsp.tmr.entities.UserEntity;

public interface UserService {
	
	
	
    Object postCheck(UserEntity userentity ); //Save
	
	List<UserEntity> getData();				//Get
	
	UserEntity updateUser(UserEntity cm, Integer userId); //update
	
	 void deleteUser(Integer userId);  	 //delete
	
	 public Object login(String UsernameorEmail, String password); // login
    
	
		public String findByemail(String email); //check mail
		
		public String changePwdService(String email, String password,String confirm);
		
		String emailVerifyWithEmail(String email);
	
}
