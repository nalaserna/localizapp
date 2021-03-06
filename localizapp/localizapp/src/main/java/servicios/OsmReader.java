package servicios;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Map;
 
import org.openstreetmap.osmosis.core.container.v0_6.EntityContainer;
import org.openstreetmap.osmosis.core.container.v0_6.NodeContainer;
import org.openstreetmap.osmosis.core.container.v0_6.RelationContainer;
import org.openstreetmap.osmosis.core.container.v0_6.WayContainer;
import org.openstreetmap.osmosis.core.domain.v0_6.Tag;
import org.openstreetmap.osmosis.core.domain.v0_6.Way;
import org.openstreetmap.osmosis.core.task.v0_6.Sink;
import crosby.binary.osmosis.OsmosisReader;

public class OsmReader implements Sink{
	 @Override
	    public void initialize(Map<String, Object> arg0) {
	    }
	 
	    @Override
	    public void process(EntityContainer entityContainer) {
	        if (entityContainer instanceof NodeContainer) {
	            // Nothing to do here
	        } else if (entityContainer instanceof WayContainer) {
	            Way myWay = ((WayContainer) entityContainer).getEntity();
	            for (Tag myTag : myWay.getTags()) {
	                if ("route=foot".equalsIgnoreCase(myTag.getKey())) {
	                	System.out.println(" It's a walking route: " + myWay.getId());
	                    break;
	                }
	            }
	        } else if (entityContainer instanceof RelationContainer) {
	            // Nothing to do here
	        } else {
	            System.out.println("Unknown Entity!");
	        }
	    }
	 
	    @Override
	    public void complete() {
	    }
	 
	    @Override
	    public void close() {
	    }
	 
	    public static void main(String[] args) throws FileNotFoundException {
	        InputStream inputStream = new FileInputStream("/Path/To/Your/read.osm.pbf");
	        OsmosisReader reader = new OsmosisReader(inputStream);
	        reader.setSink(new OsmReader());
	        reader.run();
	    }

}
