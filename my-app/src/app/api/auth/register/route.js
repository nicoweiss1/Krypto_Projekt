// API für Speicherung der User nach Registrierung
import clientPromise from "../../../lib/mongodb"; // Verbindung der DB
import bcrypt from 'bcryptjs'; // Passwort zu hashen

export async function POST(req) { // POST Anfrage um Daten hinzuzufügen
    try {
        const client = await clientPromise; // Holt DB verbindung
        const db = client.db("KryptoProject");  // Holt die richtige Datenbank mit Namen
        const { name, email, password } = await req.json; // holt die gesendeten JSON-Daten aus der Anfrage, Daten werden als Name Email und password gespeichert
    
        const existingUser = await db.collection("users").findOne({email}); // sucht nach einem Benutzer mit dieser Email in der DB
        if (existingUser) { // Falls exisitert Fehler
            return Response.json({error: "Benutzer existiert bereits"}, {status:400})
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Passwort wird gehashed (verschlüsselt) mit einem Salt-Wert von 10, es wird in der DB anders gespeichert -> Falls DB gehackt wird
        const result = await db.collection("users").insertOne({name, email, password: hashedPassword}); // "insertOne" erstellt neuen Nutzer mit name, email und gehashtem Passwort
        return Response.json({message: "Benutzer erfolgreich erstellt", userId: result.insertedId}, {status:201}); // Falls alles erfolgreich war gibt API ein Antwort, "result.insertedId" ist die MongoDB ID des neu erstellen Benutzer's
    }
    catch(error) {
        console.error("Fehler bei der Registrierung", error);
        return Response.json({error: "Server-Fehler"}, {status:500});
    }

}