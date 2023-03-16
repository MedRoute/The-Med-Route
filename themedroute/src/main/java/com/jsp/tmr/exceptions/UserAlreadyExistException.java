package com.jsp.tmr.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserAlreadyExistException extends RuntimeException{

	

	private static final long serialVersionUID = 1L;
  private String message;
  
  
	public String getMessage() {
	return message;
}


public void setMessage(String message) {
	this.message = message;
}


public static long getSerialversionuid() {
	return serialVersionUID;
}


	public UserAlreadyExistException(String message) {
		super(message);
		 
	}
}
