export const metadata = {
  title: "Política de Privacidad | ERDevLabs",
  description: "Política de privacidad y protección de datos de ERDevLabs conforme a la Ley 8968 de Costa Rica.",
};

export default function PrivacidadPage() {
  return (
    <main className="bg-brand-dark min-h-screen text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12"
        >
          ← Volver al inicio
        </a>

        <p className="uppercase text-xs text-brand-purple tracking-widest mb-4">
          LEGAL
        </p>
        <h1 className="font-bold text-white mb-2" style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Política de Privacidad
        </h1>
        <p className="text-white/40 text-sm mb-12">
          Última actualización: 20 de mayo de 2026
        </p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. Responsable del tratamiento</h2>
            <p>
              ERDevLabs es el responsable del tratamiento de los datos personales que usted nos proporciona. Operamos con base en Costa Rica y cumplimos con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales (Ley N.° 8968) y su reglamento.
            </p>
            <p className="mt-3">
              Contacto del responsable: puede comunicarse con nosotros vía WhatsApp al{" "}
              <a
                href="https://wa.me/50663216443?text=Hola%2C%20tengo%20una%20consulta%20sobre%20la%20Pol%C3%ADtica%20de%20Privacidad%20de%20ERDevLabs."
                className="text-brand-purple hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +506 6321 6443
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Datos que recopilamos</h2>
            <p>Podemos recopilar los siguientes datos personales:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono o WhatsApp</li>
              <li>Nombre de la empresa u organización</li>
              <li>Información sobre el proyecto o servicio de interés</li>
              <li>Datos de navegación (a través de cookies técnicas y analíticas)</li>
            </ul>
            <p className="mt-3">
              No recopilamos datos sensibles (como datos de salud, opiniones políticas o afiliación religiosa).
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Finalidad del tratamiento</h2>
            <p>Los datos personales que usted nos proporciona se utilizan para:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              <li>Atender sus consultas y solicitudes de información</li>
              <li>Gestionar la relación contractual y la prestación de servicios</li>
              <li>Enviar comunicaciones relacionadas con el proyecto o servicio contratado</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario en nuestro sitio web</li>
              <li>Cumplir con obligaciones legales y fiscales aplicables</li>
            </ul>
            <p className="mt-3">
              No utilizamos sus datos para publicidad de terceros ni los cedemos a empresas ajenas a ERDevLabs sin su consentimiento expreso, salvo obligación legal.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. Base legal del tratamiento</h2>
            <p>El tratamiento de sus datos se basa en:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              <li>La ejecución de un contrato o relación precontractual con usted</li>
              <li>El consentimiento que usted otorga al facilitarnos voluntariamente sus datos</li>
              <li>El cumplimiento de obligaciones legales aplicables a ERDevLabs</li>
              <li>El interés legítimo de ERDevLabs en mejorar sus servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Conservación de los datos</h2>
            <p>
              Conservamos sus datos personales durante el tiempo necesario para cumplir con las finalidades descritas en esta política, o mientras exista una relación contractual activa con usted. Una vez finalizada dicha relación, los datos podrán conservarse durante los plazos establecidos por la legislación costarricense aplicable (fiscal, mercantil, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Sus derechos</h2>
            <p>Conforme a la Ley 8968 de Costa Rica, usted tiene derecho a:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              <li><strong className="text-white/90">Acceso:</strong> conocer qué datos personales suyos tratamos.</li>
              <li><strong className="text-white/90">Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong className="text-white/90">Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios para los fines para los que fueron recogidos.</li>
              <li><strong className="text-white/90">Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
              <li><strong className="text-white/90">Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
            </ul>
            <p className="mt-3">
              Para ejercer cualquiera de estos derechos, contáctenos por WhatsApp al{" "}
              <a
                href="https://wa.me/50663216443?text=Hola%2C%20quisiera%20ejercer%20mis%20derechos%20de%20protecci%C3%B3n%20de%20datos%20personales%20ante%20ERDevLabs."
                className="text-brand-purple hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +506 6321 6443
              </a>
              . Responderemos su solicitud en un plazo máximo de 30 días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Cookies y tecnologías de seguimiento</h2>
            <p>
              Nuestro sitio web puede utilizar cookies técnicas necesarias para el funcionamiento del sitio y cookies analíticas para entender cómo los usuarios interactúan con él. No utilizamos cookies de publicidad comportamental de terceros.
            </p>
            <p className="mt-3">
              Puede configurar su navegador para rechazar las cookies, aunque esto podría afectar la funcionalidad de algunas partes del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. Seguridad de los datos</h2>
            <p>
              ERDevLabs aplica medidas técnicas y organizativas razonables para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún sistema de transmisión o almacenamiento de datos es completamente seguro.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">9. Cambios en esta política</h2>
            <p>
              ERDevLabs se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente. Le recomendamos revisarla periódicamente.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">10. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con esta Política de Privacidad o el tratamiento de sus datos personales, puede contactarnos a través de WhatsApp al número{" "}
              <a
                href="https://wa.me/50663216443?text=Hola%2C%20tengo%20una%20consulta%20sobre%20la%20Pol%C3%ADtica%20de%20Privacidad%20de%20ERDevLabs."
                className="text-brand-purple hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +506 6321 6443
              </a>{" "}
              o visitando nuestro sitio{" "}
              <a href="/" className="text-brand-purple hover:underline">
                erdevlabs.com
              </a>
              .
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/30">© 2026 ERDevLabs. Todos los derechos reservados.</p>
        </div>
      </div>
    </main>
  );
}
