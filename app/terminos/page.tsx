export const metadata = {
  title: "Términos de Servicio | ERDevLabs",
  description: "Términos y condiciones de los servicios de ERDevLabs.",
};

export default function TerminosPage() {
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
          Términos de Servicio
        </h1>
        <p className="text-white/40 text-sm mb-12">
          Última actualización: 20 de mayo de 2026
        </p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">1. Objeto y aceptación</h2>
            <p>
              Los presentes Términos de Servicio regulan la relación contractual entre ERDevLabs (en adelante "ERDevLabs", "nosotros" o "el proveedor") y el cliente (en adelante "el Cliente") en relación con los servicios de desarrollo de software, diseño web, consultoría tecnológica y servicios relacionados prestados por ERDevLabs.
            </p>
            <p className="mt-3">
              Al contratar cualquiera de nuestros servicios, el Cliente acepta íntegramente estos Términos. Si no está de acuerdo con alguno de los puntos aquí establecidos, le rogamos que no contrate nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">2. Descripción de los servicios</h2>
            <p>ERDevLabs presta los siguientes servicios, entre otros:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              <li>Diseño y desarrollo de sitios web corporativos y landing pages</li>
              <li>Desarrollo de tiendas en línea y plataformas de e-commerce</li>
              <li>Desarrollo de software a medida, CRM y ERP</li>
              <li>Diseño de interfaces de usuario (UI/UX)</li>
              <li>Consultoría tecnológica y estrategia digital</li>
              <li>Mantenimiento y soporte técnico de sistemas</li>
            </ul>
            <p className="mt-3">
              El alcance específico de cada proyecto queda definido en la propuesta o contrato individual suscrito entre ERDevLabs y el Cliente.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">3. Obligaciones del Cliente</h2>
            <p>El Cliente se compromete a:</p>
            <ul className="list-disc list-inside mt-3 space-y-1.5">
              <li>Proporcionar a ERDevLabs la información, materiales y accesos necesarios para la correcta ejecución del proyecto en los plazos acordados.</li>
              <li>Designar un punto de contacto con capacidad de toma de decisiones durante el desarrollo del proyecto.</li>
              <li>Revisar y aprobar (o solicitar correcciones de) los entregables dentro de los plazos establecidos.</li>
              <li>Realizar los pagos en los términos y plazos pactados.</li>
              <li>Garantizar que los materiales, contenidos o datos que proporciona no infringen derechos de terceros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">4. Pagos y condiciones económicas</h2>
            <p>
              Los precios de los servicios se establecen en la propuesta económica aceptada por el Cliente. Salvo indicación contraria, todos los precios están expresados en dólares estadounidenses (USD).
            </p>
            <p className="mt-3">
              ERDevLabs podrá requerir un pago inicial (anticipo) antes del comienzo del trabajo, cuyo porcentaje quedará reflejado en la propuesta o contrato. Los pagos deben realizarse mediante los métodos acordados entre las partes.
            </p>
            <p className="mt-3">
              En caso de retraso en el pago, ERDevLabs se reserva el derecho de suspender los trabajos hasta la regularización del pago, sin que ello genere responsabilidad para ERDevLabs.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">5. Propiedad intelectual</h2>
            <p>
              Una vez completado el pago íntegro del proyecto, el Cliente adquiere los derechos de uso sobre los entregables finales acordados (código fuente, diseños, etc.) conforme a lo estipulado en la propuesta o contrato.
            </p>
            <p className="mt-3">
              ERDevLabs se reserva el derecho de mencionar el proyecto en su portfolio y materiales de marketing, salvo que el Cliente solicite expresamente la confidencialidad.
            </p>
            <p className="mt-3">
              Las herramientas, frameworks, librerías de código abierto y metodologías propias de ERDevLabs utilizadas en el desarrollo siguen siendo propiedad intelectual de sus respectivos titulares o de ERDevLabs, según corresponda.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">6. Limitación de responsabilidad</h2>
            <p>
              ERDevLabs no será responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso o imposibilidad de uso de los servicios o entregables, incluyendo pero no limitado a pérdida de beneficios, pérdida de datos o interrupción del negocio.
            </p>
            <p className="mt-3">
              La responsabilidad máxima de ERDevLabs ante el Cliente, por cualquier causa, no excederá el importe total pagado por el Cliente en los tres (3) meses anteriores al evento que originó la reclamación.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">7. Confidencialidad</h2>
            <p>
              Ambas partes se comprometen a mantener la confidencialidad de la información sensible intercambiada durante la prestación de los servicios, y a no divulgarla a terceros sin el consentimiento expreso de la parte propietaria de dicha información.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">8. Modificaciones</h2>
            <p>
              ERDevLabs se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización. El uso continuado de los servicios tras la publicación de modificaciones implica la aceptación de los nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">9. Ley aplicable y jurisdicción</h2>
            <p>
              Estos Términos se rigen por las leyes de la República de Costa Rica. Cualquier controversia que surja en relación con los presentes Términos será sometida a la jurisdicción de los tribunales competentes de Costa Rica, renunciando las partes a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-xl mb-3">10. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con estos Términos de Servicio, puede contactarnos a través de WhatsApp al número{" "}
              <a
                href="https://wa.me/50663216443?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20T%C3%A9rminos%20de%20Servicio%20de%20ERDevLabs."
                className="text-brand-purple hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +506 6321 6443
              </a>{" "}
              o mediante nuestro sitio web{" "}
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
