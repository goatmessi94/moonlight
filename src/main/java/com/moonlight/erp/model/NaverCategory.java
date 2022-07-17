package com.moonlight.erp.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
@Table(name = "MB_NAVER_CATEGORY")
public class NaverCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;
    private String bigClass;
    private String middleClass;
    private String smallClass;
    private String detailClass;
}
