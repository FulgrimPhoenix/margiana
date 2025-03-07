import "./Selector.scss";

interface ISelector {
  title: string;
  options: string[];
  optionState: string;
  selectorState: boolean;
  setSelectorsStates: () => void;
  handleOptionClick: (e: React.MouseEvent<HTMLElement>) => void;
  style?: Record<string, string | number>;
}

export const Selector = ({
  title,
  options,
  optionState,
  selectorState,
  setSelectorsStates,
  handleOptionClick,
  style,
}: ISelector) => {
  const optionsArr = options.map((el) => ({ value: el }));
  return (
    <div className="selector" style={style}>
      <h2 className="selector__title">{title}</h2>
      <div className="selector__container">
        <button
          className="selector__selected"
          onClick={() => setSelectorsStates()}
        >
          {optionState}
        </button>
        <div
          className={`store__products-on-page-selector-options ${
            selectorState ? "store__products-on-page-selector-options_open" : ""
          }`}
        >
          {optionsArr.map((el) => {
            return (
              <button
                key={`option-${el.value}`}
                className={`store__products-on-page-selector-option ${
                  optionState === el.value
                    ? "store__products-on-page-selector-option_selected"
                    : ""
                }`}
                onClick={(e) => handleOptionClick(e)}
              >
                {el.value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
