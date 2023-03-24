// modules
import numeral from 'numeral';

import {
  Link
} from "react-router-dom";

// styles
import './_ItemList.scss';

// interface
import {
  IProduct
} from '../../common/interfaces';

// assets
import FreeShipping from './free-shipping.png';

// interface definition
interface IItemProps {
  item: IProduct
};

// main component definition
const ItemList = ({ item }: IItemProps) => {
  return (
    <div className="item-wrapper">
      <Link to={`/item/${ item.id }`}>
        <img
          className="item-image"
          src={ item.picture }
          alt={ item.title }
        />
      </Link>

      <div className="item-info">
        <div className="item-detail">
          <span className="price" title="Precio">
            <Link to={`/item/${ item.id }`}>
              { item.price.symbol } { numeral(item.price.amount).format('0,0') }
            </Link>

            { !!item.free_shipping &&
              <img
                src={ FreeShipping }
                alt="Free Shipping"
                title="Envio Gratis"
              />
            }
          </span>

          <span
            className="title"
            title={ item.title }
          >
            <Link to={`/item/${ item.id }`}>
              { item.title }
            </Link>
          </span>
        </div>

        <div className="item-location">
          <span title={ item.location }>
            { item.location }
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemList;