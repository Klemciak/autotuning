import React from "react"
import f80img0 from "../../graphics/bmw-f80/bmw-f80-img0.jpg"
import f80img1 from "../../graphics/bmw-f80/bmw-f80-img1.jpg"
import f80img2 from "../../graphics/bmw-f80/bmw-f80-img2.jpg"
import f80img3 from "../../graphics/bmw-f80/bmw-f80-img3.jpg"
import f80img4 from "../../graphics/bmw-f80/bmw-f80-img4.jpg"
import f80img5 from "../../graphics/bmw-f80/bmw-f80-img5.jpg"
import f80img6 from "../../graphics/bmw-f80/bmw-f80-img6.jpg"
import f80img7 from "../../graphics/bmw-f80/bmw-f80-img7.jpg"
import f80img8 from "../../graphics/bmw-f80/bmw-f80-img8.jpg"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"
import "../../styles/carsStyles/ProjectCar1And4.scss"
import BackToTopButton from "../../components/BackToTopButton"
const ProjectCar4 = () => {
  const images = [
    {
      original: f80img1,
      thumbnail: f80img1,
    },
    {
      original: f80img2,
      thumbnail: f80img2,
    },
    {
      original: f80img3,
      thumbnail: f80img3,
    },
    {
      original: f80img4,
      thumbnail: f80img4,
    },
    {
      original: f80img5,
      thumbnail: f80img5,
    },
    {
      original: f80img6,
      thumbnail: f80img6,
    },
    {
      original: f80img7,
      thumbnail: f80img7,
    },
    {
      original: f80img8,
      thumbnail: f80img8,
    },
  ]

  return (
    <div className="wrapper">
      <section className="title">
        <img src={f80img0} alt="Bmw f80, widok lewy tył" className="title_img" />
        <div className="title_text">Manhart mh3 550 (f80)</div>
      </section>
      <section className="specifications">
        <div className="specifications_title">Dane Techniczne</div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Silnik</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">3,0-litrowy silnik Biturbo (S55)</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wydajność</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Oryginał: 450 KM i 550 Nm</li>
              <li className="specifications_box_list_text">Dostrojone: 550 KM i 700 Nm</li>
              <li className="specifications_box_list_text">Zmiana mapowania ECU MANHART</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wydech</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">
                Układ wydechowy MANHART ze stali nierdzewnej ze sterowaniem zaworami
              </li>
              <li className="specifications_box_list_text">
                Sportowe rury spustowe MANHART z 300-ogniwowymi katalizatorami HJS
              </li>
              <li className="specifications_box_list_text">
                Rury wydechowe 4 x 100 mm MANHART z powłoką węglową lub ceramiczną
              </li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Zawieszenie</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">
                Zestaw sprężyn z regulacją wysokości MANHART firmy KW Suspensions
              </li>
              <li className="specifications_box_list_text">Tuning zawieszenia MANHART</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Koła i opony</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">MANHART Concave One o wyglądzie polerowanego diamentu</li>
              <li className="specifications_box_list_text">FA: 9 x 21″ (ET30 255/30 ZR21)</li>
              <li className="specifications_box_list_text">RA: 10,5 x 21″ (ET40 295/25 ZR21)</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Hamulce</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Hamulce standardowe</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wnętrze</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Wyświetlacz Awron</li>
              <li className="specifications_box_list_text">Dywaniki MANHART</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wygląd zewnętrzny</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Karbonowy kaptur MANHART z otworami wentylacyjnymi GTR</li>
              <li className="specifications_box_list_text">Spoiler węglowy M Performance</li>
              <li className="specifications_box_list_text">Dyfuzor węglowy M Performance</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="description_box">
          <div className="description_box_title">manhart mh3 550 bazujący na 30-letniej edycji M3 F80, MH3 550</div>
          <p className="description_box_text">
            Wszystko zaczyna się od dodatkowych 119 KM dzięki niewielkim zmianom, w tym remapowaniu oprogramowania.
            Dzięki tym zmianom 3,0-litrowy silnik Biturbo (S55) zostaje zwiększony do 550 KM i 700 Nm. Kolejną
            modyfikacją są nowe downpipe MANHART. Dzięki zastosowaniu nowych rur spustowych ciśnienie dynamiczne w
            układzie wydechowym zostaje zmniejszone, co pomaga silnikowi osiągnąć dostosowaną do jego potrzeb moc 550
            KM. Co bardziej oczywiste, rury spustowe pomagają znacznie zwiększyć głośność dźwięku. Wspierany przez nowy
            sportowy tłumik MANHART wykonany ze stali nierdzewnej, MH3 550 brzmi bardziej żywo i bardziej natrętnie niż
            standardowe M3. Na rynek eksportowy MH3 550 można również zamówić z rurami spustowymi bez kotła, co jeszcze
            bardziej zwiększa objętość. Końcówki wydechu do MH3 można zamówić z powłoką węglową lub ceramiczną.
          </p>
          <p className="description_box_text">
            Aby zapewnić dobry kontakt z nawierzchnią podczas jazdy z dużą prędkością i w szybkich zakrętach, MH3 550
            posiada zestaw sprężyn KW. Dzięki nowym sprężynom MH3 jest obniżony do podłoża, co zapewnia lepszą postawę,
            ale jednocześnie zyskuje znacznie lepsze właściwości dynamiczne i lepsze właściwości sterownicze. Pomimo
            sportowego zachowania, MH3 550 sprawdza się jako kierowca na co dzień. MH3 jest wyposażony w układ hamulcowy
            M Performance zarówno na przedniej, jak i tylnej osi.
          </p>
          <p className="description_box_text">
            Pakiet nadwozia obejmuje subtelne zmiany, które mają duży efekt wizualny. Nasze 21-calowe felgi aluminiowe
            MANHART Concave One w kolorze jedwabiście matowym czarnym lub polerowanym diamentowo, stanowią pomost
            pomiędzy dynamicznym i eleganckim wyglądem. W zależności od koloru nadwozia Concave One dają szansę na
            stworzenie kontrastu z samochodem lub płynne wpasowanie się w język projektowania pojazdu.
          </p>
          <p className="description_box_text">
            Niezależnie od tego, czy chodzi o wykończenie, dynamiczny wygląd MH3 sprawia, że wygląda elegancko i
            elegancko. MH3 550 ma przedni splitter i tylny dyfuzor wykonany w całości z włókna węglowego z serii M
            Performance. W rezultacie MH3 550 uzyskuje wysoką jakość, a także zaawansowane właściwości aerodynamiczne i
            zwiększony nacisk kontaktowy. Prowadzi to do lepszej stabilności i przyczepności podczas jazdy z dużą
            prędkością. Karbonowa maska MANHART z otworami wentylacyjnymi GTR dodaje unikalnej funkcji MH3 550, ale
            także pomaga chłodzić silnik dzięki zaawansowanemu przepływowi powietrza w komorze silnika.
          </p>
          <p className="description_box_text">
            Wnętrze MH3 550 w wersji 30-letniej pozostaje prawie nietknięte. Dwukolorowe wnętrze podstawowego samochodu
            M3 z edycji 30-letniej zaczyna się od przednich siedzeń i kończy na tylnych siedzeniach. Na konsoli
            środkowej i desce rozdzielczej MH3 550 jest wyposażony w różne panele z włókna węglowego. Dodatkowy
            wyświetlacz Awron dostarcza wszystkich niezbędnych informacji, takich jak ciśnienie doładowania, moc i
            temperatura, a także może sterować układem zaworów wydechowych.
          </p>
        </div>
      </section>
      <section className="galleryBmw">
        <ImageGallery items={images} showIndex={true} />
      </section>
      <BackToTopButton />
    </div>
  )
}

export default ProjectCar4
