package com.jsp.tmr.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Data
@Entity
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","FieldHandler"})
public class UserAddress {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
 private int id;
 private String name;
 private int age;
 private String gender;
 private long  phone_no;
 private String door_no;
 private String street;
 private String area;
 private String district;
 private String state;
 private String country;
 private int pincode;
 


}
