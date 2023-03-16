package com.jsp.tmr.doctor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.jsp.tmr.doctor.dao.DoctorRepo;
import com.jsp.tmr.doctor.entity.DoctorEntity;

public interface DoctorService {

     Object saveData(DoctorEntity dentity);
     
     List<DoctorEntity> getData();
     
     public Object loginDc(String DoctorNameorEmail, String password);

	
     
	
}
