/* ================================================================
   VANGUARD THEME - CONFIGURATION (FULL CONTENT VERSION)
   ================================================================ */

const config = {
    // 1. INFO SERVIDOR
    serverName: "SintuxStudios",
    serverIp: "mc.sintuxstudios.uk",
    serverLogo: "logo.png", // Asegúrate de que existe
    // El favicon se carga automáticamente si se llama "favicon.png"

    // 2. REDES SOCIALES
    social: {
        discord: "https://discord.com/invite/bCS8zkNp3C",
        store: "https://sintuxcraft.craftingstore.net/",
        instagram: "https://www.instagram.com/sintuxstudios/",
        youtube: "https://www.youtube.com/@SintuxStudios"
    },

    // 4. CONTENIDO (Español _es / Inglés _en UNIFICADOS)
    content: {
        // --- STAFF ---
        staff: [
            { 
                name: "scorpion741", role: "OWNER", 
                bio_es: "Fundador de Sintux Studios y creador de los eventos y series.",
                bio_en: "Founder of Sintux Studios and creator of events and series."
            },
            { 
                name: "SrKbrivic", role: "ADMIN", 
                bio_es: "Encargado de robar cuentas y ser un caso especial.",
                bio_en: "Responsible for stealing accounts and being a special case."
            },
            { 
                name: "Guillermito14", role: "DEV", 
                bio_es: "Configurador de los eventos y series.",
                bio_en: "Event and series configurator."
            },
            { 
                name: "iloperv", role: "MANAGER", 
                bio_es: "Configurador de los eventos y series.",
                bio_en: "Event and series configurator."
            },      
        ],

        // --- TEXTOS LEGALES COMPLETOS (HTML) ---
        proyects: {
            // TÉRMINOS DEL SERVICIO
            tos_es: `
                <h3>Alcance del Servicio</h3>
                <p>El servidor, los servicios web y la infraestructura del launcher son proporcionados por Vanguard Networks S.L. El acceso al servicio es un privilegio, no un derecho.</p>
                <br>
                <h3>Responsabilidad de la Cuenta</h3>
                <p>La seguridad de la cuenta de usuario es responsabilidad exclusiva del jugador. VanguardMC no se hace responsable de pérdidas ocasionadas por el robo de cuentas, intercambio de contraseñas o descuidos de seguridad por parte del usuario.</p>
                <br>
                <h3>Pagos y Reembolsos</h3>
                <p>Las compras realizadas en la tienda del servidor se consideran bienes digitales intangibles. Conforme a la normativa vigente sobre productos digitales, una vez entregado el servicio o rango, <b>no se admiten devoluciones ni reembolsos</b> bajo ninguna circunstancia. Cualquier intento de devolución de cargo (chargeback) resultará en un bloqueo permanente de la cuenta.</p>
                <br>
                <h3>Sanciones</h3>
                <p>Las violaciones de las reglas del servidor pueden resultar en advertencias, silencios (mutes), expulsiones temporales o baneos permanentes. El equipo administrativo se reserva el derecho de restringir el acceso a cualquier usuario que considere perjudicial para la comunidad.</p>
            `,
            tos_en: `
                <h3>Scope of Service</h3>
                <p>The server, web services, and launcher infrastructure are provided by Vanguard Networks S.L. Access to the service is a privilege, not a right.</p>
                <br>
                <h3>Account Responsibility</h3>
                <p>User account security is the sole responsibility of the player. VanguardMC is not liable for losses caused by account theft, password sharing, or security negligence by the user.</p>
                <br>
                <h3>Payments and Refunds</h3>
                <p>Purchases made in the server store are considered intangible digital goods. In accordance with digital product regulations, once the service or rank is delivered, <b>no returns or refunds are accepted</b> under any circumstances. Any chargeback attempt will result in a permanent account ban.</p>
                <br>
                <h3>Sanctions</h3>
                <p>Violations of server rules may result in warnings, mutes, temporary kicks, or permanent bans. The administrative team reserves the right to restrict access to any user deemed harmful to the community.</p>
            `,

            // AVISO LEGAL
            notice_es: `
                <h3>Información de la Empresa</h3>
                <ul>
                    <li><b>Nombre Legal:</b> Vanguard Networks S.L.</li>
                    <li><b>Dirección:</b> Calle Falsa 123, Madrid, España (Sede operativa en Estambul, Turquía)</li>
                    <li><b>N° Fiscal:</b> ES-B12345678</li>
                    <li><b>Contacto Legal:</b> legal@vanguardmc.net</li>
                </ul>
                <br>
                <h3>Licencia y Derechos de Autor</h3>
                <p>VanguardMC no está afiliado, asociado ni respaldado por Mojang Studios, Microsoft ni ninguna de sus filiales. Minecraft es una marca registrada de Mojang Studios.</p>
                <p>Todos los activos del juego, texturas y modelos base están sujetos al EULA de Minecraft. El contenido original de la web y el servidor está protegido por derechos de autor de Vanguard Networks S.L.</p>
            `,
            notice_en: `
                <h3>Company Information</h3>
                <ul>
                    <li><b>Legal Name:</b> Vanguard Networks S.L.</li>
                    <li><b>Address:</b> Fake Street 123, Madrid, Spain (Operational HQ in Istanbul, Turkey)</li>
                    <li><b>Tax ID:</b> ES-B12345678</li>
                    <li><b>Legal Contact:</b> legal@vanguardmc.net</li>
                </ul>
                <br>
                <h3>License and Copyright</h3>
                <p>VanguardMC is not affiliated, associated, or endorsed by Mojang Studios, Microsoft, or any of their affiliates. Minecraft is a registered trademark of Mojang Studios.</p>
                <p>All game assets, textures, and base models are subject to the Minecraft EULA. Original web and server content is copyright of Vanguard Networks S.L.</p>
            `,

            // POLÍTICA DE PRIVACIDAD
            priv_es: `
                <h3>Datos Recopilados</h3>
                <p>Para el funcionamiento del servicio, recopilamos automáticamente la siguiente información:</p>
                <ul>
                    <li>Dirección IP (para seguridad y moderación).</li>
                    <li>UUID de Minecraft y nombre de usuario.</li>
                    <li>Registros de chat y comandos (logs).</li>
                    <li>Historial de transacciones de la tienda.</li>
                </ul>
                <br>
                <h3>Período de Retención</h3>
                <p>Los datos se almacenan de forma cifrada en nuestros servidores ubicados en la Unión Europea mientras la cuenta del jugador permanezca activa o sea necesario por razones legales y de seguridad.</p>
                <br>
                <h3>Sus Derechos</h3>
                <p>Usted tiene derecho al acceso, corrección, eliminación (derecho al olvido) y portabilidad de sus datos personales. Para ejercer estos derechos, por favor contacte a nuestro delegado de protección de datos en <b>privacy@vanguardmc.net</b>.</p>
            `,
            priv_en: `
                <h3>Collected Data</h3>
                <p>To operate the service, we automatically collect the following information:</p>
                <ul>
                    <li>IP Address (for security and moderation).</li>
                    <li>Minecraft UUID and username.</li>
                    <li>Chat logs and command history.</li>
                    <li>Store transaction history.</li>
                </ul>
                <br>
                <h3>Retention Period</h3>
                <p>Data is stored encrypted on our servers located in the European Union while the player account remains active or as required for legal and security reasons.</p>
                <br>
                <h3>Your Rights</h3>
                <p>You have the right to access, correct, delete (right to be forgotten), and port your personal data. To exercise these rights, please contact our data protection officer at <b>privacy@vanguardmc.net</b>.</p>
            `
        }
    },

    // 5. INTERFAZ (Botones, Títulos)
    interface: {
        es: {
            flag: "es", name: "Español",
            nav: { home: "Inicio", staff: "Equipo", proyects: "Proyectos" },
            hero: { subtitle: "Eventos y series", btn_copy: "COPIAR IP" },
            titles: { staff: "NUESTRO EQUIPO", proyects: "PROYECTOS" },
            proyects_tabs: { tos: "Series", priv: "Eventos", notice: "Dinamicas" }
        },
        en: {
            flag: "us", name: "English",
            nav: { home: "Home", staff: "Team", proyects: "Projects" },
            hero: { subtitle: "Events and series", btn_copy: "COPY IP" },
            titles: { staff: "OUR TEAM", proyects: "PROJECTS" },
            proyects_tabs: { tos: "Series", priv: "Events", notice: "Dynamics" }
        }
    }

};
