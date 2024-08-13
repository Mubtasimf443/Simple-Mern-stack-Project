 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */




import React, { useMemo, useRef } from 'react'
import { InputBox } from './InputBox.jsx'
import {useDispatch,useSelector} from 'react-redux'
import { addEmail, addiMAGE, addName, addNumber, addpassword } from './redux/action.jsx'


const inputstyle = {
  display :'flex',
  flexDirection:'column',
  justifyContent:'center'
}







const Home = () => {
  let name = useSelector(state => state.name)
  let email = useSelector(state => state.email)
  let number = useSelector(state => state.number)
  let password = useSelector(state => state.password)
  let image = useSelector(state => state.image)



  useMemo(() => {
    console.log({name , email ,number , password ,image})
  } , [name, email , number ,password ,image])



  let ImgComp = () => {
    if (image.length === 0) return <span></span>
    return image.map(({url }) => {
      return <img style={{width:'10em'}} src={url} />
    })
  }
  let dispatch = useDispatch()
  return (
    <section style={{paddingLeft:'20em'}}>
        <h2 style={{paddingLeft:'5em'}}>
            Form
        </h2>
        <form 
        style={{boxSizing:'border-box' ,display:'flex',flexDirection:'column',justifyContent:'center',
          marginTop:'2em',
          boxShadow :'0px 0px 10px rgba(0,33,234,0.3)',
          width :'50em',
          padding :'2em 1em',
          rowGap :'1.4em',
          borderRadius :'1em',
       
        }}
        >
        <div style={inputstyle
          
        }>
        <label htmlFor='name'>Upload Images</label>
        <input onChange={e => dispatch(addiMAGE(e.target.files[0]))} id='name' type="file" />
        </div>

<span style={{display :'grid',gridTemplateColumns :'repeat(2 ,0.2fr)'}}>
<ImgComp></ImgComp>
</span>

        <div style={inputstyle}>
      <label htmlFor='name'>name</label>
      <input onChange={e => dispatch(addName(e.target.value))} id='name' type="text" />
    </div>
    <div style={inputstyle}>
      <label htmlFor='Email'>Email </label>
      <input onChange={e => dispatch(addEmail(e.target.value))}  id='Email' type="text" />
    </div>
    <div style={inputstyle}>
      <label htmlFor='number'>number</label>
      <input onChange={e => dispatch(addNumber(e.target.value))}  id='number' type="text" />
    </div>
    <div style={inputstyle} >
      <label htmlFor='password'>password</label>
      <input onChange={e => dispatch(addpassword(e.target.value))}  id='password' type="text"  />
    </div>
            <button style={{color :'white',background:'blue' , width: '6em'}}>click</button>
        </form>
    </section>
  )
}

export default Home











