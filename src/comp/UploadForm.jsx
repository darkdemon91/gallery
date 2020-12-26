import React, { useState } from 'react'
import Progress from "./Progress";

const UploadForm = () => {

    const [file, setFile ] = useState(null)
    const [ error, setError ] = useState(null)

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = e => {
        let selected = e.target.files[0]
        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError('Пожалуйста выберете файл в формате (.png или .jpeg)')
        }
    }

    return(
            <form>
                <label>
                    <input type="file" onChange={changeHandler}/>
                    <span>+</span>
                </label>
                <div className='output'>
                    {error && <div className="error">{error}</div>}
                    { file && <div>{file.name}</div> }
                    { file && <Progress file={file} setFile={setFile}/>}
                </div>
            </form>
    )
};

export default UploadForm;
