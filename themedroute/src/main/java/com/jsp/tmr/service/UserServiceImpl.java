package com.jsp.tmr.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.jsp.tmr.dao.UserRepositoty;
import com.jsp.tmr.entities.UserEntity;
import com.jsp.tmr.exceptions.AccountNotFoundException;
import com.jsp.tmr.exceptions.InvalidPasswordException;
import com.jsp.tmr.exceptions.ResourceNotFoundException;

@Service
public class UserServiceImpl implements UserService {
	private static final String email = null;
	@Autowired
	UserRepositoty uRepo;

	@Autowired
	private JavaMailSender send;
		
	
	private SimpleMailMessage mail = new SimpleMailMessage();

	
	
	
	@Override
	public Object postCheck(UserEntity userentity) {
		Object temp= uRepo.findByEmail(userentity.getEmail());
		 System.out.println(temp);
		 if(temp !=null) {
		 try {
			  
				throw new ResourceNotFoundException("Email"," Email Already Exist",userentity.getEmail());
				 
			 	 
		 }
		 catch(ResourceNotFoundException e) {
			 System.out.println(temp);
			return e.getMessage();	
			 }}
		 
		 return uRepo.save(userentity);
	}
		
	@Override
	public List<UserEntity> getData() {
		
		return uRepo.findAll();
	}
	
	@Override
	public UserEntity updateUser(UserEntity ue, Integer id) {
		
		uRepo.findById(id);
		return uRepo.save(ue);
		
	}

	@Override
	public void deleteUser(Integer id) {
		 uRepo.deleteById(id);
	}
	
	@Override
	public Object login(String UsernameorEmail, String password) {
		UserEntity u=uRepo.findByuserNameorEmail(UsernameorEmail, UsernameorEmail);
		if(u!=null) {
			if(password.equals(u.getPassword())) {
				return u;
			}
			
			else {
				try {
					throw new ResourceNotFoundException("Email Id ","",UsernameorEmail);
				}
				catch(ResourceNotFoundException e){
					return e.getMessage();
				}
			}
		}
		else {
			try {
				throw new ResourceNotFoundException("Email and"," Name not found",UsernameorEmail);
			}
			catch(ResourceNotFoundException e){
				return e.getMessage();
			}
		}
	}
	
	
	@Override
	public String findByemail(String email) {
		Optional <UserEntity> optionalUser = Optional.of(uRepo.findUser(email));
		if (optionalUser.isPresent()) {
		 uRepo.findUser(email);
		 
	     return "Enter Other Details";}
	     else {
				try {
					throw new AccountNotFoundException("Account with email " + email + " does not exist.");
				} catch (AccountNotFoundException anf) {
					return anf.getMessage();
				}

	     }
	}
	
	@Override
	public String changePwdService(String email, String password, String confirm) {

		UserEntity ue = uRepo.findUser(email);
		if (ue != uRepo.findUser(confirm)) {
			if (password.equals(confirm)) {
				String valid = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,20}$";
				if (password.matches(valid)) {
					UserEntity user = ue;
					user.setPassword(password);
					uRepo.save(user);
					return "Password reset successful";
				} else {
					try {
						throw new InvalidPasswordException(
								"Invalid password. Password must be between 8 to 20 characters long and should contain at least one digit, one lowercase, one uppercase and one special character.");
					} catch (InvalidPasswordException e) {
						return e.getMessage();
					}

				}
			} else {

				return "new password and confirm password does not match.";
			}

		} else {
			try {
				throw new AccountNotFoundException("account with email " + email + " does not exist.");
			} catch (AccountNotFoundException anf) {
				return anf.getMessage();
			}

		}
	}
	
	@Override
	public String emailVerifyWithEmail(String email) {
		
		UserEntity verify=uRepo.getByEmail(email);
		int otp=new Random().nextInt(100000, 999999);
		if(verify instanceof UserEntity) {
			
			mail.setFrom("satishndls1@gmail.com");
			mail.setTo(email);
		    mail.setText("Hello User"+"\r\n"+" You asked us to send you an OTP for login in to your (The Med Route Account)."
					+"\r\n"+"Here's your OTP: "+ otp +"\r\n"+"Note: Your OTP Can be Used Only One time."+"\r\n"+" Thank You"+"\r\n"+"Team :-The Med Route");
		    mail.setSubject("OTP for The Med Route Users");
		    
		    send.send(mail);
		    System.out.println("Mail Sent Successfully ");
		    
			return "OTP Sent Successfully...Check Your Email.";
		}
		return "OTP Not Sent..";
	}
	
}
  
	
	

