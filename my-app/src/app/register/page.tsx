"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("")
    
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800"> {/*flex, Inhalt in die Mitte -> horizontal und vertikal, höhe mindestens voller screen, background grau mit stärke 900*/}
            <div className="bg-white p-8 rounded-lg w-96"> {/*hintergrund weiss, mit paddint 2rem oder 32px, Ecken rund, breite auf 24rem */}
                <h2 className="text-3xl text-gray-800 font-semibold text-center mb-6 mt-4">Sign Up</h2> {/*textgrösse, halbfette Schrift, text horizonal in der mitte, unterer abstand*/}
                <hr className="mb-6 border-black"/> {/*Horizontale linie mich margin bottom und border schwarz*/}
                <form className="flex flex-col"> {/*flex wird verwendet, kolone vertikal*/}
                    <label className="text-gray-800 font-semibold mb-0.5">Username</label>
                    <input 
                      type="text"
                      value={username} // "{}" wegen java-typescript
                      onChange={(e) => setUsername(e.target.value)} // Beim verändern des Input wird das Eventobject also hier der Text in "username" gespeichert
                      className="border-b-2 border-black mb-6 focus:outline-none text-black" // 2px dicke linie, schwarze farbe linie, padding mit 8px, margin-bottom fügt abstand nach unten, keine Umrandung
                    />
                    <label className="text-gray-800 font-semibold mb-0.5">Email</label>
                    <input 
                      type="text"
                      value={email} // "{}" wegen java-typescript
                      onChange={(e) => setEmail(e.target.value)} // Beim verändern des Input wird das Eventobject also hier der Text in "username" gespeichert
                      className="border-b-2 border-black mb-6 focus:outline-none text-black" // 2px dicke linie, schwarze farbe linie, padding mit 8px, margin-bottom fügt abstand nach unten, keine Umrandung
                    />
                    <label className="text-gray-800 font-semibold mb-0.5">Password</label>
                    <input 
                      type="password"
                      value={password} // "{}" wegen java-typescript
                      onChange={(e) => setPassword(e.target.value)} // Beim verändern des Input wird das Eventobject also hier der Text in "username" gespeichert
                      className="border-b-2 border-black mb-6 focus:outline-none text-black" // 2px dicke linie, schwarze farbe linie, padding mit 8px, margin-bottom fügt abstand nach unten, keine Umrandu
                    />
                    <label className="text-gray-800 font-semibold mb-0.5">Confirm Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="border-b-2 border-black mb-8 focus:outline-none text-black"
                    />
                    <button className="text-white bg-gray-700 py-2 rounded-xl hover:bg-gray-800 font-semibold mb-4 transition duration-300">{/*padding auf der y achse alsooben und unten 2*/}
                        Register
                    </button>
                </form>
                <p className="text-gray-800 text-center font-semibold">
                    Already have an account? <Link href="/login" className="underline hover:text-gray-700">Login here</Link>
                </p>
            </div>
        </div>
    )
}