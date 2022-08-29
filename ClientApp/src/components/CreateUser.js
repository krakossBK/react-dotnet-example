import React from 'react'


const CreateUser = ({onChangeForm, createUser }) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <form>
                    <div className="row">
                        <div className="form-group col-md-4">
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="firstname" id="firstname" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="lastname" id="lastname" placeholder="Last Name" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createUser()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser