import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
    return (
      <>
        <p className={css.title}>Find contacts by name</p>
        <input className={css.input} type="text" name="filter" value={filter} onChange={onChange} />
      </>
    );
}