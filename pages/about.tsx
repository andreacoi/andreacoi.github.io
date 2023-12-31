import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faGithub,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
export default function About() {
  return (
    <main className="profile-page">
      <section className="relative block h-500-px">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-about">
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          />
        </div>
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <Image
                      alt="..."
                      width={150}
                      height={150}
                      src="bio/avatar.png"
                      className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8"></div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Andrea Coi
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                  Based in Lecce, Italy
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                  Web Developer in Pixelfabrica SRL
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                  Liceo Scientifico &quot;A. Vallone&quot; - Galatina
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Sviluppatore, classe 1990.
                      <br />
                      Ho una passione smodata per Informatica, programmazione,
                      elettronica, automobili e orologi Casio. Grazie a queste
                      passioni tiro su qualche soldo per campare e mi diverto
                      nel tempo libero.
                      <br />
                      <br />
                      <strong>Connect with me on:</strong>
                    </p>
                    <ul className="my-connections">
                      <li>
                        <a href="http://facebook.com/sydscarface">
                          <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/andreacoi">
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UCy5wGreccL9Rj7WwfS3IiSA">
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.threads.net/@sydscarface">
                          <FontAwesomeIcon icon={faThreads} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/sydscarface/">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/andreacoi/">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/andreacoi">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1"></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
