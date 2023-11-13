import React from "react"
import e30img0 from "../../graphics/bmw-e30/bmw-e30-img0.jpg"
import e30img1 from "../../graphics/bmw-e30/bmw-e30-img1.jpg"
import e30img2 from "../../graphics/bmw-e30/bmw-e30-img2.jpg"
import e30img3 from "../../graphics/bmw-e30/bmw-e30-img3.jpg"
import e30img4 from "../../graphics/bmw-e30/bmw-e30-img4.jpg"
import e30img5 from "../../graphics/bmw-e30/bmw-e30-img5.jpg"
import e30img6 from "../../graphics/bmw-e30/bmw-e30-img6.jpg"
import e30img7 from "../../graphics/bmw-e30/bmw-e30-img7.jpg"
import e30img8 from "../../graphics/bmw-e30/bmw-e30-img8.jpg"
import e30img9 from "../../graphics/bmw-e30/bmw-e30-img9.jpg"
import e30img10 from "../../graphics/bmw-e30/bmw-e30-img10.jpg"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/scss/image-gallery.scss"
import "../../styles/carsStyles/ProjectCar1.scss"
const ProjectCar1 = () => {
  const images = [
    {
      original: e30img0,
      thumbnail: e30img0,
    },
    {
      original: e30img2,
      thumbnail: e30img2,
    },
    {
      original: e30img3,
      thumbnail: e30img3,
    },
    {
      original: e30img4,
      thumbnail: e30img4,
    },
    {
      original: e30img5,
      thumbnail: e30img5,
    },
    {
      original: e30img6,
      thumbnail: e30img6,
    },
    {
      original: e30img7,
      thumbnail: e30img7,
    },
    {
      original: e30img8,
      thumbnail: e30img8,
    },
    {
      original: e30img9,
      thumbnail: e30img9,
    },
    {
      original: e30img10,
      thumbnail: e30img10,
    },
  ]

  return (
    <div className="wrapper">
      <section className="title">
        <img src={e30img1} alt="Bmw e30, widok lewy przód" className="title_img" />
        <div className="title_text">
          power coupé par <br />
          excellence: 715 km
          <br /> mh2 700e
        </div>
      </section>
      <section className="specifications">
        <div className="specifications_title">Dane Techniczne</div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Silnik</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Sześciocylindrowy rzędowy silnik o pojemności 3,5 litra</li>

              <li className="specifications_box_list_text">Turbosprężarka MANHART</li>

              <li className="specifications_box_list_text">Chłodnica powietrza doładowującego MANHART</li>

              <li className="specifications_box_list_text">
                Blokowany mechanizm różnicowy MANHART firmy Drexler z dodatkową chłodnicą
              </li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wydajność</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Oryginał: 200 KM i 240 Nm</li>
              <li className="specifications_box_list_text">Dostrojone: 405 KM i 650 Nm</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wydech</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Układ wydechowy MANHART</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Zawieszenie</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Zestaw zawieszenia MANHART firmy H&R</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Koła i opony</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">
                MANHART Concave One w kolorze jedwabiście matowym czarnym
              </li>
              <li className="specifications_box_list_text">FA: 8,5 x 19” (215/35 R19)</li>
              <li className="specifications_box_list_text">RA: 9,5 x 19” (245/30 R19)</li>
              <li className="specifications_box_list_text">Dekoracja obręczy MANHART w kolorze czerwonym</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Hamulce</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Zestaw hamulcowy MANHART</li>
              <li className="specifications_box_list_text">FA: 330 x 32 mm / 4-tłoczkowe zaciski Brembo</li>
              <li className="specifications_box_list_text">RA: 282 x 12 mm / zaciski standardowe</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wnętrze</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Wnętrze skórzane MANHART w kolorze kardynalnej czerwieni</li>
              <li className="specifications_box_list_text">Kierownica MANHART firmy Momo (350 mm)</li>
              <li className="specifications_box_list_text">Wyświetlacz danych MANHART</li>
            </ul>
          </div>
        </div>
        <div className="specifications_box">
          <div className="specifications_box_inner">
            <div className="specifications_box_title">Wygląd zewnętrzny</div>
            <ul className="specifications_box_list">
              <li className="specifications_box_list_text">Przedni spoiler MANHART Carbon</li>
              <li className="specifications_box_list_text">Tylny spoiler MANHART ze skrzydłem z włókna węglowego</li>
              <li className="specifications_box_list_text">
                Okładzina winylowa MANHART w kolorze matowej zieleni z zestawem naklejek w kolorze czerwonym
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="description_box">
          <div className="description_box_title">
            manhart mh3 3.5 turbo: Legendarny samochód turystyczny z sześciocylindrowym turbodoładowaniem
          </div>
          <p className="description_box_text">
            To w szalonych latach 80. BMW E30 M3 zdobyło aktualny do dziś tytuł najbardziej utytułowanego wyścigowego
            samochodu turystycznego wszechczasów: tytuł mistrza świata, dwa tytuły mistrzów Europy, ponad 60 mistrzostw
            stanowych - w tym dwa tytuły w Mistrzostwach Niemiec Samochodów Turystycznych i ponad 1000 ogólnych
            zwycięstw w krajowych i międzynarodowych wyścigach i rajdach samochodowych można przypisać barczystemu
            Bawarczykowi. Mając na uwadze taką aurę, naturalnie skorzystaliśmy z okazji, aby uszlachetnić kopię E30 M3.
          </p>
          <p className="description_box_text">
            Już w latach 80-tych i 90-tych nasi technicy nie stronili od skomplikowanych zamian technologii, na przykład
            wyposażając pojazdy E30 M3 w sześciocylindrowe silniki M z modeli E28 M5 (M88) lub E34 M5 (S38). MH3 3.5
            TURBO jest jeszcze bardziej spektakularny. Legendarny, wysokoobrotowy czterocylindrowy silnik o pojemności
            2,3 litra został wyrzucony z komory silnika M3, aby zrobić miejsce dla jeszcze bardziej szalonej jednostki:
            sześciocylindrowy turbodoładowany ALPINA B7 S Turbo przeniósł się do maszynowni! Dzięki wymuszonej
            wentylacji za pomocą turbosprężarki K27 firm Kühnle, Kopp i Kausch, ten 3,5-litrowy rzędowy
            sześciocylindrowy silnik zapewniał już „standardowe” 330 KM i 500 Nm, które napędzały B7 S Turbo w oparciu o
            BMW E12 do Vmax 260 km/h, co czyniło go wówczas najszybszym seryjnie produkowanym sedanem na świecie. Ale to
            nie wszystko! Po modyfikacjach turbosprężarki i intercoolera na żądanie dostępne jest teraz 405 KM i potężny
            moment obrotowy 650 Nm. Moc można regulować za pomocą ręcznego regulatora doładowania. Spaliny ryczą na
            zewnątrz przez układ wydechowy MANHART, co nie ma wpływu na historyczny wstęp. Moc silnika przenoszona jest
            na koła napędowe za pośrednictwem pięciobiegowej manualnej skrzyni biegów i mechanizmu różnicowego Drexler z
            25-procentową blokadą i dodatkową chłodnicą.
          </p>
          <p className="description_box_text">
            Aby po raz kolejny podkreślić dziedzictwo sportów motorowych MH3 3.5 TURBO, daliśmy dwudrzwiowej limuzynie
            przedni spojler z włókna węglowego i tylny spojler ze skrzydłami z włókna węglowego, z których każdy
            przypomina ostateczny etap rozbudowy E30 M3 „Sport Evolution”. Ponadto MH3 3.5 TURBO ma na sobie matową
            zieloną foliową sukienkę, z którą czarne tylne światła i kierunkowskazy kontrastują znacznie mniej niż
            otaczające je czerwone linie akcentujące. Są one również noszone na własnych felgach aluminiowych: Koła
            MANHART Concave One w klasycznym układzie podwójnych szprych mają wymiary 8,5 x 19 cali z oponami 215/35R19
            na osi kierowanej i 9,5 x 19 cali z oponami 245/30 na osi oś napędowa. Za kombinacjami koła i opony zaciski
            układu hamulcowego MANHART świecą jaskrawoczerwono, co działa na nawiercanych tarczach milimetrowych 330x32
            z czterotłoczkowymi stałymi zaciskami Brembo z przodu. Z tyłu również nawiercane tarcze hamulcowe połączono
            z pływającymi zaciskami OEM E30 M3. Jednorurowe zawieszenie gwintowane MANHART firmy H&R zapewnia optymalną
            przyczepność kół do nawierzchni i wyjątkowo zwinne prowadzenie cywilnego samochodu wyścigowego.
          </p>
          <p className="description_box_text">
            Jeśli chodzi o kabinę pasażerską MH3 3.5 TURBO, nie trzeba obawiać się ascezy sportów motorowych: tutaj
            pasażerów wita oryginalne skórzane wnętrze w kardynalnej czerwieni. Trójramienna sportowa kierownica Momo o
            średnicy 350 milimetrów i drewniana gałka zmiany biegów noszą logo MANHART. Wyświetlacz danych wbudowany po
            lewej stronie środkowego nawiewu informuje kierowcę o licznych parametrach życiowych turbodoładowanego
            silnika B7 S.
          </p>
        </div>
      </section>
      <section className="gallery">
        <ImageGallery items={images} showIndex={true} />
      </section>
    </div>
  )
}

export default ProjectCar1
