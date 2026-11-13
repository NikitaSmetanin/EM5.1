import { useState } from 'react';
import { checkListArray } from '../../Fixtures/CheckListArray';
import type { CheckItem } from '../../Types/ListItems';
import './style.css';

function CheckListItem({ item }: { item: CheckItem }) {
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <li>
      <input type="checkbox" checked={item.isChecked} readOnly />
      <span className={isRemoved ? 'removed' : ''}>{item.name}</span>
      <button onClick={() => setIsRemoved(!isRemoved)}>
        {isRemoved ? 'Restore' : 'Delete'}
      </button>
    </li>
  );
}

export const CheckList = () => {
  return (
    <div>
      <h1>Check List</h1>
      <ul>
        {checkListArray.map((item) => (
          <CheckListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};