// import 't Orders.css'
import { useContext } from "react";
import Context from "../../context/Context";
import { PropTypes } from "prop-types";
import TotalPrice from "../TotalPrice";
import "./SummaryListComponent.scss"

function SummaryListComponent({view}) {
  const { summaryList, setSummaryList } = useContext(Context);

  const removeOneSummaryList = (id) => {
    const filteredWithOutProduct = summaryList.filter((product) => product.id != id);
    setSummaryList(filteredWithOutProduct);
  };

  return (
    <div className="summaryListComponent">
      {summaryList.map((product) => (
        <div key={product.id} className="summaryListComponent-productContainer">
          <div className="summaryListComponent-productContainer-texts">
            <div className="summaryListComponent-productContainer-texts-name">
              <h6>{`${product.quantity}x`}</h6>
              <h6>{product.name}</h6>

            </div>
              {view === "summary" && product.observation && (
                <div className="summaryListComponent-productContainer-texts-obs">
                  <h6>Observações:</h6>
                  <p>{product.observation}</p>
                </div>
              )}
          </div>

          <p className="summaryListComponent-productContainer-price">{`R$ ${product.price.toFixed(2)}`}</p>

          {view === "summary" && (
            <>
              <button
                type="button"
                className="summaryListComponent-productContainer-btn"
                onClick={()=> removeOneSummaryList(product.id)}
              >
                Remover Item
              </button>
            </>
          )}
        </div>
      ))}
      <TotalPrice view="pedido"/>
    </div>
  )
}

export default SummaryListComponent

SummaryListComponent.propTypes = {
  view: PropTypes.string,
};
