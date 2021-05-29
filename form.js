function TodoForm({add}){
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        add(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo ..."
            onChange={e => setValue(e.target.value)}
            />
        </form>

    );
}