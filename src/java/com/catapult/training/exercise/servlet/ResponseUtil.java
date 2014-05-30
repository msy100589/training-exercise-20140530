package com.catapult.training.exercise.servlet;

import java.io.PrintWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 *
 * @author jvergara <jvergara@gocatapult.com>
 */
public class ResponseUtil
{

    public static void writeToJson(List<Map> dataList, Writer writer)
    {
        PrintWriter out = new PrintWriter(writer);

        out.write("[");
        for (int i = 0; i < dataList.size(); ++i) {
            if (i > 0) {
                out.write(",");
            }

            Map data = dataList.get(i);
            List keys = new ArrayList(data.keySet());

            out.write("{");
            for (int kIdx = 0; kIdx < keys.size(); ++kIdx) {
                if (kIdx > 0) {
                    out.write(",");
                }

                Object key = keys.get(kIdx);
                out.printf("\"%s\":\"%s\"", key, data.get(key));
            }
            out.write("}");
        }
        out.write("]");
    }

}
