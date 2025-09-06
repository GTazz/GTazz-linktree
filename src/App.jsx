import useLanguage from './utils/MultiLanguage'
import useTheme from './utils/Theme'
import Balatro from './components/Balatro';
import GlareHover from './components/GlareHover';
import NotificationToast from './components/NotificationToast';
import profilePicture from '/picture.jpg'
import './styles/App.css'
import './styles/Theme.css'


function App() {
  const langTexts = useLanguage();
  const themeColors = useTheme();

  return (
    <>
      <section className="card">
        <div className="card-content">
          <div className="profile">
            <img src={profilePicture} alt="Profile picture" />
            <div className="profile-info">
              <h1>Gabriel Tazz</h1>
              <p>Software Dev</p>
            </div>
          </div>
          <hr />
          <div className="about">
            <h2>{langTexts.aboutTitle}</h2>
            <p>{langTexts.aboutDescription}</p>
          </div>
          <hr />
          <div className="contact">
            <h2>{langTexts.contactTitle}</h2>
            <p className="email">
              {langTexts.contactEmail+": "}
              <span
                className="clickable-text"
                onClick={() => window.copyToClipboard('contact@gtazz.dev', 'email', langTexts)}
                title={langTexts.clickToCopy}
              >
                contact@gtazz.dev
              </span>
            </p>
            <p className="phone">
              {langTexts.contactPhone+": "}
              <span
                className="clickable-text"
                onClick={() => window.copyToClipboard('+55 (11) 96374-9115', 'phone', langTexts)}
                title={langTexts.clickToCopy}
              >
                +55 (11) 96374-9115
              </span>
            </p>
          </div>
          <hr />
          <div className="links">
            <h2>{langTexts.linksTitle}</h2>
            <div>
              <a className="linkedin" href="https://www.linkedin.com/in/gabriel-tazz/" target="_blank" rel="noopener">
                <section>
                  <svg fill="currentColor" aria-label="LinkedIn icon" role="img" version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M41.4,508.1H-8.5V348.4h49.9 V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7 C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6 c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z " /> </g>
                  </svg>
                  <p>LinkedIn</p>
                </section>
                <GlareHover />
              </a>
              <a className="github" href="https://github.com/GTazz" target="_blank" rel="noopener">
                <section>
                  <svg fill="currentColor" aria-label="GitHub icon" role="img" viewBox="0 0 20 20" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g>
                  </svg>
                  <p>GitHub</p>
                </section>
                <GlareHover />
              </a>
              <a className="youtube" href="https://www.youtube.com/@GabTazz" target="_blank" rel="noopener">
                <section>
                  <svg fill="currentColor" aria-label="YouTube icon" role="img" version="1.1" id="Capa_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 97.75 97.75" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M39.969,59.587c7.334-3.803,14.604-7.571,21.941-11.376c-7.359-3.84-14.627-7.63-21.941-11.447 C39.969,44.398,39.969,51.954,39.969,59.587z" /> <path d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z M82.176,65.189c-0.846,3.67-3.848,6.377-7.461,6.78c-8.557,0.957-17.217,0.962-25.842,0.957c-8.625,0.005-17.287,0-25.846-0.957 c-3.613-0.403-6.613-3.11-7.457-6.78c-1.203-5.228-1.203-10.933-1.203-16.314s0.014-11.088,1.217-16.314 c0.844-3.67,3.844-6.378,7.457-6.782c8.559-0.956,17.221-0.961,25.846-0.956c8.623-0.005,17.285,0,25.841,0.956 c3.615,0.404,6.617,3.111,7.461,6.782c1.203,5.227,1.193,10.933,1.193,16.314S83.379,59.962,82.176,65.189z" /> </g> </g> </g>
                  </svg>
                  <p>YouTube</p>
                </section>
                <GlareHover />
              </a>
              <a className="instagram" href="https://www.instagram.com/tazz.py/" target="_blank" rel="noopener">
                <section>
                  <svg fill="currentColor" aria-label="Instagram icon" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                  </svg>
                  <p>Instagram</p>
                </section>
                <GlareHover />
              </a>
            </div>
          </div>
        </div>
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={2000}
          color1={themeColors.balatro1}
          color2={themeColors.balatro2}
          color3={themeColors.balatro1}
        />
      </section>

      {/* Toast Notification Component */}
      <NotificationToast />
    </>
  )
}

export default App
