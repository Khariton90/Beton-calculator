import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { distancePrice } from '../../consts/mocks';
import { priceFormat } from '../../utils/utils';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { useState } from 'react';
import dayjs from 'dayjs';
import './beton-table.scss';
import { useAppSelector } from '../../../../hooks/hooks';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  qty: number | null,
  price: number | null,
  amount: number | null,
) {
  return { name, qty, price, amount };
}

export function BetonTable() {
  const [url, setUrl] = useState<any>(null);
  const beton = useAppSelector(({ dataReducer }) => dataReducer.beton);
  const mixerList = useAppSelector(({ dataReducer }) => dataReducer.mixerList);
  const delivery = useAppSelector(({ dataReducer }) => dataReducer.delivery);
  const mixerData = mixerList.length ? mixerList.map((item) => createData(`АБС ${item.weight} м³`, item.qty, null, item.qty)) : null;
  const mixerWeight = mixerList.length ? mixerList.reduce((acc, el) => (+el.qty * +el.weight) + acc, 0) : null;

  if (!beton || !mixerData) {
    return null
  }

  const row = beton && mixerData ? [
    createData(`Бетон ${beton.title.replace('P', 'П')}`, beton.qty, beton.price, beton.amount),
  ].concat(mixerData) : null;

  const antifreezeData = createData(`${beton.antifreeze.label ? 'Противоморозная добавка ' + beton.antifreeze.label + ' ❄' : ''}`, null, null, null);


  const docDefinition = {
    content: [
      {
        toc: {
          id: 'mainToc',
          title: {text: `Расчет бетона от ${dayjs().format('YYYY-MM-DD')}`}
        },
      },
      {
        text: `Название бетона: ${beton.title.replace('P', 'П')}`, 
        style: 'anotherStyle',
      },
      {
        text: `Количество: ${beton.qty}м3`, 
        style: 'anotherStyle',
      },
      {
        text: `Цена: ${priceFormat(beton.price)}`, 
        style: 'anotherStyle',
      },
      {
        text: `Итого: ${priceFormat(beton.amount)}`, 
        style: 'anotherStyle',
      },
      {
        text: `Адрес завода: ${delivery?.from}`, 
        style: 'anotherStyle',
      },
      {
        text: `Расстояние до адреса отгрузки: ${delivery?.distance}км`, 
        style: 'anotherStyle',
      },
      {
        text: `Сумма за доставку: ${delivery?.distance && mixerWeight ? priceFormat(distancePrice[delivery.distance] * mixerWeight) : ''}`, 
        style: 'anotherStyle',
      },
      {
        text: `Общая сумма: ${mixerWeight && delivery?.distance ? priceFormat(distancePrice[delivery.distance] * mixerWeight + beton.amount) : ''}`, 
        style: 'anotherStyle',
      }
    ],
  };



  const createPdf = () => {
    const pdfGenerator = pdfMake.createPdf(docDefinition);
    pdfGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setUrl(url);
    })
  }

  return (
    <div className="beton-table" style={{ width: "100%" }}>
      <h2 className="section-title">Итоговый расчет</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Название</StyledTableCell>
              <StyledTableCell align="right">Ед.</StyledTableCell>
              <StyledTableCell align="right">Цена</StyledTableCell>
              <StyledTableCell align="right">Всего</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row ? row.map((row, i) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{i === 0 && row.qty ? row.qty + ' м³' : row.qty}</StyledTableCell>
                <StyledTableCell align="right">{i === 0 && row.price ? priceFormat(row.price) : row.price}</StyledTableCell>
                <StyledTableCell align="right">{i === 0 && row.amount ? priceFormat(row.amount) : row.price}</StyledTableCell>
              </StyledTableRow>
            )) : null}

            {
              antifreezeData.name ? <StyledTableRow key={antifreezeData.name}>
              <StyledTableCell component="th" scope="row">
                {antifreezeData.name}
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow> : null
            }
          </TableBody>
        </Table>
      </TableContainer>

      {
        delivery?.distance ?
          <><TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Адрес завода</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right">Расстояние</StyledTableCell>
                  <StyledTableCell align="right">Цена</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow key={delivery.from}>
                  <StyledTableCell component="th" scope="row">
                    {delivery.from}
                  </StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right">{delivery.distance}км</StyledTableCell>
                  <StyledTableCell align="right">{mixerWeight ? priceFormat(distancePrice[delivery.distance] * mixerWeight) : null}</StyledTableCell>
                </StyledTableRow>
              </TableBody>

            </Table>
          </TableContainer>
            <div className="total"><b>Итого: {mixerWeight ? priceFormat(distancePrice[delivery.distance] * mixerWeight + beton.amount) : null}</b></div>
            <div className="buttons">
              <button className="pdf-link" onClick={createPdf}>Сгенерировать PDF</button>
              { url && (
                <a className="pdf-link" href={url} target='_blanc'>Перейти</a>
              ) }
            </div>
          </>
          : null
      }
      <p className="notification"> Уважаемые Пользователи, для продолжения оформления Заказа на аренду спецтехники,
        Вам необходимо уточнить у клиента, будут ли на объекте заливки предусмотрены подъездные пути, условия для
        разгрузки, а также место для замывки автобетононасоса.</p>
    </div>
  );
}


