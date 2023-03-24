// styling
import './_Breadcrumb.scss';

// assets
import Chevron from './Chevron';

// interface definition
interface IBreadcrumb {
  categories: String[]
};

// main component definition
const Breadcrumb = ({
  categories = []
}: IBreadcrumb) => {
  return (
    <nav className="breadcrumb-wrapper">
      <ol>
        { categories.map((category, i, arr) => {
          return (
            <li key={ i }>
              { category }

              { arr.length - 1 !== i && <Chevron /> }
            </li>
          );
        }) }
      </ol>
    </nav>
  );
};

export default Breadcrumb;