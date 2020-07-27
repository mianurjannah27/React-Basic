import React,{useState} from 'react';
import './Crud.css';
const Crud = () => {
    const[listTutorial, setlistTutorial] = useState([
        {
            id:1,
            name: 'CodeIgniter'
        },
        {
            id:2,
            name: 'Vue.js'
        },
        {
            id:3,
            name: 'React.js'
        },
        {
            id:4,
            name: 'Node.js'
        },
        {
            id:5,
            name: 'laravel'
        }
    ]);
    
    const [form,setForm] = useState({
        name: ""
    });
    const onChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const{name} = form

    const list = listTutorial.map((list,index) => (
        <li key={index}>
            {list.id}-{list.name}<span onClick={()=> handleDelete(list.id)} className="remove"> X </span>
        </li>
    ));
    const onSubmit = (e) => {
        let initId = listTutorial.length +1;
        e.preventDefault();
        setlistTutorial([
            ...listTutorial,{
            id: initId++,
            name
            }
        ]);
    }

    const handleDelete = (id) =>{
        const filter = listTutorial.filter(list => list.id !== id );
        setlistTutorial(filter);
    };

    return (
        <div className="crud-container">
            <h1>List Tutorial</h1>
            <form onSubmit={(e)=> onSubmit(e)}>
                <div>
                    <input name="name" type="text" placeholder="Tutorial Name" value={name} onChange={(e)=>onChange(e)} />
                </div>
                <div>
                    <button type="submit">Simpan</button>
                </div>
            </form>
            
            <ul>{list}</ul>
        </div>
    )
}

export default Crud
