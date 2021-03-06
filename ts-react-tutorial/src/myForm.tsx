import React, {useState} from 'react'

type Params = {
    name:string
    description:string
}
type MyFormProps = {
    onSubmit : (form:Params) => void 
}

function MyForm({onSubmit}:MyFormProps){
    const [form,setForm] = useState({
        name:'',
        description:''
    })

    const {name,description} = form

    const onChage = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(form)
        setForm({
            name:'',
            description:''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChage}/>
            <input name="description" value={description} onChange={onChage}/>
            <button type="submit">
                등록
            </button>
        </form>
    )
}

export default MyForm