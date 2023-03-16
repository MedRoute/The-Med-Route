package com.jsp.tmr.doctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.tmr.doctor.dao.DoctorRepo;
import com.jsp.tmr.doctor.entity.DoctorEntity;
import com.jsp.tmr.exceptions.ResourceNotFoundException;

@Service
public class DoctorServiceImpl implements DoctorService {
	private static final String emaiL = null;
	
	@Autowired
	DoctorRepo dRepo;

	@Override
	public Object saveData(DoctorEntity dentity) {
		Object temp= dRepo.findByEmail(dentity.getEmail());
		 System.out.println(temp);
		 try {
			 if(temp !=null) {
				throw new ResourceNotFoundException("Email","Exist",dentity.getEmail());
				 
			 }	 
		 }
		 catch(ResourceNotFoundException e) {
			 System.out.println(temp);
			return e.getMessage();	
			 }
		 

		 return dRepo.save(dentity);
	}


	@Override
	public List<DoctorEntity> getData() {
		
		return dRepo.findAll();
	}
	
	@Override
	public Object loginDc(String DoctorNameorEmail, String password) {
		DoctorEntity u=dRepo.findByDoctorNameorEmail(DoctorNameorEmail, DoctorNameorEmail);
		if(u!=null) {
			if(password.equals(u.getPassword())) {
				return u;
			}
			
			else {
				try {
					throw new ResourceNotFoundException("DoctorEntity","DoctorNameorEmail",DoctorNameorEmail);
				}
				catch(ResourceNotFoundException e){
					return e.getMessage();
				}
			}
		}
		else {
			try {
				throw new ResourceNotFoundException("DoctorEntity","DoctorNameorEmail",DoctorNameorEmail);
			}
			catch(ResourceNotFoundException e){
				return e.getMessage();
			}
		}
	}






}
