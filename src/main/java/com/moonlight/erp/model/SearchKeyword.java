package com.moonlight.erp.model;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;

@Data
@Entity
@EqualsAndHashCode(callSuper = false)
@Table(name = "MB_SEARCH_KEYWORD")
public class SearchKeyword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;
    private String relKeyword;
    private String bigClass;
    private String middleClass;
    private String smallClass;
    private String detailClass;
    private int monthlyPcQcCnt;
    private int monthlyMobileQcCnt;
    private double monthlyAvePcClkCnt;
    private double monthlyAveMobileClkCnt;
    private double monthlyAvePcCtr;
    private double monthlyAveMobileCtr;
    private int plAvgDepth;
    private String compIdx;
    private int productCount;
    private int productOverseas;
    private int productPrice;
    private int productReview;
}
