package com.alibaba.service;
/**
 * @Author: ModestYjx
 * @Description:
 * @Version: 1.0.0
 * @Date: 2021/11/30 20:58
 */

import com.alibaba.bean.Download;
import com.alibaba.bean.Result;
import com.alibaba.mapper.DownloadMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(rollbackFor = RuntimeException.class)
public class DownloadService {

    @Autowired
    private DownloadMapper downloadMapper;

    public Result downloadFile(Download download) {
        Result result = new Result();
        result.setSuccess(false);
        result.setDetail(null);
        try {
            downloadMapper.regist(download);
            System.out.println(download.getId());
            result.setMsg("提交成功，1个工作日之内发送完毕。");
            result.setSuccess(true);
            result.setDetail(download);

        } catch (Exception e) {
            result.setMsg(e.getMessage());
            e.printStackTrace();
        }
        return result;
    }
}
