export default SelectLangue = ({id, select}) =>{  
    return(
        <div className="selectLangue">
            <select key={id} onChange={select}>
                <option value="">Selecione Idioma</option>
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
                <option value="es">Espanhol</option>
                <option value="de">Alemão</option>
                <option value="fr">Francês</option>
            </select>
        </div>
    );
};