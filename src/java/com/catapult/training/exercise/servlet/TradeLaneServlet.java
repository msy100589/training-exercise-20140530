package com.catapult.training.exercise.servlet;

import java.io.IOException;
import java.io.PrintWriter;
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
        PrintWriter out = new PrintWriter(resp.getWriter());

        out.write("[");
        for (int i = 0; i < list.size(); ++i) {
            if (i > 0) {
                out.write(", ");
            }

            Map data = list.get(i);
            out.write("{");
            out.printf("\"name\" : \"%s\", ", data.get("name"));
            out.printf("\"originTradeName\" : \"%s\", ", data.get("originTradeName"));
            out.printf("\"destTradeName\" : \"%s\"", data.get("destTradeName"));
            out.write("}");
        }
        out.write("]");
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
