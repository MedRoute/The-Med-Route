package com.jsp.tmr.doctor.controller;

import java.util.List;

import javax.print.Doc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.tmr.doctor.entity.DoctorEntity;
import com.jsp.tmr.doctor.service.DoctorService;
import com.jsp.tmr.entities.UserEntity;
@CrossOrigin
@RestController
public class DoctorController {
	
	private static final String email = null;
	
	@Autowired
	DoctorService ds;
	
	@PostMapping("/savedoctor")
	ResponseEntity<Object> save(@RequestBody DoctorEntity dentry){
		Object obj=ds.saveData(dentry);
		if(obj instanceof DoctorEntity) {
			return new ResponseEntity<Object>(obj,HttpStatus.CREATED);
		}

			return new ResponseEntity<Object>(obj,HttpStatus.BAD_REQUEST);
			
			 
	}
	
	@GetMapping("/getDcData")
	public List<DoctorEntity> getDcData() {
		
		return ds.getData();
	}
	
	@GetMapping("/doctorLogin")
	ResponseEntity<Object >loginDoctor(@RequestHeader String DoctorNameorEmail,@RequestHeader String password){
		Object obj=ds.loginDc(DoctorNameorEmail, password);
		if(obj instanceof DoctorEntity) {
			return  ResponseEntity.status(200).body(ds.loginDc(DoctorNameorEmail, password));
		}
		return  ResponseEntity.status(400).body(ds.loginDc(DoctorNameorEmail, password));
	}	
}
