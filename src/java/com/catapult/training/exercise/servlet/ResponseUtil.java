package com.catapult.training.exercise.servlet;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 *
 * @author jvergara <jvergara@gocatapult.com>
 */
public class ResponseUtil
{

    public static void writeToJson(List<Map> dataList, PrintWriter writer)
    {
        writer.write("[");
        for (int i = 0; i < dataList.size(); ++i) {
            if (i > 0) {
                writer.write(",");
            }

            Map data = dataList.get(i);
            List keys = new ArrayList(data.keySet());

            writer.write("{");
            for (int kIdx = 0; kIdx < keys.size(); ++kIdx) {
                if (kIdx > 0) {
                    writer.write(",");
                }

                Object key = keys.get(kIdx);
                writer.printf("\"%s\":\"%s\"", escape(key), escape(data.get(key)));
            }
            writer.write("}");
        }
        writer.write("]");
    }

    private static String escape(Object value)
    {
        if (value == null) return null;

        return value.toString().replaceAll("\"", "\\\\\"");
    }

}
