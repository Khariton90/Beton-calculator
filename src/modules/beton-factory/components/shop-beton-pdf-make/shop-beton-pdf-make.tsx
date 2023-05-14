import { Button } from "@mui/material";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useState, useEffect } from "react";
import { pdfSvgLine } from "../../consts/mocks";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { getPdfList, setDirty } from "../../store/action";
import { PdfDto } from "../../types/types";
import dayjs from 'dayjs';
import './shop-beton-pdf-make.scss';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

type ShopBetonPdfMakeProps = {
  pdfData: PdfDto[],
  pdfDelivery: string[][]
}

export function ShopBetonPdfMake({pdfData, pdfDelivery}: ShopBetonPdfMakeProps): JSX.Element {
  const [url, setUrl] = useState<any>(null);
  const dispatch = useAppDispatch();
  const dirty = useAppSelector(({dataReducer}) => dataReducer.dirty);
  
  const docDefinition = {
    content: [
      {
        svg: pdfSvgLine,
        width: 120
      },
      {
        toc: {
          title: {text: `Расчет бетона от ${dayjs().format('DD.MM.YYYY')}.`, style: 'header'}
        }
      },
      {text: "Услуги:", style: 'subheader'},
      {
        layout: 'lightVerticalLines',
        style: "table",
        table: {
          headerRows: 1,
          widths: [20, 50, 180, 70, 70, 60 ],
          body: [
            ...pdfData.map((el, idx) => [idx && idx < pdfData.length - 1 ? idx.toString() : "", ...el]),
          ]
        }
      },
      {text: "Доставка:", style: 'subheader'},
      {
        style: "table",
        table: {
          headerRows: 1,
          widths: [200, 286],
          body: [
            ...pdfDelivery.map((el) => [...el])
          ]
        }
      },
      {
        text: "Уважаемые Пользователи, для продолжения оформления Заказа на аренду спецтехники, Вам необходимо уточнить у клиента, будут ли на объекте заливки предусмотрены подъездные пути, условия для разгрузки, а также место для замывки автобетононасоса.",
        style: 'footer'
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        marginTop:10,
        marginBottom:5,
      },
      table: {
        marginBottom:20,
      },
      subheader: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 5,
      },
      footer: {
        fontSize: 10,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20
      }
    }
  };

  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    });
  }

  useEffect(() => {
    dispatch(setDirty(false));
    dispatch(getPdfList(pdfData))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, url]);

  return (
    <div className="shop-beton-pdf">
      <Button variant="contained" onClick={createPdf}>Сохранить</Button>
      {
        url && !dirty ? <Button variant="contained" target="_blank" href={url}>Распечатать</Button>  :
        <Button disabled variant="contained">Распечатать</Button> 
      }
    </div>
  )
}