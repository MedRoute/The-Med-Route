package com.jsp.tmr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.jsp.tmr.entities.UserEntity;
import com.jsp.tmr.service.UserService;
@CrossOrigin
@RestController
//@RequestMapping("/userentity")
public class UserController {
	private static final String email = null;

	@Autowired
	UserService cs;


	@PostMapping("/saveuser")
	ResponseEntity<Object> postdata(@RequestBody UserEntity entry){
		Object obj=cs.postCheck(entry);
		if(obj instanceof UserEntity) {
			return new ResponseEntity<Object>(obj,HttpStatus.CREATED);
		}

			return new ResponseEntity<Object>(obj,HttpStatus.BAD_REQUEST);
			
			 
	}

	
	@GetMapping("/get")
	public List<UserEntity> get(){
		return cs.getData();
	}
	

	@PutMapping("/update/{id}")
	public UserEntity update(@RequestBody UserEntity cm ,@PathVariable Integer id){
		
		return cs.updateUser(cm, id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delate(@PathVariable Integer id) {
		cs.deleteUser(id);
	}
	

	
	@GetMapping("/login")
	ResponseEntity<Object >login(@RequestHeader String usernameOremail,@RequestHeader String password){
		Object ob=cs.login(usernameOremail, password);
		if(ob instanceof UserEntity) {
			return  ResponseEntity.status(200).body(cs.login(usernameOremail, password));
		}
		return  ResponseEntity.status(400).body(cs.login(usernameOremail, password));
	}	
	
	
	

	@GetMapping("/checkemail")
	public ResponseEntity<String> checkEmail(@RequestHeader String email){
		String eid= cs.findByemail(email);
		if(eid=="Account doesn't exists") {
		     return ResponseEntity.status(200).body(eid);
		}
		return ResponseEntity.status(200).body(eid);
	}
	
	@PutMapping("/resetPwswd")
	public ResponseEntity<String> toChangepwd(@RequestHeader String email, @RequestHeader String password,@RequestHeader String confirm)
			 {
		
		String updated =cs.changePwdService(email, password,confirm);
		if (updated=="Password reset successful") {
			return ResponseEntity.status(200).body(updated);
		} 
		return  ResponseEntity.status(400).body(updated);
		}	
	
	@GetMapping("/verifyEmail")
	public String verify(@RequestHeader String email)
	{
		return cs.emailVerifyWithEmail(email);
	}
	
}
