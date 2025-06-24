import React from "react";
import product_img01 from "@/images/products/product01.jpg";
import product_img02 from "@/images/products/product02.jpg";
import product_img03 from "@/images/products/product03.jpg";
import product_img04 from "@/images/products/product04.jpg";

import "@/components/Products/products.scss";

const Products = () => {
  const ProductsItemsList = [
    {
      source: product_img01.src,
      width: 300,
      height: 341,
      text: "Jabones artesanales Idun",
      alt_text: "produkt",
      text_description:
        "Aflux, renomowana marka kosmetyków, prezentuje swoją najnowszą propozycję - krem do rąk o niezrównanej jakości i skuteczności. Ten wyjątkowy produkt został stworzony z myślą o pielęgnacji skóry dłoni, dbając jednocześnie o nawilżenie, odżywienie i ochronę. Formuła kremu została opracowana z użyciem najwyższej jakości składników, które doskonale pielęgnują i regenerują skórę. Bogate w substancje odżywcze i witaminy, krem głęboko nawilża skórę, przywracając jej elastyczność i miękkość. Dzięki zawartości naturalnych ekstraktów roślinnych, zapewnia on intensywną regenerację nawet najbardziej wysuszonej skóry.",
      price: "49,99",
    },
    {
      source: product_img02.src,
      width: 300,
      height: 341,
      text: "Más jabones naturales Idun",
      alt_text: "produkt",
      text_description:
        "Odkryj tajemnicę piękna Twojej skóry dzięki Aflux® Kremowi do Twarzy - innowacyjnemu rozwiązaniu, które łączy w sobie potęgę naturalnych składników i zaawansowanej technologii kosmetycznej. Nasz krem to nie tylko produkt pielęgnacyjny, to codzienna dawka luksusu i blasku dla Twojej cery. Jego unikalna formuła opiera się na starannie dobranych składnikach pochodzenia roślinnego, bogatych w witaminy, minerały oraz przeciwutleniacze. Dzięki zawartości organicznych ekstraktów roślinnych, olejków eterycznych i substancji odżywczych, nasz krem nawilża, regeneruje oraz chroni skórę przed działaniem szkodliwych czynników zewnętrznych. Dzięki regularnemu stosowaniu zauważysz redukcję drobnych linii i zmarszczek, a Twoja cera odzyska blask i elastyczność. Bez względu na Twój typ cery - suchą, tłustą, mieszana czy wrażliwą - nasz krem doskonale się sprawdzi. Jest idealnym wyborem dla osób poszukujących naturalnego i skutecznego sposobu pielęgnacji skóry. Rozkoszuj się chwilą pielęgnacji i daj swojej skórze to, na co zasługuje - Aflux® Krem do Twarzy. Dołącz do tysięcy zadowolonych użytkowników i odkryj sekret zdrowej, pięknej skóry z Aflux®!",
      price: "20.000",
    },
    {
      source: product_img03.src,
      width: 300,
      height: 341,
      text: "SHAMPOO SÓLIDO ARTESANAL",
      alt_text: "produkt",
      text_description:
        "CABELLO NORMAL A GRASO: El romero estimula el crecimiento del cabello, fortalece las raíces y reduce la caída. El Laurel tiene propiedades antibacterianas y ayuda a controlar la caspa. La arcilla verde regula el exceso de sebo. Ideal para cabellos normales a grasos. También tenemos la opción para CABELLO SECO Y/O DAÑADO: El aceite de argán ayuda a reducir el frizz, la sequedad y el daño, además de actuar como protector térmico. La manteca de karité hidrata profundamente, fortalece y puede ayudar a calmar el cuero cabelludo irritado. Ideal para cabellos secos y/o dañados",
      price: "20.000",
    },
    {
      source: product_img04.src,
      width: 300,
      height: 341,
      text: "Crema de enjuague Idun",
      alt_text: "produkt",
      text_description:
        "Rozpocznij dzień z pięknymi, promiennymi oczami dzięki Aflux® Kremowi Pod Oczy - wyjątkowemu rozwiązaniu pielęgnacyjnemu, które rewitalizuje, nawilża i odmładza delikatną skórę wokół oczu. Nasz krem to nie tylko produkt kosmetyczny, to właściwa dawka pielęgnacji, która przywraca świeżość i blask Twojemu spojrzeniu. Dzięki zaawansowanej formule opartej na składnikach pochodzenia roślinnego, w tym na ekstraktach roślinnych, witaminach i peptydach, Aflux® Krem Pod Oczy redukuje widoczność cieni i worków pod oczami, wygładza drobne linie i zmarszczki, oraz eliminuje oznaki zmęczenia. Lekka konsystencja kremu delikatnie się wchłania, nie obciążając skóry, zapewniając uczucie komfortu i świeżości. Pozwól swoim oczom odzyskać blask i witalność, dbając o nie codziennie z Aflux® Kremem Pod Oczy - odkryj tajemnicę młodszego, bardziej promiennego spojrzenia już dziś!",
      price: "20.000",
    },
  ];

  return (
    <div className="flex bg-white w-full justify-center" id="products">
      <div className="flex flex-col container py-16 lg:py-32 justify-center items-center">
        <h1 className="text-black text-2xl lg:text-4xl font-regular mt-8 mb-2 text-center">
          - Nuestros productos -
        </h1>
        <p className="text-black text-lg lg:text-xl font-light text-center">
        ¡Empeza a cuidar tu piel!
        </p>
        <div className="products-wrapper flex flex-col flex-wrap gap-10 justify-center items-center">
          {ProductsItemsList.map((ProductsListItem) => (
            <div
              className="products-wrapper__slot flex flex-col lg:flex-row justify-center items-center my-16"
              data-aos="fade-up"
            >
              <div className="flex flex-col">
                <img
                  className="lg:me-10"
                  src={ProductsListItem.source}
                  alt={ProductsListItem.alt_text}
                  width={ProductsListItem.width}
                  height={ProductsListItem.height}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-black text-xl mb-4 mt-4 m-auto font-bold lg:mt-0 lg:ms-0">
                  {ProductsListItem.text}
                </p>
                <p className="text-black text-sm text-justify mb-4 m-auto w-4/5 lg:w-[36vw]">
                  {ProductsListItem.text_description}
                </p>
                <p className="text-black text-xl m-auto lg:ms-0">
                  Precio:${" "}
                  <span className="text-black text-2xl font-bold">
                    {ProductsListItem.price}
                  </span>{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
