// Prüft ob der Benutzer existiert und das Passwort stimmt beim Login
import clientPromise from "../../../lib/mongodb"; // Verbindung der DB
import bcrypt from 'bcryptjs'; // Passwort zu hashen

export async function POST(req) {
    try {
        const client = await clientPromise; // holt die DB verbindung
        const db = client.db("KryptoProject"); // Holt die DB

        const {email, password} = await req.json(); // Holt email und password aus dem abgesendeten Json

        const user = await db.collection("users").findOne({ email }); // sucht user nach der Email
        if(!user) { // wenn user nicht existiert
            return Response.json({ error: "Konto konnte nicht gefunden werde "}, {status:404})
        }

        const passwordmatch = await bcrypt.compare(password, user.password); // vergleicht eingebenes Passwort mit dem password in der DB
        if(!passwordmatch) { // Wenn password nicht gleich ist
            return Response.json({error: "Passwort stimmt nicht"}, {status:401})
        }

        return Response.json({message: "Erfolgreich eingelogt", userId: user._id}, {status:200}) // Nach Erfolgreichem Login
    }
    catch (error) {
        console.error("Fehler beim Login", error)
        return Response.json({error: "Serverfehler"}, {status:500})

    }
}
