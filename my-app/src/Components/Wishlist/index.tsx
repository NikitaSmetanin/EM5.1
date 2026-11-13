import { useRef, useState} from "react";
import type { CheckItem } from "../../Types/ListItems";
import { WishlistItem } from "./WishlistItem";

export type WishlistProps = {
    title: string,
    list: CheckItem[],  
}

export const Wishlist = (props:WishlistProps) => {
    let inputRef = useRef<HTMLInputElement>(null);
    const [list, setList] = useState(props.list);


    function handleClick() {

        if(inputRef.current){
            const value:string = inputRef.current.value;

            const tmpObj = {
                id: list.length + 2,
                name: value,
                isChecked: false
            }

            setList([...list, tmpObj]);
            inputRef.current.value = ''; 
        }
    }

    function handleRemove(id:number):void
    {
        const newList = list.map(item => {

            if(item.id === id)
                return {

                    ...item,
                    isChecked: !item.isChecked,
                }
            else 
                return item;

        })

        setList(newList);
    }

    function getCount(){
        return list.reduce((acc, item) => item.isChecked ? acc += 1 : acc += 0, 0)
    }

     return (<>
        <div className="wishlist-title">
            <h2>{props.title}</h2>
        </div>
        <div className="wishlist-form">
            <input ref={inputRef} type="text"></input>
            <button onClick={handleClick}>Add Item</button>
        </div>
        <div className="wishlist-list">
            <ul>
                {
                    list.map((item) => <WishlistItem key={item.id} item={item} removeFunc={handleRemove} />)
                }
            </ul>
        </div>
        <div className="wishlist-counter">
            <p>{getCount()} out if {list.length} items bought</p>
        </div>
    </>)
};
