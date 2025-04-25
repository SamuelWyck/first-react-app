

function List(props) {

    if (props.list === undefined) {
        return <div>Loading...</div>;
    }

    const liList = [];
    for (let item of props.list) {
        if (item.startsWith("p")) {
            const li = <li key={item}>{item}</li>;
            liList.push(li);
        }
    };

    return (
        <ul>
            {liList}
        </ul>
    );
};


export default List;