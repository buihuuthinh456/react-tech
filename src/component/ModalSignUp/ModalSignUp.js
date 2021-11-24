import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import './ModalSignUp.css'
import Button from '../Button'
function ModalSignUp(){

    const [account,setAccount] = useState('')
    const [pass,setPass] = useState('')
    const [repass, setRepass] = useState('') 
    let navigate = useNavigate();

    function checkInputForm(e,rules){
        const splitRules = rules.split('||')
        splitRules.forEach((item,index)=>{
            if(item.includes('min')){
                if(e.target.value.length < item.split('=')[1]){
                    e.target.parentElement.nextElementSibling.textContent=`Trường trên cần tối thiểu ${item.split('=')[1]} ký tự`
                    e.target.classList.add('error')
                    e.target.focus()
                }

            }
            if(item.includes('max')){
                if(e.target.value.length > item.split('=')[1]){
                    e.target.parentElement.nextElementSibling.textContent=`Trường trên cho phép tối đa ${item.split('=')[1]} ký tự`
                    e.target.classList.add('error')
                    e.target.focus()
                }
            }
            if(item.includes('required')){
                if(e.target.value === ''){
                    e.target.parentElement.nextElementSibling.textContent='Trường trên là thông tin bắt buộc'
                    e.target.classList.add('error')
                    e.target.focus()
                }
            }
            
        })
    }

    function checkForm(){
        const formElement = document.querySelector('.form-item.signup')
        const listInput = formElement.querySelectorAll('.form-input-input')
        let submit
        let information = {}
        function checkElement(element){
            const splitRules = element.getAttribute('rules').split('||')
            let flag = true
            splitRules.forEach((item,index)=>{
                if(item.includes('min')){
                    if(element.value.length < item.split('=')[1]){
                        element.parentElement.nextElementSibling.textContent=`Trường trên cần tối thiểu ${item.split('=')[1]} ký tự`
                        element.classList.add('error')
                        element.focus()
                        flag=false;
                    }
                }
                if(item.includes('max')){
                    if(element.value.length > item.split('=')[1]){
                        element.parentElement.nextElementSibling.textContent=`Trường trên cho phép tối đa ${item.split('=')[1]} ký tự`
                        element.classList.add('error')
                        element.focus()
                        flag=false;
                    }
                }
                if(item.includes('required')){
                    if(element.value === ''){
                        element.parentElement.nextElementSibling.textContent='Trường trên là thông tin bắt buộc'
                        element.classList.add('error')
                        element.focus()
                        flag=false;
                    }
                }
                
            }) 
            return flag      
        }
        function checkPass(){
            const passElement = formElement.querySelector('.form-input-input[name="pass"]')
            const repassElement = formElement.querySelector('.form-input-input[name="repass"]')
            if(passElement.value !== repassElement.value){
                submit=false
                alert('Mật khẩu nhập lại sai')
            }
        }
      
        listInput.forEach((element,index)=>{
           submit = checkElement(element)
           if(submit){
                information[element.name]=element.value
           }
        })

        checkPass()
        if(submit){
            console.log(information)
            navigate('/')
        }
    }

    function handleRemoveErorr(e){
        e.target.parentElement.nextElementSibling.textContent=''
        e.target.classList.remove('error')

    }
    function handleSubmit(e){
        e.preventDefault()
        checkForm()
    }

    useEffect(()=>{
        const listInput = document.querySelectorAll('.form-input-input')
        listInput.forEach((item,index)=>{
            item.addEventListener('blur',(e)=>{checkInputForm(e,item.getAttribute('rules'))})
        })
        return (()=>listInput.forEach((item,index)=>{
            item.removeEventListener('blur',()=>{console.log("sss")})
        }))

       
    },[])
    return(
        <div className="modal-signup-container">
            <div className="modal-signup-wrapper">
                <h3 className="modal-title"> Đăng Ký Tài Khoản</h3>
                <i className="fas fa-window-close close-btn-form" onClick={()=>{navigate('/')}} ></i>
                <form className="form-item signup">
                    <div className="form-input-container">
                        <label className="form-input-label"  htmlFor="account">
                            Tên đăng nhập
                        </label>
                        <input 
                            className="form-input-input" 
                            id="account" 
                            rules="required" 
                            type="text" 
                            name="name" 
                            placeholder="Nhập tài khoản" 
                            value={account}
                            onChange={
                                (e)=>{
                                    handleRemoveErorr(e)
                                    setAccount(e.target.value)
                                }
                            }
                        />
                    </div>
                    <span className="error-text"></span>
                    <div className="form-input-container">
                        <label className="form-input-label" htmlFor="password">
                            Mật khẩu
                        </label>
                        <input 
                            className="form-input-input" 
                            type="password" 
                            rules="required||min=8" 
                            id="password" 
                            name="pass" 
                            placeholder="Nhập mật khẩu" 
                            value={pass}
                            onChange={
                                (e)=>{
                                    handleRemoveErorr(e)
                                    setPass(e.target.value)
                                }
                            }
                        />
                    </div>
                    <span className="error-text"></span>
                    <div className="form-input-container">
                        <label className="form-input-label" htmlFor="password">
                            Nhập lại mật khẩu
                        </label>
                        <input 
                            className="form-input-input" 
                            type="password" 
                            rules="required" 
                            id="repassword" 
                            name="repass" 
                            placeholder="Nhập lại mật khẩu" 
                            value={repass}
                            onChange={(e)=>{
                                handleRemoveErorr(e)
                                setRepass(e.target.value)
                                
                            }}
                        />
                    </div>
                    <span className="error-text"></span>
                    <Button cName="submit-button" onClick={(e)=>{handleSubmit(e)}} >Đăng ký</Button>
                </form>
            </div>
        </div>
    )
}


export default ModalSignUp