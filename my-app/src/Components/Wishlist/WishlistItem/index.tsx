import type { CheckItem } from "../../../Types/ListItems";


type WishListItemProps = {
    item: CheckItem,
    removeFunc: (id:number) => void
}

export function WishlistItem( props : WishListItemProps) {

  return (
    <li>
      <span className={props.item.isChecked ? 'removed' : ''}>{props.item.name}</span>
      <button onClick={() => props.removeFunc(props.item.id)}>
        {props.item.isChecked ? 'Restore' : 'Delete'}
      </button>
    </li>
  );
}
