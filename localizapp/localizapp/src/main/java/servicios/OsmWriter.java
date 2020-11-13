package servicios;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Date;
 
import org.openstreetmap.osmosis.core.container.v0_6.NodeContainer;
import org.openstreetmap.osmosis.core.domain.v0_6.CommonEntityData;
import org.openstreetmap.osmosis.core.domain.v0_6.Node;
import org.openstreetmap.osmosis.core.domain.v0_6.OsmUser;
import org.openstreetmap.osmosis.core.task.v0_6.Sink;
import org.openstreetmap.osmosis.core.task.v0_6.Source;
import org.openstreetmap.osmosis.osmbinary.file.BlockOutputStream;
 
import crosby.binary.osmosis.OsmosisSerializer;

public class OsmWriter implements Source{
	
	 private Sink sink;
	 
	    @Override
	    public void setSink(Sink sink) {
	        this.sink = sink;
	    }
	 
	    public void write() {
	        for (int idx = 1; idx <= 10; idx++) {
	            sink.process(new NodeContainer(new Node(createEntity(idx), 0, 0)));
	        }
	    }
	 
	    public void complete() {
	        sink.complete();
	    }
	 
	    private CommonEntityData createEntity(int idx) {
	        return new CommonEntityData(idx, 1, new Date(), new OsmUser(idx, "User"), idx);
	    }
	 
	    public static void main(String[] args) throws FileNotFoundException {
	        OutputStream outputStream = new FileOutputStream("/Path/To/Your/write.osm.pbf");
	        OsmWriter writer = new OsmWriter();
	        writer.setSink(new OsmosisSerializer(new BlockOutputStream(outputStream)));
	        writer.write();
	        writer.complete();
	    }

}
