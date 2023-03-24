// modules
import numeral from 'numeral';

// import styles
import './_ProductDetail.scss';

// interface
import {
  IProductDetail
} from '../../common/interfaces';

// interface definition
interface IProductDetailComponent {
  item: IProductDetail | null
};

// main component definition
const ProductDetail = ({
  item
}: IProductDetailComponent) => {
  if (!item) {
    return (
      <></>
    );
  }

  const [
    amout,
    decimals
  ] = numeral(item.price.amount).format('0.0,').split(',');

  return (
    <div className="product-wrapper">
      <div className="product-info">
        <span className="status">
          { item.condition === 'new' ? 'Nuevo' : 'Usado' } - { item.sold_quantity } Vendidos
        </span>

        <h1 className="title">
          { item.title }
        </h1>

        <span className="price">
          { item.price.symbol } { amout } <span>{ decimals }</span>
        </span>

        <button className="button" type="button">
          Comprar
        </button>
      </div>

      <div className="product-image-title">
        <img
          src={ item.picture}
          alt={ item.title }
        />

        <div className="info-wrapper">
          <h2 className="subtitle">
            Descripción del producto
          </h2>

          <p className="description">
            { item.description }
          </p>
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;