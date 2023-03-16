package com.jsp.tmr.doctor.exception;

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
