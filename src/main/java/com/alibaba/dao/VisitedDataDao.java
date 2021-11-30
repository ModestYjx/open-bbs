package com.alibaba.dao;

import com.alibaba.bean.VisitedData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface VisitedDataDao extends JpaRepository<VisitedData,Long> {
}
