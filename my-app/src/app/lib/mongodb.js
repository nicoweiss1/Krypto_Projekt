// Verbindung Next.js mit MongoDB
import {MongoClient} from "mongodb";

const uri = process.env.MONGODB_URI // Holt connection zur DB in dem es auf die environment variabel zugreift und in "uri" speichert
if (!uri) throw new Error("MongoDB Uri nicht gesetzt") // Falls die Variabel nicht gesetzt wurde tritt Fehler auf

let client; // MongoDB Client -> der die Verbindung zur Database verwaltet
let clientPromise; // Speichert die "VerbindungsPromise" damit sie wiederverwendet werden kann
//wir verwenden let, damit wird die variabel werte änder können

if(process.env.NODE_ENV === "development") { // Wenn man auf der Umgebung "development" ist
    if(!global._mongoClientPromise) { // Falls "mongoClientPromise" nicht existiert -> also noch keine Verbindung zur DB
        client = new MongoClient(uri); // Neue Instanz von einem MongoClient wird erstellt mit der uri "DatenbankURL"
        global._mongoClientPromise = client.connect; // hier wird "client.connect" aufgerufen -> diese gibt ein "Promise" zurück, dass die Asynchrone Verbindung zur DB verwaltet
    } // das "Promise" von "client.connect" wird in das "global._mongoClientPromise" gespeichert,
    clientPromise = global._mongoClientPromise; // "clientPromise" hat jetzt den Wert der DB Verbindug also "global_._mongoClientPromise"
}
else { // in der prod umgebung gibt es kein "global._mongoClientPromise", weil es dann ja nur eine Instanz der App gibt
    client = new MongoClient(uri); // neuer client wird erstellt
    clientPromise = client.connect // client wird verbunden
}

export default clientPromise // clientPromise wird exisitiert


