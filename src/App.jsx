import { useState } from "react";
import "./App.css";
import logoBecurly from "./assets/logoBecurly.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header className="flex flex-col items-center mb-8 gap-8">
                <div className="flex flex-col sm:flex-row justify-around items-center gap-10 mb-4">
                    <h1 className="font-serif">Be Curly Salon</h1>
                    <img
                        src={logoBecurly}
                        alt="Be Curly Logo"
                        width="150"
                        height="150"
                        className="filter brightness-0 invert"
                    />
                </div>
                <h2 className="font-serif text-left w-full">
                    Términos y Condiciones
                </h2>
                <p className="text-left">
                    Para resguardar la experiencia consciente, armónica y
                    personalizada que caracteriza a Be Curly, te invitamos a
                    leer las siguientes políticas antes de reservar tu cita.
                    Estas normas aseguran respeto por tu tiempo, el de otras
                    invitadas y el de nuestro equipo.
                </p>
            </header>
            <main className="text-left flex flex-col gap-6">
                <article>
                    <h3 className="font-serif text-2xl mb-2">
                        1. Anticipo para Reservar
                    </h3>
                    <p className="mb-4">
                        Para confirmar tu lugar en la agenda, es indispensable
                        realizar un anticipo al momento de reservar a través de
                        nuestro sistema en línea. Este importe será acreditado
                        al total de tu servicio el día de tu visita. El anticipo
                        es intransferible y no reembolsable bajo ningún motivo o
                        circunstancia.
                    </p>
                </article>
                <article>
                    <h3 className="font-serif text-2xl mb-2">2. Puntualidad</h3>
                    <p className="mb-4">
                        Honramos el tiempo de cada invitada y la dedicación que
                        merece tu experiencia. Te pedimos llegar a tu cita con
                        puntualidad. Contamos con un máximo de 10 minutos de
                        tolerancia. Te sugerimos considerar factores externos
                        como tráfico, estacionamiento, clima y posibles
                        imprevistos. Superado el tiempo de tolerancia, la cita
                        se cancelará automáticamente y el anticipo se
                        considerará utilizado.
                    </p>
                </article>
                <article>
                    <h3 className="font-serif text-2xl mb-2">
                        3. Preparacion del cabello para tu cita
                    </h3>
                    <p className="mb-4">
                        Para brindarte una asesoría precisa y un resultado
                        impecable, te pedimos presentarte con el cabello limpio,
                        seco, completamente suelto y libre de productos
                        fijadores, aceites, cremas o peinados, a menos que se
                        indique lo contrario.
                    </p>
                </article>
                <article>
                    <h3 className="font-serif text-2xl mb-2">
                        4. Cambios, Cancelaciones y Reagendamientos
                    </h3>
                    <p className="mb-4">
                        Sabemos que pueden surgir ajustes en tu agenda. Si
                        necesitas modificar tu cita, podrás reagendar una única
                        vez con un mínimo de 24 horas de anticipación, a través
                        del mismo sistema de reservas. • Modificaciones
                        realizadas fuera del plazo establecido, inasistencias o
                        cancelaciones de último momento implican la pérdida del
                        anticipo. • Si tu cita es cancelada debido a retraso, el
                        anticipo será igualmente considerado como utilizado.
                    </p>
                </article>
                <article>
                    <h3 className="font-serif text-2xl mb-2">
                        5. Modificación del Servicio Reservado
                    </h3>
                    <p className="mb-4">
                        Si deseas cambiar el servicio inicialmente seleccionado,
                        podrás solicitarlo el día de tu cita. Todo ajuste estará
                        sujeto a disponibilidad de tiempo y a la valoración
                        profesional, con el fin de garantizar la calidad y
                        atención personalizada que caracteriza a Be Curly.
                    </p>
                </article>{" "}
                <article>
                    <h3 className="font-serif text-2xl mb-2">
                        6. Duración de los Servicios
                    </h3>
                    <p className="mb-4">
                        Cada servicio cuenta con un tiempo de duración
                        cuidadosamente asignado para ofrecerte una experiencia
                        detallada, consciente y sin prisas. Antes de reservar,
                        considera el tiempo requerido para el servicio o
                        combinación de servicios que deseas disfrutar.
                    </p>
                </article>
                <article>
                    <h3 className="font-serif text-2xl mb-2">7. Ubicación</h3>
                    <p className="mb-4">
                        La dirección exacta del estudio se comparte una vez
                        confirmada tu cita. También podrás encontrar el enlace
                        de ubicación en nuestra cuenta oficial de Instagram.
                    </p>
                </article>
                <article>
                    <h3 className="font-serif text-2xl mb-2">
                        8. Acompañantes
                    </h3>
                    <p className="mb-4">
                        Para mantener un espacio de calma y presencia, el acceso
                        al estudio es únicamente para la persona que recibirá el
                        servicio y máximo solo un acompañante. En caso de venir
                        con niños, te pedimos asegurarte de que estén
                        supervisados en todo momento para no interrumpir la
                        experiencia de otras invitadas.
                    </p>
                </article>
            </main>
            <footer className="mt-10">
                © 2025 Be Curly. Todos los derechos reservados.
            </footer>
        </>
    );
}

export default App;
