import React , { useState } from 'react';

const Login = () => {
    const [ formData , changeFormData ] = useState({ email : '' , password : '' })
    const onFormSubmit = (e) => {
        e.preventDefault();

        if ( formData.email != '' && formData.password != ''){
            console.log('form submit');
            console.log(formData);
            
        }
    }

    const onValuesChange = (e) => {
        changeFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const disabled = false;



    return (
        <div>
            <form onSubmit={onFormSubmit} style={{ 
                // width:'500px', 
                alignItems:'center' , 
                textAlign : 'center' ,
                display:'flex',
                justifyContent:'center',
                flexDirection:'column'
            }}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Email" className="form-control" required name="email" onChange={onValuesChange}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Password" className="form-control" required name="password" onChange={onValuesChange}/>
                </div>
                <button type="text" className="btn btn-success" disabled={disabled}>Login</button>
            </form>
        </div>

    );
}

export default Login;

