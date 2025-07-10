import React from "react";
import product_img01 from "@/images/products/product01.jpg";
import product_img02 from "@/images/products/product02.png";
import product_img03 from "@/images/products/product03.png";

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
        "Nuestros jabones artesanales están elaborados a partir de ingredientes naturales, libres de químicos agresivos, sulfatos, petrolatos y fragancias sintéticas. Cada fórmula está pensada para cuidar tu piel de manera consciente, respetuosa y efectiva, combinando propiedades terapéuticas con aromas naturales que acompañan tus rituales diarios. Utilizamos extractos vegetales, aceites esenciales y activos botánicos como arcillas, hierbas y flores, que aportan beneficios reales según cada necesidad: hidratación, limpieza profunda, alivio de irritaciones, regeneración o equilibrio.",
      price: "20.000",
    },
    {
      source: product_img02.src,
      width: 300,
      height: 341,
      text: "Shampoo sólido artesanal",
      alt_text: "produkt",
      text_description:
        "CABELLO NORMAL A GRASO: El romero estimula el crecimiento del cabello, fortalece las raíces y reduce la caída. El Laurel tiene propiedades antibacterianas y ayuda a controlar la caspa. La arcilla verde regula el exceso de sebo. Ideal para cabellos normales a grasos. También tenemos la opción para CABELLO SECO Y/O DAÑADO: El aceite de argán ayuda a reducir el frizz, la sequedad y el daño, además de actuar como protector térmico. La manteca de karité hidrata profundamente, fortalece y puede ayudar a calmar el cuero cabelludo irritado. Ideal para cabellos secos y/o dañados.",
      price: "20.000",
    },
    {
      source: product_img03.src,
      width: 300,
      height: 341,
      text: "Acondicionador natural",
      alt_text: "produkt",
      text_description:
        "Pensada para devolverle a tu cabello suavidad, brillo y elasticidad sin apelmazarlo ni saturarlo con químicos. Formulada con ingredientes vegetales y nutritivos, desenreda, hidrata y protege la fibra capilar desde la raíz hasta las puntas. No contiene siliconas, parabenos ni derivados del petróleo. En su lugar, usamos aceites naturales, extractos botánicos y acondicionadores biodegradables que respetan tu cuero cabelludo y el medio ambiente.",
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
