 package com.jsp.tmr.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.jsp.tmr.entities.UserEntity;

public interface UserRepositoty extends JpaRepository<UserEntity, Integer>{
	
	@Query(value="select * from user_entity  where username=?1 or email=?2",nativeQuery = true)
	 public UserEntity findByuserNameorEmail(String username,String email);
	

	@Query(value="select * from user_entity where email=?1 ",nativeQuery = true)
	public Object findByEmail(String email);
	
	@Query("SELECT u FROM UserEntity u WHERE u.username=:query OR u.email=:query")
	public  UserEntity findUser(String query);	
	
	UserEntity getByEmail(String email);

} 
