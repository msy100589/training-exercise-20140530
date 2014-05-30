package com.catapult.training.exercise.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author jvergara <jvergara@gocatapult.com>
 */
@WebServlet("/services/tradelanes")
public class TradeLaneServlet extends HttpServlet
{

    private static final List<Map> list = new ArrayList();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
        resp.setContentType("application/json");
        ResponseUtil.writeToJson(list, resp.getWriter());
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException
    {
        Map data = new HashMap();
        data.put("name", req.getParameter("name"));
        data.put("originTradeName", req.getParameter("originTradeName"));
        data.put("destTradeName", req.getParameter("destTradeName"));

        list.add(data);
    }

}
