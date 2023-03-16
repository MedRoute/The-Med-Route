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
public class UserIssue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
   private int id;
   private String thairaid;
   private String covid;
   private String suger;
   private String bp;
   private String children;
  
}
