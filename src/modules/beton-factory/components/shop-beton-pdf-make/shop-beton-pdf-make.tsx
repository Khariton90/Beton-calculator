import { Button } from "@mui/material";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import dayjs from 'dayjs';
import { useState } from "react";
import './shop-beton-pdf-make.scss';
import { pdfSvgLine } from "../../consts/mocks";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export function ShopBetonPdfMake(): JSX.Element {
  const [url, setUrl] = useState<any>(null);

  const docDefinition = {
    content: [
      {
        // if you specify width, svg will scale proportionally
        svg: pdfSvgLine,
        width: 120
      },
      {
        toc: {
          title: {text: `Расчет бетона от ${dayjs().format('DD.MM.YYYY')}.`, style: 'header'}
        }
      },
      {
        layout: 'lightVerticalLines', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [ 200, 100, 80, 100 ],
          body: [
            [ 'Название', 'Количество', 'Цена', 'Всего' ],
            [ { text: 'Стоимость работы АБН, c НДС'}, 'Val 2', 'Val 3', 'Val 4' ],
            [ { text: 'Стоимость работы АБН, c НДС'}, 'Val 2', 'Val 3', 'Val 4' ],
            [ { text: 'Стоимость работы АБН, c НДС' }, 'Val 2', 'Val 3', 'Val 4' ],
            [ { text: 'Стоимость работы АБН, c НДС' }, 'Val 2', 'Val 3', 'Val 4' ],
            [ { text: 'Стоимость работы АБН, c НДС' }, 'Val 2', 'Val 3', 'Val 4' ]
          ]
        }
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        marginTop:10,
        marginBottom:5,
      },
      anotherStyle: {
        italics: true,
      }
    }
  };

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    })
  }

  return (
    <div className="shop-beton-pdf">
      <Button variant="contained" onClick={createPdf}>Сохранить</Button>
      {
        url && <a className="pdf-link" href={url} target='_blanc'>Перейти</a>
      }
    </div>
  )
}