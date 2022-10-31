import {FC} from 'react';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import PageHeader from '../../components/page-header/page-header';

export const NotFoundPage: FC = () => (
  <div className="page">
    <PageHeader/>
    <h1>Страница не найдена</h1>
    <Link to={AppRoute.Main}>Перейти на главную</Link>
  </div>
);
