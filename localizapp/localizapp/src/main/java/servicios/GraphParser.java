package servicios;

import java.io.File;

public interface GraphParser {
    void parseXml(File file, Graph outputGraph);
}