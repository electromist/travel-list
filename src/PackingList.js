export default function PackingList({items, onDeleteItem, onToggleItem}){
    return (<div className="list">
        <ul>
            {items.map((item) =>(
                <Item item={item} onDeleteItem={onDeleteItem}
                      onToggleItem={onToggleItem}
                      key={item.id} />))}
        </ul>
    </div>)
}

function Item({item, onDeleteItem, onToggleItem}){
    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={()=>onToggleItem(item.id)}/>
            <span style={item.packed?{textDecoration:"line-through"}:{}}>
          {""}
                {item.quantity} {item.description}
          </span>
            <button onClick={()=>onDeleteItem(item.id)}>❌</button>
        </li>);
}

