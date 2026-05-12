'use client';
import { useState } from 'react';

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-3">
      <button
        className="btn btn-link text-dark p-0 d-flex align-items-center"
        style={{ textDecoration: 'none', fontSize: '1.5rem', fontWeight: 600 }}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={id}
      >
        <i
          className="fas fa-chevron-right mr-2"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', fontSize: '1rem' }}
        />
        {title}
      </button>
      <div id={id} style={{ display: open ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  );
}

export default function BioPage() {
  return (
    <div className="col-lg-10 mx-auto mt-5 post">
      <div className="grid" style={{ display: 'flex' }}>
        <div className="col-1-2" style={{ flex: 1 }}>
          <div className="content" style={{ paddingRight: '18px' }}>
            <img width="100%" src="/assets/30_TOMI.jpg" alt="Tomás Rawski" />
            ph. Diego Spivacow
          </div>
        </div>
        <div className="col-1-2" style={{ flex: 2 }}>
          <div className="content">
            <strong>Tomás Rawski</strong><br />
            Ciudad de Buenos Aires, Argentina. (1980)<br />
            info@tomasrawski.com.ar<br /><br />
            {"Tomas Rawski's work is centered around relationships - both those that exist between individuals and those that are present in our surroundings. He is particularly interested in exploring and examining the relationships that often go unnoticed due to their normalized nature. He believes that the way we connect with others shapes how we connect with the world around us."}
            <br /><br />
            {"In his artistic practice, Tomas creates acts, gestures, images, and installations that have a profound impact on him and he believes will have a similar effect on others. He considers transmitting his beliefs to be a crucial aspect of his work. He has faith in collective growth and the elevation of collective consciousness."}
            <br /><br />
            {"Currently, he is working on projects that involve symbolic repairs of spaces, people, and events, in which he both participates and invites others to do so. The viewer of his works is not meant to be passive but rather must actively engage and surrender to the immersive experience of the piece. The contemplation of the work is meant to take place inside each individual."}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Section id="awards" title="Awards / Grants / Selections / Residencies">
          <ul>
            <li>2023
              <ul>
                <li>Programa Presente-Continuo: Arte, Ciencia Y Tecnología, organizado por la Fundación Bunge y Born y la Fundación Williams. Selección Oficial.</li>
              </ul>
            </li>
            <li>2020
              <ul>
                <li>Investigación en la UNA: &ldquo;Arte y sanación en la era de las nuevas tecnologías. Rituales, reparaciones simbólicas y acciones positivas&rdquo;</li>
              </ul>
            </li>
            <li>2018
              <ul>
                <li>107 Salon Nacional de Artes Visuales en Categoría Instalaciones y Medios alternativos. Selección Oficial.</li>
              </ul>
            </li>
            <li>2017
              <ul>
                <li>Residencia EAC. Montevideo, Uruguay.</li>
                <li>106 Salon Nacional de Artes Visuales en Categoría Instalaciones y Medios alternativos. Selección Oficial.</li>
              </ul>
            </li>
            <li>2015
              <ul>
                <li>Residencia Cuatro Cuartos 2015. Cañada Rosquin, Santa Fe. Selección Oficial</li>
                <li>&ldquo;Cascada Pantone&rdquo; Premio Andreani 2015-2016, CABA. Selección Oficial</li>
                <li>&ldquo;Miramar Miracielo&rdquo; Premio FIVA 2015, Festival Internacional de Videoarte. Selección Oficial.</li>
              </ul>
            </li>
            <li>2014
              <ul>
                <li>Residencia Nidoerrante 2014. Miramar, Prov. Buenos Aires. Selección Oficial.</li>
              </ul>
            </li>
            <li>2013
              <ul>
                <li>&ldquo;Mar&rdquo;, Bienal de Bahía Blanca 2013. Selección Oficial.</li>
              </ul>
            </li>
            <li>2012
              <ul>
                <li>Festival In-Sonora de España. Selección Oficial</li>
              </ul>
            </li>
            <li>2010
              <ul>
                <li>FAD 2010 de Brasil. &ldquo;Tami-Flu&rdquo;. Selección Oficial.</li>
                <li>Premio de Fotografía Contemporánea AAMEC 2010. &ldquo;Sótanos&rdquo;. Selección Oficial. <a href="http://www.tomasrawski.com.ar/catalogoCaraffa2010.jpg">Catalogo</a></li>
                <li>Interactivos 2010 en Fundación Telefónica, Programa de especialización estética, curaduría y montaje para obras de arte tecnológico. Selección Oficial a beca.</li>
              </ul>
            </li>
            <li>2009
              <ul>
                <li>FAD 2009. Brasil, Belo Horizonte. &ldquo;Songs With Words&rdquo;. Selección Oficial</li>
              </ul>
            </li>
            <li>2008
              <ul>
                <li>&ldquo;Gente de mi Ciudad&rdquo; del Banco Ciudad. Primer Premio.</li>
                <li>Interactivos 2008 en Fundación Telefónica de Argentina. Selección Oficial a beca.</li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section id="exhibitions" title="Exhibitions / Publications / Curatorship">
          <ul>
            <li>2018
              <ul>
                <li>&ldquo;Fluir&rdquo;. Salón Nacional 107 Casa Nacional del Bicentenario, CABA.</li>
                <li>&ldquo;Una montaña de tierra&rdquo;. Fundación Fortabat, CABA</li>
              </ul>
            </li>
            <li>2017
              <ul>
                <li>&ldquo;Ahoga tus penas&rdquo;. Muestra &ldquo;Todas estas cosas&rdquo; en Bar Festival, CABA</li>
                <li>&ldquo;Ritual para que los artistas vivan de su creación&rdquo;. Galería Quimera, CABA</li>
                <li>&ldquo;Ojo, mi cielo&rdquo; y &ldquo;Libertad&rdquo; en EAC. Espacio de Arte Contemporáneo. Uruguay, Montevideo.</li>
                <li>&ldquo;Eclipse Lunar&rdquo;. Casa creativa del Sur, CABA.</li>
                <li>&ldquo;Ojo, mi cielo&rdquo;. Salón Nacional 106. Palais de Glace, CABA.</li>
                <li>Curaduría. Muestra de Santiago Carlomagno &ldquo;No hay bordes en el lago&rdquo;. Chien Noir, CABA</li>
              </ul>
            </li>
            <li>2016
              <ul>
                <li>&ldquo;Limpieza dactilar&rdquo; y &ldquo;Jellyfish&rdquo;. Bienal de arte digital The Wrong. Espacio Pla, CABA</li>
                <li>Curaduría. Muestra de Mateo Amaral &ldquo;Filtrar el paisaje&rdquo;. Espacio Pla, CABA</li>
                <li>&ldquo;Las dos caras de una bomba&rdquo;, Videoproject. Buenos Aires Photo, CABA</li>
                <li>&ldquo;Fluir&rdquo;. &ldquo;El futuro llegó (hace rato)&rdquo;. Centro Cultural Kirchner, CABA</li>
              </ul>
            </li>
            <li>2015
              <ul>
                <li>&ldquo;Ningún encuentros es fortuito&rdquo;. Espacio Richieri 452, Rosario</li>
                <li>&ldquo;Niveles de realidad&rdquo;. Galería Alpha Centauri, CABA</li>
                <li>&ldquo;Cascada Pantone. Premio Andreani. Centro Cultural Borges, CABA</li>
              </ul>
            </li>
            <li>2014
              <ul>
                <li>&ldquo;El paisaje es un proceso&rdquo;. Galería Quimera del arte, CABA</li>
              </ul>
            </li>
            <li>2013
              <ul>
                <li>Muestra individual &ldquo;Los colores son números infinitos&rdquo;. Galería Quimera del arte, CABA</li>
                <li>&ldquo;Mar&rdquo;. Bienal de Bahía Blanca.</li>
                <li>&ldquo;Eclipse Lunar&rdquo;. Galería Pasaje 17, Disímil</li>
              </ul>
            </li>
            <li>2012
              <ul>
                <li>&ldquo;La vida de un toroide&rdquo;- Instalación en KDA Bravard.</li>
                <li>&ldquo;9 de Julio Circular&rdquo; <a href="http://issuu.com/condit/docs/espiral_01?mode=window&backgroundColor#222222">Revista Espiral para conDIT</a></li>
                <li>&ldquo;Naturaleza Overflow Acuática&rdquo; y &ldquo;Atardecer&rdquo;. Fase 4. Centro Cultural Recoleta, CABA</li>
                <li>Instalación &ldquo;Epidemia Sonora&rdquo;. Festival In-Sonora. Madrid, España.</li>
              </ul>
            </li>
            <li>2011
              <ul>
                <li>Muestra individual &ldquo;Daltónicos Bienvenidos&rdquo;. Galería Baltar Contemporáneo. Mar del Plata.</li>
                <li>Instalación &ldquo;Epidemia Sonora&rdquo;. Fundación Telefónica, CABA</li>
              </ul>
            </li>
            <li>2010
              <ul>
                <li>&ldquo;Naturaleza Overflow&rdquo;, CEIArtE-UNTreF. C. C. Borges, CABA</li>
                <li>&ldquo;Tami-flu&rdquo;. FAD 2010. Brasil, Belo Horizonte</li>
                <li>Instalación &ldquo;Naturaleza Overflow&rdquo;. Galería Objeto-a, CABA</li>
                <li>&ldquo;Epidemia Sonora v1&rdquo;. Kda Sonoro. Galería Jardín Oculto, CABA</li>
                <li>&ldquo;Songs With Words&rdquo;. Espacio Enter. España, Canarias. <a href="http://issuu.com/espacioenter/docs/espacioentercanarias22sept-27sept">Catalogo</a></li>
              </ul>
            </li>
            <li>2009
              <ul>
                <li>&ldquo;Songs With Words&rdquo;. FAD 2009. Brasil, Belo Horizonte.</li>
              </ul>
            </li>
            <li>2008
              <ul>
                <li>&ldquo;L-Field&rdquo;, Fundación Telefónica. Open Studio.</li>
                <li>&ldquo;La ciudad de la Espera&rdquo;, Libro fotográfico y presentación. C. C. Borges, CABA</li>
                <li>&ldquo;S/T&rdquo;.Gente de mi Ciudad. Centro Cultural Recoleta, CABA</li>
                <li>&ldquo;Centrales Nucleares en Argentina&rdquo;, Ensayo fotográfico. Clarin.com</li>
              </ul>
            </li>
            <li>2007
              <ul>
                <li>Caminante del cielo. Be Boz Be Art. Galería DacilArt</li>
              </ul>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
