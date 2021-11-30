package com.alibaba.dao;
/**
 * @Author: ModestYjx
 * @Description:
 * @Version: 1.0.0
 * @Date: 2021/11/30 20:58
 */
import com.alibaba.bean.VisitedData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface VisitedDataDao extends JpaRepository<VisitedData, Long> {
}
