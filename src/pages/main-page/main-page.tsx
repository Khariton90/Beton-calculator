import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import './main-page.scss';
import mixerImage from '../../assets/craiyon_171437_beton_auto_mixer.png'
import doorImage from '../../assets/craiyon_172634_door_and_calculator.png';
import radiatorImage from '../../assets/4b09e1f9d1d344f4a5230fda2783490e.jpg';
import cuttImage from '../../assets/cutt.png';
import handleBetonImage from '../../assets/handle-beton.png';
import sandImage from '../../assets/sand.png';
import stone2Image from '../../assets/stone2.png';
import fenceImage from '../../assets/fence_2.png';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getDelivery } from '../../modules/beton-factory/store/action';

export function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const delivery = useAppSelector(({ dataReducer }) => dataReducer.delivery);

  useEffect(() => {
    if (delivery?.from) {
      dispatch(getDelivery({
        from: null,
        to: null,
        distance: null,
        price: null,
        fromCoords: []
      }))
    }
  }, [delivery, dispatch])

  return (
    <div className="page main-page">
      <div className="main-page header-block">
        <h2>Приложения</h2>
      </div>
      <div className="main-page-wrapper">
        <Card sx={{ maxWidth: 345 }} onClick={() => setTimeout(() => navigate(AppRoute.BetonFactory), 500)}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={mixerImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Бетон с завода
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для расчета бетона с завода изготовителя.
                Производит расчет бетона и доставку до адреса.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={fenceImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Заборы и ограждения
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для расчета различных видов забора. Расчет количества материалов.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={sandImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Строительный песок
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для расчета песка.
                Расчет количества и стоимости до адреса клиента.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={stone2Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Щебень гранитный
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для расчета щебня.
                Расчет количества и стоимости до адреса клиента.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={doorImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Монтаж дверей
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для монтажа межкомнатных и входных дверей.
                Помогает точно расчитать услуги установки без проведения замера.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={radiatorImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Радиаторы отопления
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для расчета радиаторов отопления, с учетом всех особенностей помещений.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={cuttImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Карта распила
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для оформления нестандартной карты распила.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={handleBetonImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Пропорции бетона
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Сервис для расчета бетона для ручного замешивания. Расчет количества мешков.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  )
}