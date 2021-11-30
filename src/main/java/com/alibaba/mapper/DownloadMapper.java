package com.alibaba.mapper;

import com.alibaba.bean.Download;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

/**
 * mapper的具体表达式
 */
@Mapper //标记mapper文件位置，否则在Application.class启动类上配置mapper包扫描
@Repository
public interface DownloadMapper {

    /**
     * 查询用户名是否存在，若存在，不允许注册
     * 注解@Param(value) 若value与可变参数相同，注解可省略
     * 注解@Results  列名和字段名相同，注解可省略
     * @param username
     * @return
     */
    @Select(value = "select u.username,u.password from user u where u.username=#{username}")
    @Results
            ({@Result(property = "username",column = "username"),
              @Result(property = "password",column = "password")})
    Download findUserByName(@Param("username") String username);

    /**
     * 注册  插入一条user记录
     * @param download
     * @return
     */
    @Insert("insert into user values(#{id},#{username},#{password})")
    //加入该注解可以保存对象后，查看对象插入id
    @Options(useGeneratedKeys = true,keyProperty = "id",keyColumn = "id")
    void regist(Download download);

    /**
     * 登录
     * @param download
     * @return
     */
    @Select("select u.id from user u where u.username = #{username} and password = #{password}")
    Long login(Download download);
}
