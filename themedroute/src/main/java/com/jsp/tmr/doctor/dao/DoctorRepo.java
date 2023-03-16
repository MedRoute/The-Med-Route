package com.jsp.tmr.doctor.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jsp.tmr.doctor.entity.DoctorEntity;

public interface DoctorRepo extends JpaRepository<DoctorEntity, Integer>{
	
	public Object findByEmail(String email);
	
	@Query(value="select * from doctor_entity  where doctorname=?1 or email=?2",nativeQuery = true)
	public DoctorEntity findByDoctorNameorEmail(String doctorname,String email);
	
	
//	@Query("SELECT u FROM DoctorEntity u WHERE u.doctorname=:query OR u.email=:query")
//	public  DoctorEntity findUser(String query);
	
}
